<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface ArticleRepositoryInterface
{
    public function getAllArticles();
    public function getMyArticles(Request $request);
    public function getMyArticlesPaginate(Request $request);
    public function getAllArticlesPaginate(Request $request);

    public function createArticle(array $details);
    public function updateArticle($id, array $details);
    public function syncTags($id, array $details);
    public function syncCategories($id, array $details);
    public function getArticleById($id);
    public function deleteArticle($id);
}
