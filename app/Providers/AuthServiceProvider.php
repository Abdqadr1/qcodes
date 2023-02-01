<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Admin;
use App\Models\Article;
use App\Models\Category;
use App\Models\Notification;
use App\Models\Tag;
use App\Policies\AdminPolicy;
use App\Policies\ArticlePolicy;
use App\Policies\CategoryPolicy;
use App\Policies\NotificationPolicy;
use App\Policies\TagPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Admin::class => AdminPolicy::class,
        Category::class => CategoryPolicy::class,
        Tag::class => TagPolicy::class,
        Article::class => ArticlePolicy::class,
        Notification::class => NotificationPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
