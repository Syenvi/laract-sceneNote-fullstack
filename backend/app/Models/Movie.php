<?php

namespace App\Models;

use App\Models\MovieEpisode;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Movie extends Model
{
    use HasFactory;
    protected $guarded = [
        'id'
    ];
    
    public function episodes()
    {
        return $this->hasMany(MovieEpisode::class,'movie_id');
    }

    
}
