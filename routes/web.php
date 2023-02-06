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

//search

Route::get('/search', [HomeController::class, 'search'])->name('search');
Route::get('/categories', [HomeController::class, 'categoriesSearch'])->name('cat-search');
Route::get('/tags', [HomeController::class, 'tagsSearch'])->name('tag-search');

Route::get('/categories/{slug}', [HomeController::class, 'categoriesSearch'])->name('cat-search');


// admin, writer portal react app

Route::get('/admin', [HomeController::class, 'admin'])->name('admin');
Route::get('/admin/{path?}', [HomeController::class, 'admin'])->where('path', '.*');

// article view and preview

Route::get('/article/{slug}/preview', [ArticleController::class, 'previewArticle']);

Route::get('/article/{slug}', [ArticleController::class, 'viewArticle'])->name('viewArticle');

// newsletter

Route::post('/newsletter/signup', [NewsletterController::class, 'newsletterSignup'])->name('newsletter-signup');
Route::get('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
Route::get('/newsletter/unsubscribe', [NewsletterController::class, 'unsubscribe']);

Route::view('/newsletter/confirm', 'newsletter.confirm', ['title' => 'Confirm your email'])->name('newsletter-confirm');
Route::view('/newsletter/sub', 'newsletter.subscribe')->name('newsletter-subscribe');
Route::view('/newsletter/unsub', 'newsletter.unsubscribe')->name('newsletter-unsubscribe');

// Route::view('/mail', 'mail.newsletter.confirm', ['first_name' => 'QD', 'link' => 'hgiagidhg.com']);

//static
function getTitle($name)
{
    return $name . ' ' . env('APP_NAME') . ' | ' . env('APP_NAME');
}
Route::view('/about', 'home.about', ['title' =>  getTitle('About')]);
Route::view('/privacy', 'home.privacy', ['title' => getTitle('Privacy')]);
Route::view('/terms', 'home.terms', ['title' => getTitle('Terms')]);
Route::view('/contact', 'home.contact', ['title' => getTitle('Contact')]);
