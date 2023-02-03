<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/admin', [HomeController::class, 'admin'])->name('admin');
Route::get('/admin/{path?}', [HomeController::class, 'admin'])->where('path', '.*');

Route::get('/article/{slug}/preview', [ArticleController::class, 'previewArticle']);

Route::get('/article/{slug}', [ArticleController::class, 'viewArticle'])->name('viewArticle');

Route::post('/newsletter/signup', [HomeController::class, 'newsletterSignup'])->name('newsletter-signup');
