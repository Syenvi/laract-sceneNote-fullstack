<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\MovieSeeder;
use Database\Seeders\MovieEpisodeSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            MovieSeeder::class,
            MovieEpisodeSeeder::class,
        ]);


        \App\Models\Note::create([
            'movie_id'=>1,
            'episode'=>1,
            'note'=>'Ini note pertama dari movie 1 episode 1'
        ]);
        \App\Models\Note::create([
            'movie_id'=>1,
            'episode'=>1,
            'note'=>'Ini note kedua dari movie 1 episode 1'
        ]);
        \App\Models\Note::create([
            'movie_id'=>1,
            'episode'=>2,
            'note'=>'Ini note pertama dari movie 1 episode 2'
        ]);
        \App\Models\Image::create([
            'movie_id'=>1,
            'episode'=>1,
            'image'=>'https://i.pinimg.com/236x/50/70/f5/5070f5efdcbb8afa272e197fe74d4cc5.jpg'
        ]);
    
    }
}
