<?php

namespace App\Repository;

use App\Interfaces\ArticleRepositoryInterface;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleRepository implements ArticleRepositoryInterface
{
    public function getArticleById($id)
    {
        return Article::orderBy('created_at', 'DESC')
            ->with(['tags:id,name', 'categories:id,name', 'parent:id,title'])
            ->find($id);
    }
    public function getMyArticlesPaginate(Request $request)
    {
        $keyword = $request->input('keyword');
        $id = $request->user('admin')->id;

        if ($keyword) {
            return Article::orderBy('created_at', 'DESC')
                ->where('author_id', $id)
                ->where(function ($query) use ($keyword) {
                    $query->where('title', 'like', '%' . $keyword . '%');
                    $query->orWhere('summary', 'like', '%' . $keyword . '%');
                    $query->orWhere('content', 'like', '%' . $keyword . '%');
                    $query->orWhere('meta_title', 'like', '%' . $keyword . '%');
                })
                ->select(['id', 'title', 'is_published', 'summary', 'author_id', 'meta_title', 'slug', 'visit', 'banner'])
                ->paginate(5);
        }
        return Article::orderBy('created_at', 'DESC')
            ->where('author_id', $id)
            ->select(['id', 'title', 'is_published', 'summary', 'author_id', 'meta_title', 'slug', 'visit', 'banner'])
            ->paginate(5);
    }

    public function getAllArticlesPaginate(Request $request)
    {
        $keyword = $request->input('keyword');

        if ($keyword) {
            return Article::orderBy('created_at', 'DESC')
                ->where(function ($query) use ($keyword) {
                    $query->where('title', 'like', '%' . $keyword . '%');
                    $query->orWhere('summary', 'like', '%' . $keyword . '%');
                    $query->orWhere('content', 'like', '%' . $keyword . '%');
                    $query->orWhere('meta_title', 'like', '%' . $keyword . '%');
                })
                ->select(['id', 'title', 'is_published', 'summary', 'author_id', 'meta_title', 'slug', 'visit', 'banner'])
                ->paginate(5);
        }
        return Article::orderBy('created_at', 'DESC')
            ->select(['id', 'title', 'is_published', 'summary', 'author_id', 'meta_title', 'slug', 'visit', 'banner'])
            ->paginate(5);
    }

    public function getMyArticles(Request $request)
    {
        $keyword = $request->input('keyword');
        if ($keyword) {
            return Article::select(['id', 'title'])
                ->where('title', 'like', '%' . $keyword . '%')
                ->get();
        }
        return Article::select(['id', 'title'])->get();
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
    public function deleteArticle($id)
    {
        return DB::transaction(function () use ($id) {
            $article = Article::findOrFail($id);
            $article->categories()->detach();
            $article->tags()->detach();
            return $article->delete();
        });
    }

    public function syncCategories($id, array $categories)
    {
        Article::find($id)->categories()->syncWithPivotValues($categories, ['created_at' => now()]);
    }

    public function syncTags($id, array $tags)
    {
        Article::find($id)->tags()->syncWithPivotValues($tags, ['created_at' => now()]);
    }
}
