<?php

namespace App\Repository;

use App\Interfaces\ArticleRepositoryInterface;
use App\Models\Article;

class AdminRepository implements ArticleRepositoryInterface
{
    public function getAllArticles()
    {
        return Article::all();
    }
    public function createArticle(array $details)
    {
        return Article::create($details);
    }
    public function updateArticle($id, array $details)
    {
        return Article::whereId($id)->update($details);
    }
    public function getArticleById($id)
    {
        return Article::findOrFail($id);
    }
    public function deleteArticle($id)
    {
        return Article::destroy($id);
    }
}
