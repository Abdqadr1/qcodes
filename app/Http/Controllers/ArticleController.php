<?php

namespace App\Http\Controllers;

use App\Http\Service\URLSubmission;
use App\Interfaces\ArticleRepositoryInterface;
use App\Models\Article;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ArticleController extends Controller
{
    public ArticleRepositoryInterface $articleRepo;

    private array $status;

    public function __construct(ArticleRepositoryInterface $articleRepo)
    {
        $this->articleRepo = $articleRepo;
        $this->status = config('enum.article_status');
    }

    public function viewArticle(Request $request)
    {
        $slug = $request->route('slug');
        $article = Article::with([
            'author:id,first_name,last_name',
            'tags',
            'categories'
        ])
            ->where(function ($query) use ($slug) {
                $query->where('slug', $slug);
                $query->where('status', $this->status[1]);
            })->first();

        if (!$article) {
            abort(404, "Could not found article or it's not published yet");
        }

        $children = $article?->children()
            ->where('status', $this->status[1])
            ->orderBy('visit', 'desc')
            ->limit(3)->get();

        $article->loadMissing(['categories' => function ($query) {
            $query->select(['name']);
        }]);

        $catNames = $article->categories->map(function ($cat) {
            return $cat->name;
        });


        $sameArticles = Article::where('status', $this->status[1])
            ->where('id', '!=', $article->id)
            ->whereRelation('categories', function ($query) use ($catNames) {
                $query->where('name', $catNames);
            })
            ->orderBy('visit', 'desc')
            ->limit(7)->get();

        return view(
            'article.view',
            [
                'title' => $article->title,
                'article' => $article,
                'children' => $children,
                'categories' => $sameArticles
            ]
        );
    }

    public function lastVisited(Request $request)
    {
        $id = $request->route('id');
        return $this->articleRepo->visitArticle($id, ['last_visited' => now('Africa/Lagos')]);
    }

    public function previewArticle(Request $request)
    {
        $slug = $request->route('slug');
        $article = Article::with(['author:id,first_name,last_name', 'tags', 'categories'])
            ->where(function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->first();

        if (!$article) {
            abort(404, "Could not found article or it's not published yet");
        }

        return view('article.preview', ['title' => $article->title, 'article' => $article]);
    }


    public function getArticleById(Request $request)
    {
        return $this->articleRepo->getArticleById($request->route('id'));
    }

    public function getArticleBySlug(Request $request)
    {
        return $this->articleRepo->getArticleBySlug($request->route('slug'));
    }

    public function getMyArticlesPaginate(Request $request)
    {
        return $this->articleRepo->getMyArticlesPaginate($request);
    }

    public function getAllArticlesPaginate(Request $request)
    {
        $this->authorize('viewAll', Article::class);
        return $this->articleRepo->getAllArticlesPaginate($request);
    }

    public function getMyArticles(Request $request)
    {
        return $this->articleRepo->getMyArticles($request);
    }

    public function deleteArticle(Request $request)
    {
        $id = $request->route('id');
        $this->authorize('delete', Article::findOrFail($id));

        return $this->articleRepo->deleteArticle($id);
    }

    public function validateArticle(Request $request, $publish = false)
    {
        $id = $request->input('id');

        if ($publish) {
            $request->validate([
                'title' => ['required', 'min:20', 'max:100', Rule::unique('articles', 'title')->ignore($id)],
                'meta_title' => 'required|min:50|max:160',
                'meta_keywords' => 'required|min:20|max:160',
                'content' => 'required|max:20000',
                'parent_id' => [
                    'nullable', 'numeric', 'exists:articles,id', Rule::notIn([$id])
                ],

                'summary' => 'required|min:60|max:160',

                'tags' => 'required|array',
                'tags.*' => 'required|numeric|exists:tags,id',
                'categories' => 'required|array',
                'categories.*' => 'required|numeric|exists:categories,id',
            ]);
        } else {
            $request->validate([
                'title' => ['required', 'min:20', 'max:100', Rule::unique('articles', 'title')->ignore($id)],
                'meta_title' => 'nullable|min:50|max:160',
                'meta_keywords' => 'nullable|min:20|max:160',
                'content' => 'required|max:20000',
                'parent_id' => [
                    'nullable', 'numeric', 'exists:articles,id'
                ],
                'summary' => 'nullable|min:60|max:160',

                'tags' => 'nullable|array',
                'tags.*' => 'nullable|numeric|exists:tags,id',
                'categories' => 'nullable|array',
                'categories.*' => 'nullable|numeric|exists:categories,id',
            ]);
        }
        return [
            'title' => $request->input('title') ?? '',
            'meta_title' => $request->input('meta_title') ?? '',
            'meta_keywords' => $request->input('meta_keywords') ?? '',
            'content' => $request->input('content') ?? '',
            'parent_id' => $request->input('parent_id') ?? null,
            'summary' => $request->input('summary') ?? '',
        ];
    }

    public function saveArticle(Request $request, $publish = false)
    {
        return DB::transaction(function () use ($request, $publish) {
            $id = $request->input('id');

            $validated = $this->validateArticle($request, $publish);

            $tags = $request->tags ?? null;
            $categories = $request->categories ?? null;

            $url = Str::slug($validated['title'] ?? '');

            $validated['slug'] = $url;
            $validated['author_id'] = $request->user('admin')->id;


            if ($publish) {
                $validated['status'] = $request->user('admin')->hasAnyRole('editor', 'admin')
                    ? $this->status[1]
                    : $this->status[0];
            }

            if ($id) {
                unset($validated['author_id']);
                $this->articleRepo->updateArticle($id, $validated);
                URLSubmission::bingSubmit($url);
            } else {
                $id = $this->articleRepo->createArticle($validated);
            }

            if ($tags) $this->articleRepo->syncTags($id, $tags);
            if ($categories) $this->articleRepo->syncCategories($id, $categories);

            return $id;
        });
    }

    public function createArticle(Request $request)
    {
        if ($request->has('id')) {
            $this->authorize('update', Article::findOrFail($request->input('id')));
        } else {
            $this->authorize('create', Article::class);
        }

        return $this->saveArticle($request);
    }

    public function publishArticle(Request $request)
    {
        if ($request->has('id')) {
            $this->authorize('update', Article::findOrFail($request->input('id')));
        } else {
            $this->authorize('create', Article::class);
        }
        return $this->saveArticle($request, true);
    }

    public function unpublishArticle(Request $request)
    {
        $id = $request->route('id');
        $this->authorize('update', Article::findOrFail($id));

        $array = [
            'status' => $this->status[2],
        ];

        return $this->articleRepo->updateArticle($id, $array);
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'upload' => 'required|file|max:2048'
        ]);

        $file = $request->file('upload');
        $name = $request->user('admin')->id . '_' . Str::random(30) . '.' . $file->extension();
        $path = $file->storeAs('articles', $name, 's3');
        return new JsonResponse(['url' => '/photos/' . $path]);
    }

    public function deleteUploadedImage(Request $request)
    {
        $request->validate([
            'path' => 'required'
        ]);

        $path = $request->input('path');
        return Storage::disk('s3')->delete($path);
    }

    public function getArticleImages(Request $request)
    {
        $folder = $request->route('folder');
        $name = $request->route('name');

        $url = $folder . '/' . $name;
        return Storage::disk('s3')->download($url);
    }

    public function uploadBanner(Request $request)
    {
        $request->validate([
            'upload' => 'required|file|max:2048'
        ]);

        $file = $request->file('upload');
        $name = $request->user('admin')->id . '_' . Str::random(30) . '.' . $file->extension();
        $path = $file->storePubliclyAs('banners', $name);
        return new JsonResponse(['url' => '/' . $path]);
    }

    public function getArticleStatusType()
    {
        return config('enum.article_status');
    }
}
