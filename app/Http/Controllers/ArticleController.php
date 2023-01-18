<?php

namespace App\Http\Controllers;

use App\Interfaces\ArticleRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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
        $id = $request->input('id');
        $array = [
            'title' => $request->input('title'),
            'meta_title' => $request->input('meta_title'),
            'meta_title' => $request->input('meta_title'),
            'content' => $request->input('content'),
            'summary' => $request->input('summary'),
            'slug' => Str::random(50),
            'parent_id' => $request->input('parent_id'),
        ];
        if ($id) {
            return $this->articleRepo->updateArticle($id, $array);
        }
        return $this->articleRepo->createArticle($array);
    }
}
