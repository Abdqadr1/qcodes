<?php

namespace App\Http\Controllers;

use App\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
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

        if ($validated['parent_id'] && $this->checkForCycle($id, $validated['parent_id'])) {
            return new JsonResponse(['message' => 'Category parent causes cycle.'], 400);
        }

        $validated['slug'] = Str::slug($validated['name'], '_');

        return $this->categoryRepo->updateCategory($id, $validated);
    }

    public function checkForCycle($id, $parent_id)
    {
        $parent = Category::with('parent')->find($parent_id);
        while ($parent && $parent->parent) {
            if ($parent->parent->id == $id) return true;
            $parent = Category::with('parent')->find($parent->parent->id);
        }
        return false;
    }

    public function deleteCategory(Request $request)
    {
        $id = $request->route("id");
        $category = Category::withCount(['children', 'articles'])->findOrFail($id);

        $this->authorize('delete', $category);


        return $this->categoryRepo->deleteCategory($id);
    }
}
