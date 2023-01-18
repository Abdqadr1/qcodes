<?php

namespace App\Http\Controllers;

use App\Interfaces\CategoryRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


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
        return $this->categoryRepo->createCategory([
            'name' => $request->input('name'),
            'meta_title' => $request->input('meta_title'),
            'content' => $request->input('content'),
            'parent_id' => $request->input('parent'),
            'slug' => Str::random(50),
        ]);
    }

    public function editCategory(Request $request)
    {
        $id = $request->route('id');
        return $this->categoryRepo->updateCategory($id, [
            'name' => $request->input('name'),
            'meta_title' => $request->input('meta_title'),
            'content' => $request->input('content'),
            'parent_id' => $request->input('parent'),
            'slug' => Str::random(50)
        ]);
    }

    public function deleteCategory(Request $request)
    {
        $id = $request->route("id");
        return $this->categoryRepo->deleteCategory($id);
    }
}
