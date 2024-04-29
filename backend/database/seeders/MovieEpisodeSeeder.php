<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieEpisodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\MovieEpisode::create([
            'movie_id'=>1,
            'episode'=>'1',
            'video'=>'https://www.dailymotion.com/embed/video/x8m0gmb'
        ]);
        \App\Models\MovieEpisode::create([
            'movie_id'=>1,
            'episode'=>'2',
            'video'=>'https://www.dailymotion.com/embed/video/x8m0gmb'
        ]);
        \App\Models\MovieEpisode::create([
            'movie_id'=>1,
            'episode'=>'3',
            'video'=>'https://www.dailymotion.com/embed/video/x8m0gmb'
        ]);
        \App\Models\MovieEpisode::create([
            'movie_id'=>1,
            'episode'=>'4',
            'video'=>'https://www.dailymotion.com/embed/video/x8m0gmb'
        ]);
        \App\Models\MovieEpisode::create([
            'movie_id'=>2,
            'episode'=>'1',
            'video'=>'https://www.dailymotion.com/embed/video/x8m0gmb'
        ]);
        \App\Models\MovieEpisode::create([
            'movie_id'=>2,
            'episode'=>'2',
            'video'=>'https://www.dailymotion.com/embed/video/x8m0gmb'
        ]);
        \App\Models\MovieEpisode::create([
            'movie_id'=>2,
            'episode'=>'3',
            'video'=>'https://www.dailymotion.com/embed/video/x8m0gmb'
        ]);
        \App\Models\MovieEpisode::create([
            'movie_id'=>2,
            'episode'=>'4',
            'video'=>'https://www.dailymotion.com/embed/video/x8m0gmb'
        ]);
    }
}
