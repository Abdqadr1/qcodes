<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title = fake()->text(100);
        return [
            "title" => $title,
            "meta_title" => fake()->text(100),
            "slug" => Str::slug($title),
            "summary" => fake()->text(150),
            "author_id" => fake()->numberBetween(1, 39),
            "parent_id" => fake()->numberBetween(1, 50),
            "content" => fake()->text(100),
            'published_at' => fake()->date(),
            'visit' => fake()->numberBetween(10, 1000),
            'status' => config('enum.article_status')[rand(0, 3)],
        ];
    }
}
