<?php

namespace App\Interfaces;


interface TagRepositoryInterface
{
    public function getAllTags();
    public function getAllTagsPaginate();
    public function createTag(array $details);
    public function updateTag($id, array $details);
    public function deleteTag($id);
}
