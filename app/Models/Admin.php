<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $table = "admins";

    protected $casts = [
        'enabled' => 'boolean'
    ];

    protected $fillable = [
        "first_name", "last_name",
        "mobile", "email_verified_at",
        "bio", "email",
        "password", "last_login_at", "enabled"
    ];


    public function roles()
    {
        return $this->belongsToMany(Role::class, 'admin_roles', 'admin_id', 'role_id');
    }

    public function articles()
    {
        return $this->hasMany(Article::class, 'author_id');
    }
}
