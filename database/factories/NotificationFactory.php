<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class NotificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'to' => rand(1, 15),
            'title' => fake()->text(100),
            'content' => fake()->text(200),
            'type' => config('enum.notification_type')[rand(0, 2)],
        ];
    }
}
