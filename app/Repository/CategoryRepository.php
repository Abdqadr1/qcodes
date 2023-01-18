<?php

namespace App\Repository;

use App\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryRepository implements CategoryRepositoryInterface
{

    public function getAllCategories(Request $request)
    {
        $keyword = $request->input('keyword');
        if ($keyword) {
            return Category::select(['id', 'name'])
                ->where('name', 'like', '%' . $keyword . '%')
                ->get();
        }
        return Category::select(['id', 'name'])->get();
    }

    public function getAllCategoriesPaginate(Request $request)
    {
        return Category::orderBy('created_at', 'DESC')
            ->with(['parent:id,name'])
            ->paginate(8);
    }

    public function createCategory(array $details)
    {
        return Category::create($details);
    }

    public function updateCategory($id, array $details)
    {
        Category::whereId($id)->update($details);
        return Category::with(['parent:id,name'])->find($id);
    }


    public function deleteCategory($id)
    {
        return Category::destroy($id);
    }
}
