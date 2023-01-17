<?php

namespace App\Interfaces;


interface CategoryRepositoryInterface
{
    public function getAllCategoriesPaginate();
    public function getAllCategories();
    public function createCategory(array $details);
    public function updateCategory($id, array $details);
    public function deleteCategory($id);
}
