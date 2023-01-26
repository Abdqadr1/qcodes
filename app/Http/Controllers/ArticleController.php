<?php

namespace App\Http\Controllers;

use App\Interfaces\ArticleRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ArticleController extends Controller
{
    public ArticleRepositoryInterface $articleRepo;

    public function __construct(ArticleRepositoryInterface $articleRepo)
    {
        $this->articleRepo = $articleRepo;
    }

    public function getArticleById(Request $request)
    {
        return $this->articleRepo->getArticleById($request->route('id'));
    }

    public function getMyArticlesPaginate(Request $request)
    {
        return $this->articleRepo->getMyArticlesPaginate($request);
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

    public function validateArticle(Request $request, $publish = false)
    {
        $id = $request->input('id');

        if ($publish) {
            return $request->validate([
                'title' => ['required', 'max:100', Rule::unique('articles', 'title')->ignore($id)],
                'meta_title' => 'required|max:160',
                'content' => 'required|max:10000',
                'parent_id' => [
                    'nullable', 'numeric', 'exists:articles,id', Rule::notIn([$id])
                ],

                'summary' => 'required|max:160',
                'banner' => 'nullable|max:200',

                'tags' => 'required|array',
                'tags.*' => 'required|numeric|exists:tags,id',
                'categories' => 'required|array',
                'categories.*' => 'required|numeric|exists:categories,id',
            ]);
        } else {
            return $request->validate([
                'title' => ['nullable', 'max:100', Rule::unique('articles', 'title')->ignore($id)],
                'meta_title' => 'nullable|max:160',
                'content' => 'required|max:10000',
                'parent_id' => [
                    'nullable', 'numeric', 'exists:articles,id'
                ],
                'summary' => 'nullable|max:160',
                'banner' => 'nullable|max:200',

                'tags' => 'nullable|array',
                'tags.*' => 'nullable|numeric|exists:tags,id',
                'categories' => 'nullable|array',
                'categories.*' => 'nullable|numeric|exists:categories,id',
            ]);
        }
    }

    public function saveArticle(Request $request, $publish = false)
    {
        return DB::transaction(function () use ($request, $publish) {
            $id = $request->input('id');

            $validated = $this->validateArticle($request, $publish);

            $tags = $validated['tags'] ?? null;
            $categories = $validated['categories'] ?? null;
            unset($validated['tags']);
            unset($validated['categories']);

            $validated['slug'] = Str::slug($validated['title'] ?? '');
            $validated['author_id'] = $request->user('admin')->id;


            if ($publish) $validated['is_published'] = true;

            if ($id) {
                unset($validated['author_id']);
                $this->articleRepo->updateArticle($id, $validated);
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
        return $this->saveArticle($request);
    }

    public function publishArticle(Request $request)
    {
        return $this->saveArticle($request, true);
    }

    public function unpublishArticle(Request $request)
    {
        $id = $request->route('id');

        $array = [
            'is_published' => false,
        ];

        return $this->articleRepo->updateArticle($id, $array);
    }
}
