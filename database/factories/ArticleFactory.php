<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        return [
            "title" => fake()->text(100),
            "meta_title" => fake()->text(100),
            "slug" => fake()->text(100),
            "summary" => fake()->text(150),
            "author_id" => fake()->numberBetween(1, 39),
            "parent_id" => fake()->numberBetween(1, 50),
            "content" => fake()->text(100),
            'is_published' => fake()->boolean(),
            'published_at' => fake()->date(),
            'visit' => fake()->numberBetween(10, 1000),
        ];
    }
}
