<?php

namespace App\Interfaces;


interface ArticleRepositoryInterface
{
    public function getAllArticles();
    public function createArticle(array $details);
    public function updateArticle($id, array $details);
    public function getArticleById($id);
    public function deleteArticle($id);
}
