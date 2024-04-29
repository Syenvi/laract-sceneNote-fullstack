<?php

namespace App\Models;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Note extends Model
{
    use HasFactory;
    protected $guarded = [
        'id'
    ];
    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }
}
