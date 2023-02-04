<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    use HasFactory;
    protected $table = 'newsletter';
    protected $casts = [
        'confirmed' => 'boolean',
    ];
    protected $fillable = [
        'name', 'email', 'confirmed', 'token'
    ];
}
