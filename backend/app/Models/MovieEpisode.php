<?php

namespace App\Models;

use App\Models\MovieEpisodeDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MovieEpisode extends Model
{
    use HasFactory;
    protected $guarded = [
        'id'
    ];
    public function movie()
    {
        return $this->belongsTo(Movie::class,'movie_id');
    }
}
