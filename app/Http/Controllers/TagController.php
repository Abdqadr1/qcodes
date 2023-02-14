<?php

namespace App\Http\Controllers;

use App\Interfaces\TagRepositoryInterface;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class TagController extends Controller
{
    public TagRepositoryInterface $repo;

    public function __construct(TagRepositoryInterface $repo)
    {
        $this->repo = $repo;
    }

    public function getAllTags(Request $request)
    {
        return $this->repo->getAllTags($request);
    }

    public function getAllTagsPaginate(Request $request)
    {
        return $this->repo->getAllTagsPaginate($request);
    }

    public function createTag(Request $request)
    {
        // $this->authorize('create', Tag::class);

        $validated = $request->validate([
            'name' => 'required|max:100|unique:tags',
            'meta_title' => 'required|max:160',
            'content' => 'required|max:500',
        ]);
        $validated['slug'] = Str::slug($validated['name'], '-');

        return $this->repo->createTag($validated);
    }

    public function editTag(Request $request)
    {
        $this->authorize('update', Tag::class);
        $id = $request->route('id');

        $validated = $request->validate([
            'name' => ['required', 'max:100', Rule::unique('tags', 'name')->ignore($id)],
            'meta_title' => 'required|max:160',
            'content' => 'required|max:500',
        ]);

        $validated['slug'] = Str::slug($validated['name'], '-');

        return $this->repo->updateTag($id, $validated);
    }

    public function deleteTag(Request $request)
    {
        $id = $request->route("id");
        $tag = Tag::withCount(['articles'])->findOrFail($id);
        $this->authorize('delete', $tag);

        return $this->repo->deleteTag($id);
    }
}
