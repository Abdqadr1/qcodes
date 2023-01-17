<?php

namespace App\Repository;

use App\Interfaces\TagRepositoryInterface;
use App\Models\Tag;

class TagRepository implements TagRepositoryInterface
{

    public function getAllTagsPaginate()
    {
        return Tag::orderBy('created_at', 'DESC')->paginate(8);
    }

    public function getAllTags()
    {
        return Tag::select(['id', 'name'])->get();
    }

    public function createTag(array $details)
    {
        return Tag::create($details);
    }

    public function updateTag($id, array $details)
    {
        Tag::whereId($id)->update($details);
        return Tag::find($id);
    }


    public function deleteTag($id)
    {
        return Tag::destroy($id);
    }
}
