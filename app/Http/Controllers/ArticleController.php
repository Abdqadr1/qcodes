<?php

namespace App\Http\Controllers;

use App\Interfaces\ArticleRepositoryInterface;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public ArticleRepositoryInterface $articleRepo;

    public function __construct(ArticleRepositoryInterface $articleRepo)
    {
        $this->articleRepo = $articleRepo;
    }

    public function getMyArticles(Request $request)
    {
        return $this->articleRepo->getMyArticles();
    }

    public function deleteArticle(Request $request)
    {
        $id = $request->route('id');
        return $this->articleRepo->deleteArticle($id);
    }

    public function createArticle(Request $request)
    {
        return $this->articleRepo->createArticle([]);
    }
}
