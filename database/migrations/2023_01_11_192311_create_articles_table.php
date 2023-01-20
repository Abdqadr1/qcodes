<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('author_id');
            $table->bigInteger('parent_id')->nullable();
            $table->string('banner')->default('');
            $table->string('title', 100)->nullable();
            $table->string('meta_title', 160)->nullable();
            $table->string('slug', 100)->nullable();
            $table->tinyText('summary')->nullable();
            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->bigInteger('visit')->default(0);
            $table->timestamp('last_visited')->nullable();
            $table->text('content')->index()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
};
