<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasFactory;

    protected $table = "admins";

    protected $casts = [
        'enabled' => 'boolean'
    ];

    protected $with = ['roles'];

    protected $fillable = [
        "mobile", "email_verified_at",
        "bio", "email", "password",
        "last_login_at", "enabled", 'first_name',
        'last_name', 'street_address', 'state',
        'country', 'password',
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
