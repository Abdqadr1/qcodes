<?php

namespace App\Http\Controllers;

use App\Models\Article;
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
        return view('home', ['articles' => $articles]);
    }

    public function admin(Request $request)
    {
        return view('admin.home', ['title' => 'Admin']);
    }
}
