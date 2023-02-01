<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $table = 'admin_notifications';

    protected $fillable = [
        'to', 'content', 'title', 'type', 'read'
    ];

    protected $casts = [
        'read' => 'boolean',
    ];
}
