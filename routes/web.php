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

Route::middleware(['throttle:web'])->group(function () {
    // generate sitemap
    Route::get('/sitemap', [HomeController::class, 'getSitemap'])->name('sitemap');

    Route::get('/', [HomeController::class, 'index'])->name('home');

    //contact 
    Route::post('/contact', [HomeController::class, 'postContact'])->name('post-contact');

    //search

    Route::get('/search', [HomeController::class, 'search'])->name('search');
    Route::get('/categories', [HomeController::class, 'categoriesSearch'])->name('cat-search');
    Route::get('/tags', [HomeController::class, 'tagsSearch'])->name('tag-search');

    Route::get('/categories/{slug}', [HomeController::class, 'getCategoryArticles'])->name('cat-page');
    Route::get('/tags/{slug}', [HomeController::class, 'getTagArticles'])->name('tag-page');


    // admin, writer portal react app

    Route::get('/admin', [HomeController::class, 'admin'])->name('admin');
    Route::get('/admin/{path?}', [HomeController::class, 'admin'])->where('path', '.*');

    // article view and preview

    Route::get('/article/{slug}/preview', [ArticleController::class, 'previewArticle']);

    Route::get('/article/{slug}', [ArticleController::class, 'viewArticle'])->name('viewArticle');

    // update article last visited
    Route::post('/article/{id}/visited', [ArticleController::class, 'lastVisited']);

    // newsletter

    Route::post('/newsletter/signup', [NewsletterController::class, 'newsletterSignup'])->name('newsletter-signup');
    Route::get('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
    Route::get('/newsletter/unsubscribe', [NewsletterController::class, 'unsubscribe']);

    Route::view('/newsletter/confirm', 'newsletter.confirm', ['title' => 'Confirm your email'])->name('newsletter-confirm');
    Route::view('/newsletter/sub', 'newsletter.subscribe')->name('newsletter-subscribe');
    Route::view('/newsletter/unsub', 'newsletter.unsubscribe')->name('newsletter-unsubscribe');

    // Route::view('/mail', 'mail.newsletter.confirm', ['first_name' => 'QD', 'link' => 'hgiagidhg.com']);

    Route::view('/about', 'home.about', ['nav_name' => '']);
    Route::view('/privacy', 'home.privacy', ['nav_name' => '']);
    Route::view('/terms', 'home.terms', ['nav_name' => '']);
    Route::view('/contact', 'home.contact', ['nav_name' => '']);

    //article images
    Route::get('/photos/{folder}/{name}', [ArticleController::class, 'getArticleImages']);
});
