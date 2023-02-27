<?php

namespace App\Repository;

use App\Interfaces\ArticleRepositoryInterface;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleRepository implements ArticleRepositoryInterface
{
    private array $status;

    public function __construct()
    {
        $this->status = config('enum.article_status');
    }


    public function getArticleById($id)
    {
        return Article::orderBy('updated_at', 'DESC')
            ->with(['tags:id,name', 'categories:id,name', 'parent:id,title'])
            ->find($id);
    }

    public function getArticleBySlug($slug)
    {
        return Article::with(['tags:id,name', 'categories:id,name', 'parent:id,title'])
            ->where('slug', $slug)->first();
    }

    public function getMyArticlesPaginate(Request $request)
    {
        $request->validate([
            'filter' => 'nullable|regex:/^[a-z0-9 ]*$/i|max:3',
            'keyword' => 'nullable'
        ]);

        $keyword = $request->input('keyword');
        $filter = $request->input('filter');
        $id = $request->user('admin')->id;

        $articles = Article::orderBy('updated_at', 'DESC')
            ->where('author_id', $id);

        if ($filter && $filter !== 'all') {
            $articles->where('status', $this->status[$filter - 1]);
        }

        if ($keyword) {
            $articles->where(function ($query) use ($keyword) {
                $query->where('title', 'like', '%' . $keyword . '%');
                $query->orWhere('summary', 'like', '%' . $keyword . '%');
                $query->orWhere('content', 'like', '%' . $keyword . '%');
                $query->orWhere('meta_title', 'like', '%' . $keyword . '%');
            });
        }
        return $articles->select(['id', 'title', 'status', 'summary', 'author_id', 'meta_title', 'slug', 'visit'])
            ->paginate(5);
    }

    public function getAllArticlesPaginate(Request $request)
    {
        $request->validate([
            'filter' => 'nullable|integer|max:3',
            'keyword' => 'nullable'
        ]);

        $keyword = $request->input('keyword');
        $filter = $request->input('filter');

        $articles = Article::orderBy('updated_at', 'DESC');

        if ($filter && $filter !== 'All') {
            $articles->where('status', $this->status[$filter - 1]);
        }

        if ($keyword) {
            $articles->where(function ($query) use ($keyword) {
                $query->where('title', 'like', '%' . $keyword . '%');
                $query->orWhere('summary', 'like', '%' . $keyword . '%');
                $query->orWhere('content', 'like', '%' . $keyword . '%');
                $query->orWhere('meta_title', 'like', '%' . $keyword . '%');
            });
        }
        return $articles->select(['id', 'title', 'status', 'summary', 'author_id', 'meta_title', 'slug', 'visit'])
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
