<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TagController;
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
Route::get('/article/all', [ArticleController::class, 'getMyArticlesPaginate']);
Route::get('/c/article/all', [ArticleController::class, 'getMyArticles']);
Route::get('/category/all', [CategoryController::class, 'getAllCategoriesPaginate']);
Route::get('/c/category/all', [CategoryController::class, 'getAllCategories']);
Route::get('/tag/all', [TagController::class, 'getAllTagsPaginate']);
Route::get('/c/tag/all', [TagController::class, 'getAllTags']);


Route::get('/admin/roles', [AdminController::class, 'getAllRoles']);


Route::post('/admin/edit/{id}', [AdminController::class, 'editAdmin']);
Route::post('/category/edit/{id}', [CategoryController::class, 'editCategory']);
Route::post('/tag/edit/{id}', [TagController::class, 'editTag']);
Route::post('/article/edit/{id}', [ArticleController::class, 'getArticleById']);


Route::post('/admin/create', [AdminController::class, 'createAdmin']);
Route::post('/article/create', [ArticleController::class, 'createArticle']);
Route::post('/article/publish', [ArticleController::class, 'publishArticle']);
Route::post('/category/create', [CategoryController::class, 'createCategory']);
Route::post('/tag/create', [TagController::class, 'createTag']);


Route::delete('/admin/delete/{id}', [AdminController::class, 'deleteAdmin']);
Route::delete('/article/delete/{id}', [ArticleController::class, 'deleteArticle']);
Route::delete('/category/delete/{id}', [CategoryController::class, 'deleteCategory']);
Route::delete('/tag/delete/{id}', [TagController::class, 'deleteTag']);
