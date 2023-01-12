<?php

namespace App\Providers;

use App\Interfaces\AdminRepositoryInterface;
use App\Repository\AdminRepository;
use Illuminate\Support\ServiceProvider;

class InjectionProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(AdminRepositoryInterface::class, AdminRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
    }
}
