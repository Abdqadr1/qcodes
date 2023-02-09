<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $articles = Article::select(['id', 'slug', 'title', 'summary'])
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

        return view('home.search', ['results' => $results, 'keyword' => $keyword]);
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

        return view('home.categories', ['results' => $results, 'keyword' => $keyword]);
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

        return view('home.tags', ['results' => $results, 'keyword' => $keyword]);
    }

    public function admin(Request $request)
    {
        return view('admin.home', ['title' => 'Admin']);
    }

    public function postContact(Request $request)
    {
        $request->validate([
            'name' => 'required|min:5|max:60',
            'email' => 'required|email|max:255',
            'about' => 'required|max:60',
            'message' => 'required|min:50|max:1000',
        ]);

        DB::table('contact')->insert([
            'name' => $request->name,
            'email' => $request->email,
            'about' => $request->about,
            'message' => $request->message,
            'created_at' => now(),
        ]);

        return view('home.contact', ['title' => 'Contact', 'msg' => 'Your message has been sent.']);
    }

    public function getCategoryArticles(Request $request)
    {
        $slug = $request->route('slug');
        $category = Category::where('slug', $slug)->first();
        if (!$category) abort(404);

        $parents = array();
        $parent = $category->parent;
        while ($parent != null) {
            array_unshift($parents, $parent);
            $parent = $parent->parent;
        }

        $category->parent = null;

        $articles = $category->articles()
            ->where('is_published', 1)
            ->paginate(10)->withQueryString();

        return view('home.category', [
            'category' => $category, 'title' => $slug,
            'articles' => $articles, 'parents' => $parents
        ]);
    }

    public function getTagArticles(Request $request)
    {
        $slug = $request->route('slug');
        $tag = Tag::where('slug', $slug)->first();
        if (!$tag) abort(404);

        $articles = $tag->articles()
            ->where('is_published', 1)
            ->paginate(10)->withQueryString();

        return view('home.tag', ['tag' => $tag, 'title' => $slug, 'articles' => $articles]);
    }
}
