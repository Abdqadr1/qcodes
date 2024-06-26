<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/admin/signup', [AdminAuthController::class, 'register']);
Route::post('/admin/login', [AdminAuthController::class, 'login']);
Route::post('/admin/forgotpassword', [AdminAuthController::class, 'forgotPassword']);
Route::post('/admin/changepassword', [AdminAuthController::class, 'changePassword']);
Route::post('/admin/confirm', [AdminAuthController::class, 'confirmEmail']);


Route::middleware(['auth:sanctum', 'throttle:api'])->group(function () {

    Route::post('/article/upload/image', [ArticleController::class, 'uploadImage']);
    Route::post('/article/delete/image', [ArticleController::class, 'deleteUploadedImage']);

    Route::post('/admin/logout', [AdminAuthController::class, 'logout']);

    Route::post('/admin/update', [AdminAuthController::class, 'update']);
    Route::get('/admin/all', [AdminController::class, 'getAllAdminsPaginate']);
    Route::get('/my_article/all', [ArticleController::class, 'getMyArticlesPaginate']);
    Route::get('/article/all', [ArticleController::class, 'getAllArticlesPaginate']);
    Route::get('/c/article/all', [ArticleController::class, 'getMyArticles']);
    Route::get('/category/all', [CategoryController::class, 'getAllCategoriesPaginate']);
    Route::get('/admin/notification/all', [NotificationController::class, 'getAllNotificationsPaginate']);
    Route::get('/c/category/all', [CategoryController::class, 'getAllCategories']);
    Route::get('/tag/all', [TagController::class, 'getAllTagsPaginate']);
    Route::get('/c/tag/all', [TagController::class, 'getAllTags']);
    Route::get('c/admin/all', [AdminController::class, 'getAllAdmin']);


    Route::get('/admin/roles', [AdminController::class, 'getAllRoles']);


    Route::post('/admin/edit/{id}', [AdminController::class, 'editAdmin']);
    Route::post('/category/edit/{id}', [CategoryController::class, 'editCategory']);
    Route::post('/tag/edit/{id}', [TagController::class, 'editTag']);
    Route::post('/article/edit/{id}', [ArticleController::class, 'getArticleById']);
    Route::post('/article/preview/{slug}', [ArticleController::class, 'getArticleBySlug']);
    Route::post('/article/unpublish/{id}', [ArticleController::class, 'unpublishArticle']);
    Route::post('/admin/notification/read/{id}', [NotificationController::class, 'readNotification']);


    Route::post('/admin/create', [AdminController::class, 'createAdmin']);
    Route::post('/article/create', [ArticleController::class, 'createArticle']);
    Route::post('/article/publish', [ArticleController::class, 'publishArticle']);
    Route::post('/category/create', [CategoryController::class, 'createCategory']);
    Route::post('/tag/create', [TagController::class, 'createTag']);
    Route::post('/admin/notification/create', [NotificationController::class, 'createNotification']);


    Route::delete('/admin/delete/{id}', [AdminController::class, 'deleteAdmin']);
    Route::delete('/article/delete/{id}', [ArticleController::class, 'deleteArticle']);
    Route::delete('/category/delete/{id}', [CategoryController::class, 'deleteCategory']);
    Route::delete('/tag/delete/{id}', [TagController::class, 'deleteTag']);
    Route::delete('/admin/notification/delete/{id}', [NotificationController::class, 'deleteNotification']);

    Route::get('/admin/my-notification', [NotificationController::class, 'getUserNotifications']);
    Route::get('/admin/notification/type', [NotificationController::class, 'getNotificationsType']);

    Route::get('/admin/messages', [AdminController::class, 'getAllMessages']);
    Route::delete('/admin/message/delete/{id}', [AdminController::class, 'deleteMessages']);

    Route::get('/admin/mail_list', [NewsletterController::class, "getMailList"]);
    Route::delete('/admin/mail_list/{id}', [NewsletterController::class, 'deleteMailAddress']);

    Route::get('/admin', [AdminAuthController::class, 'getDashboard'])->withoutMiddleware(['throttle:api']);
});
