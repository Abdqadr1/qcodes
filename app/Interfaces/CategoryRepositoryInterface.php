<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface CategoryRepositoryInterface
{
    public function getAllCategoriesPaginate(Request $request);
    public function getAllCategories(Request $request);
    public function createCategory(array $details);
    public function updateCategory($id, array $details);
    public function deleteCategory($id);
}
