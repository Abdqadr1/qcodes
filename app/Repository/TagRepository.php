<?php

namespace App\Repository;

use App\Interfaces\TagRepositoryInterface;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagRepository implements TagRepositoryInterface
{

    public function getAllTagsPaginate(Request $request)
    {
        return Tag::orderBy('created_at', 'DESC')->paginate(8);
    }

    public function getAllTags(Request $request)
    {
        $keyword = $request->input('keyword');
        if ($keyword) {
            return Tag::select(['id', 'name'])
                ->where('name', 'like', '%' . $keyword . '%')
                ->get();
        }
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
