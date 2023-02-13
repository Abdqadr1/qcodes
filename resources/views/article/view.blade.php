@extends('article.app')
@section('title', $article->title)
@section('meta_description', $article->meta_title)
@section('meta_keywords', $article->meta_keywords)

@section('content')
<script>
    window.article = @json($article);
</script>
<div class="thebody px-3 px-md-0" id="view">
    
</div>
@endsection
