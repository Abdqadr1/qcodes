<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use App\Models\Article;
use App\Models\Category;
use App\Models\Notification;
use App\Models\Role;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Notification::factory(15)->create();

        // \App\Models\User::factory(10)->create();
        // Admin::factory(15)->create();

        // Article::factory(15)->create();

        // Category::factory(15)->create();

        // Tag::factory(15)->create();


        $roles = config('enum.roles');
        foreach ($roles as $role) {
            Role::create($role);
        }

        // Admin::find(1)->roles()->attach(1, ['created_at' => now(), 'updated_at' => now()]);
    }
}
