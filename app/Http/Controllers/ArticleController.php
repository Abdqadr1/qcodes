<?php

namespace App\Http\Controllers;

use App\Interfaces\ArticleRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    public ArticleRepositoryInterface $articleRepo;

    public function __construct(ArticleRepositoryInterface $articleRepo)
    {
        $this->articleRepo = $articleRepo;
    }

    public function getMyArticlesPaginate(Request $request)
    {
        return $this->articleRepo->getMyArticlesPaginate();
    }

    public function getMyArticles(Request $request)
    {
        return $this->articleRepo->getMyArticles($request);
    }

    public function deleteArticle(Request $request)
    {
        $id = $request->route('id');
        return $this->articleRepo->deleteArticle($id);
    }

    public function createArticle(Request $request)
    {
        return DB::transaction(function () use ($request) {
            $id = $request->input('id');
            $tags = $request->tags;
            $categories = $request->categories;

            $array = [
                'content' => $request->input('content'),
                'title' => $request->input('title') ?? "",
                'meta_title' => $request->input('meta_title') ?? "",
                'meta_title' => $request->input('meta_title') ?? "",
                'summary' => $request->input('summary') ?? "",
                'slug' => Str::random(50),
                'parent_id' => rand(1, 10) ?? $request->input('parent_id') ?? "",
                'author_id' => rand(1, 15),
            ];

            if ($id) {
                $this->articleRepo->updateArticle($id, $array);
            } else {
                $id = $this->articleRepo->createArticle($array);
            }

            if ($tags) $this->articleRepo->syncTags($id, $tags);
            if ($categories) $this->articleRepo->syncCategories($id, $categories);

            return $id;
        });
    }
}
