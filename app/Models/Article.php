<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = "articles";

    protected $casts = [
        "is_published" => "boolean"
    ];

    protected $fillable = [
        "title", "meta_title",
        "slug", "summary",
        "author_id", "parent_id",
        "content", 'published_at',
        'visit', 'is_published',
        'last_visited'
    ];

    public function author()
    {
        return $this->belongsTo(Admin::class, 'author_id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'article_tags', 'article_id', 'tag_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'article_category', 'article_id', 'category_id');
    }

    public function parent()
    {
        return $this->belongsTo(Article::class, 'parent_id', 'id');
    }

    public function children()
    {
        return $this->hasMany(Article::class, 'parent_id', 'id');
    }
}
