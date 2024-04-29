<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/movies')->group(function(){
    Route::get('/',[MovieController::class,'index']);
    Route::post('/',[MovieController::class,'createMovie']);
    Route::post('/createEpisode',[MovieController::class,'createMovieEpisode']);
    //movie detail
    Route::prefix('/{movie:excerpt}')->group(function(){
        Route::put('/',[MovieController::class,'editMovie']);
        Route::delete('/',[MovieController::class,'deleteMovie']);
        Route::get('/',[MovieController::class,'showMovieDetail']);
        //episode detail
        Route::prefix('/episode')->group(function(){
            Route::get('/{episode}',[MovieController::class,'showEpisodeDetail']);
        });
    });
});
