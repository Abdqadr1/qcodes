<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

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

    public function hasRole(string $roleName)
    {
        $roles = $this->roles()->get();
        foreach ($roles as $role) {
            if (strtolower($role->name) === strtolower($roleName)) return true;
        }
        return false;
    }

    public function hasRoles($roleNames = [])
    {
        $roles = $this->roles()->get();
        $roleNames = is_array($roleNames) ? $roleNames : func_get_args();

        $filtered = array_filter($roleNames, function ($name) use ($roles) {
            foreach ($roles as $role) {
                if (strtolower($role->name) === strtolower($name)) return true;
            }
            return false;
        });
    }

    public function hasAnyRole($roleNames = [])
    {
        $roles = $this->roles()->get();
        $roleNames = is_array($roleNames) ? $roleNames : func_get_args();

        foreach ($roleNames as $name) {
            foreach ($roles as $role) {
                if (strtolower($role->name) === strtolower($name)) return true;
            }
        }
        return false;
    }
}
