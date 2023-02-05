<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $articles = Article::select(['id', 'slug', 'title', 'summary', 'banner'])
            ->where(function ($query) {
                $query->where('is_published', 1);
            })->paginate(4);
        return view('home.index', ['articles' => $articles]);
    }

    public function search(Request $request)
    {
        $keyword = $request->keyword;
        $results = null;
        if ($keyword) {
            $results = Article::where(function ($q) use ($keyword) {
                $q->where('is_published', 1);
                $q->where(function ($query) use ($keyword) {
                    $query->where('title', 'like', '%' . $keyword . '%');
                    $query->orWhere('summary', 'like', '%' . $keyword . '%');
                });
            });
        } else {
            $results = Article::where(function ($q) use ($keyword) {
                $q->where('is_published', 1);
            });
        }

        $results = $results->paginate($perPage = 10, $columns = ['title', 'summary', 'slug'])
            ->withQueryString();

        return view('home.search', ['results' => $results, 'title' => $keyword]);
    }

    public function categoriesSearch(Request $request)
    {
        $keyword = $request->keyword;
        $results = null;
        if ($keyword) {
            $results = Category::without('parent', 'children', 'articles')
                ->where(function ($query) use ($keyword) {
                    $query->where('name', 'like', '%' . $keyword . '%');
                    $query->orWhere('content', 'like', '%' . $keyword . '%');
                    $query->orWhere('meta_title', 'like', '%' . $keyword . '%');
                });
        } else {
            $results = Category::without('parent', 'children', 'articles');
        }

        $results = $results->paginate($perPage = 10, $columns = ['name', 'content', 'slug'])
            ->withQueryString();

        return view('home.categories', ['results' => $results, 'title' => $keyword]);
    }

    public function tagsSearch(Request $request)
    {
        $keyword = $request->keyword;
        $results = null;
        if ($keyword) {
            $results = Tag::without('articles')
                ->where(function ($query) use ($keyword) {
                    $query->where('name', 'like', '%' . $keyword . '%');
                    $query->orWhere('content', 'like', '%' . $keyword . '%');
                    $query->orWhere('meta_title', 'like', '%' . $keyword . '%');
                });
        } else {
            $results = Tag::without('articles');
        }

        $results = $results->paginate($perPage = 10, $columns = ['name', 'content', 'slug'])
            ->withQueryString();

        return view('home.tags', ['results' => $results, 'title' => $keyword]);
    }

    public function admin(Request $request)
    {
        return view('admin.home', ['title' => 'Admin']);
    }
}
