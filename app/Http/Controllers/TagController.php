<?php

namespace App\Http\Controllers;

use App\Interfaces\TagRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class TagController extends Controller
{
    public TagRepositoryInterface $repo;

    public function __construct(TagRepositoryInterface $repo)
    {
        $this->repo = $repo;
    }

    public function getAllTags()
    {
        return $this->repo->getAllTags();
    }

    public function createTag(Request $request)
    {
        return $this->repo->createTag([
            'name' => $request->input('name'),
            'meta_title' => $request->input('meta_title'),
            'content' => $request->input('content'),
            'slug' => Str::random(50)
        ]);
    }

    public function editTag(Request $request)
    {
        $id = $request->route('id');
        return $this->repo->updateTag($id, [
            'name' => $request->input('name'),
            'meta_title' => $request->input('meta_title'),
            'content' => $request->input('content'),
            'slug' => Str::random(50)
        ]);
    }

    public function deleteTag(Request $request)
    {
        $id = $request->route("id");
        return $this->repo->deleteTag($id);
    }
}
