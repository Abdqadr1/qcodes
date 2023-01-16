<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = "categories";

    protected $fillable = ['name', 'meta_title', 'content', 'slug'];

    public function articles()
    {
        return $this->belongsToMany(Article::class, 'article_category', 'category_id', 'article_id');
    }
}
