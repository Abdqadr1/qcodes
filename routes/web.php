<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsletterController;
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

Route::post('/newsletter/signup', [NewsletterController::class, 'newsletterSignup'])->name('newsletter-signup');
Route::get('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
Route::get('/newsletter/unsubscribe', [NewsletterController::class, 'unsubscribe']);

Route::view('/newsletter/confirm', 'newsletter.confirm', ['title' => 'Confirm your email'])->name('newsletter-confirm');
Route::view('/newsletter/sub', 'newsletter.subscribe')->name('newsletter-subscribe');
Route::view('/newsletter/unsub', 'newsletter.unsubscribe')->name('newsletter-unsubscribe');
