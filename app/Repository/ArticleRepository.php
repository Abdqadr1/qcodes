<?php

namespace App\Repository;

use App\Interfaces\ArticleRepositoryInterface;
use App\Models\Article;

class ArticleRepository implements ArticleRepositoryInterface
{
    public function getMyArticles()
    {
        return Article::select(['id', 'title', 'is_published', 'summary', 'author_id', 'meta_title', 'slug', 'visit'])
            ->paginate(5);
    }
    public function getAllArticles()
    {
        return Article::all();
    }
    public function createArticle(array $details)
    {
        return Article::create($details)->id;
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
