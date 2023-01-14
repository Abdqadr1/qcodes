<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/admin/all', [AdminController::class, 'getAllAdmin']);
Route::get('/article/all', [ArticleController::class, 'getMyArticles']);


Route::get('/admin/roles', [AdminController::class, 'getAllRoles']);


Route::post('/admin/edit/{id}', [AdminController::class, 'editAdmin']);


Route::post('/admin/create', [AdminController::class, 'createAdmin']);
Route::post('/article/create', [ArticleController::class, 'createArticle']);

Route::delete('/admin/delete/{id}', [AdminController::class, 'deleteAdmin']);
Route::delete('/article/delete/{id}', [ArticleController::class, 'deleteArticle']);
