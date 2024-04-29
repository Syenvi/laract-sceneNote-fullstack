<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Movie::create([
            'title'=>'Soul Land',
            'excerpt'=>'soul-land',
            'image'=>'https://i.pinimg.com/236x/b5/11/b1/b511b166881179e968ec848a2e78f4c4.jpg'
        ]);

        \App\Models\Movie::create([
            'title'=>'Battle Through the Heavens',
            'excerpt'=>'battle-through-the-heavens',
            'image'=>'https://i.pinimg.com/236x/a3/c2/f1/a3c2f13061a16f7cd7e252094e7f18af.jpg'
        ]);
    }
}
