<?php

namespace App\Http\Controllers;

use App\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    public CategoryRepositoryInterface $categoryRepo;

    public function __construct(CategoryRepositoryInterface $repo)
    {
        $this->categoryRepo = $repo;
    }

    public function getAllCategoriesPaginate(Request $request)
    {
        return $this->categoryRepo->getAllCategoriesPaginate($request);
    }

    public function getAllCategories(Request $request)
    {
        return $this->categoryRepo->getAllCategories($request);
    }

    public function createCategory(Request $request)
    {
        $this->authorize('create', Category::class);

        $validated = $request->validate([
            'name' => 'required|max:100|unique:categories',
            'meta_title' => 'required|max:160',
            'content' => 'required|max:500',
            'parent_id' => ['nullable', 'numeric', 'exists:categories,id'],
        ]);

        $validated['slug'] = Str::slug($validated['name'], '_');

        return $this->categoryRepo->createCategory($validated);
    }

    public function editCategory(Request $request)
    {
        $this->authorize('update', Category::class);

        $id = $request->route('id');

        $validated = $request->validate([
            'name' => ['required', 'max:100', Rule::unique('categories', 'name')->ignore($id)],
            'meta_title' => 'required|max:160',
            'content' => 'required|max:500',
            'parent_id' => [
                'nullable', 'numeric', Rule::notIn([$id])
            ],
        ]);

        $validated['slug'] = Str::slug($validated['name'], '_');

        return $this->categoryRepo->updateCategory($id, $validated);
    }

    public function deleteCategory(Request $request)
    {
        $id = $request->route("id");

        $this->authorize('delete', Category::findOrFail($id));


        return $this->categoryRepo->deleteCategory($id);
    }
}
