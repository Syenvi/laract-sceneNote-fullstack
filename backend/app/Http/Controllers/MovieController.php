<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\Image;
use App\Models\Movie;
use App\Models\MovieEpisode;
use Illuminate\Http\Request;
use App\Models\MovieEpisodeDetail;
use Illuminate\Support\Facades\Validator;


class MovieController extends Controller
{
    public function index()
    {
        $data = Movie::all();
        return response()->json([
            'message'=>'Success get all Movies',
            'data'=> $data
        ],200);
    }

    public function createMovie(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'title'=>'required',
            'excerpt'=>'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),422);
        }

        $data = Movie::create($request->all());

        return response()->json([
            'message'=> 'Todo created successfully',
            'data'=>$data
        ]);
    }

    public function editMovie(Request $request,Movie $movie)
    {
        $editedMovie = Movie::findOrFail($movie->id)->update($request->all());
        return response()->json([
            'message'=>'Successfully update Movie',
            'data'=>$editedMovie
        ]);

    }

    public function deleteMovie(Movie $movie)
    {
        Movie::findOrFail($movie->id)->delete();
        return response()->json([
            'message'=>'Successfully delete : ' . $movie->title
        ]);
    }

    public function showMovieDetail(Movie $movie)
    {
        $movieDetails = [
            'title' => $movie->title,
            'excerpt' => $movie->excerpt,
            'thumbnail' => $movie->image,
        ];
    
        $response = [
            'movie'=>$movieDetails,
            'episodes'=>$movie->episodes->map(function($episode){
                return[
                    'episode'=>$episode->episode,
                    'video'=>$episode->video,
                    'created_at'=>$episode->created_at
                ];
            })
        ];
    
        return response()->json([
            'message' => 'Success get Movie: ' . $movie->title,
            'data' => $response
        ]);
    }

    public function createMovieEpisode(Request $request,Movie $movie)
    {
        $validator = Validator::make($request->all(),[
            'movie_id'=>'required',
            'episode'=>'required',
            'video'=>'required',
            'notes' => 'nullable',
            'images' => 'nullable',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),422);
        }

        MovieEpisode::create([
            'movie_id'=>$request->movie_id,
            'episode'=>$request->episode,
            'video'=>$request->video
        ]);

        $insertNote = collect();
        foreach($request->notes as $note) {
            $map = [
                'movie_id'=>$request->movie_id,
                'episode'=>$request->episode,
                'note' => $note['note'],
            ];

            $insertNote->push($map);
        }

        Note::insert($insertNote->toArray());

        $insertImage = collect();
        foreach($request->images as $image){
            $map = [
                'movie_id'=>$request->movie_id,
                'episode'=>$request->episode,
                'image' => $image['image'],
            ];
            $insertImage->push($map);

        }

        Image::insert($insertImage->toArray());

        return response()->json([
            'message'=> 'Movie Episode created successfully',
        ]);
    }
    

    public function showEpisodeDetail(Movie $movie, $episode)
    {
        $currentMovie = MovieEpisode::where('movie_id',$movie->id)->where('episode',$episode)->first();
        $images = Image::where('movie_id',$movie->id)->where('episode',$episode)->get();
        $notes = Note::where('movie_id',$movie->id)->where('episode',$episode)->get();
        if($currentMovie){
        $movieData = [
            'movie_id'=> $currentMovie->movie_id,
            'title'=> $movie->title,
            'episode'=> $currentMovie->episode,
            'video'=> $currentMovie->video,
            'created_at'=> $currentMovie->created_at,
            'notes'=>$notes,
            'images'=>$images
        ];
        return response()->json([
            'message'=>'Successfully get movie',
            'data'=>$movieData
        ],200);
        }else{
        return response()->json([
            'message'=>'Movie ' .$movie->title . ' with episode ' .$episode . ' not found' 
        ],404);
        }
    }


}
