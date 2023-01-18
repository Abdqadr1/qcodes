<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface TagRepositoryInterface
{
    public function getAllTags(Request $request);
    public function getAllTagsPaginate(Request $request);
    public function createTag(array $details);
    public function updateTag($id, array $details);
    public function deleteTag($id);
}
