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

    public function getAllCategoriesPaginate()
    {
        return $this->categoryRepo->getAllCategoriesPaginate();
    }

    public function getAllCategories()
    {
        return $this->categoryRepo->getAllCategories();
    }

    public function createCategory(Request $request)
    {
        return $this->categoryRepo->createCategory([
            'name' => $request->input('name'),
            'meta_title' => $request->input('meta_title'),
            'content' => $request->input('content'),
            'slug' => Str::random(50)
        ]);
    }

    public function editCategory(Request $request)
    {
        $id = $request->route('id');
        return $this->categoryRepo->updateCategory($id, [
            'name' => $request->input('name'),
            'meta_title' => $request->input('meta_title'),
            'content' => $request->input('content'),
            'slug' => Str::random(50)
        ]);
    }

    public function deleteCategory(Request $request)
    {
        $id = $request->route("id");
        return $this->categoryRepo->deleteCategory($id);
    }
}
