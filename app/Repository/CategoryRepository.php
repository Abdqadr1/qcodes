<?php

namespace App\Repository;

use App\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;

class CategoryRepository implements CategoryRepositoryInterface
{

    public function getAllCategories()
    {
        return Category::orderBy('created_at', 'DESC')->paginate(8);
    }

    public function createCategory(array $details)
    {
        return Category::create($details);
    }

    public function updateCategory($id, array $details)
    {
        Category::whereId($id)->update($details);
        return Category::find($id);
    }


    public function deleteCategory($id)
    {
        return Category::destroy($id);
    }
}
