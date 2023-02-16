@extends('home.app')
@section('title', $tag->name)
@section('meta_description', $tag->meta_title)
@section('meta_keywords', $tag->name)

@section('content')
<div class="container-lg thebody">
    <div class="my-4">
        {{$tag->content}}
    </div>
    <hr>
    <div class="row justify-content-start gy-3">
        @forelse ($articles as $article)
            <div class="col-md-4">
                <div class="card article-card" style="width: 100%;">
                    {{-- <img src="{{ $article->banner }}" class="card-img-top" alt="{{ $article->title }}"> --}}
                    <div class="card-body pb-0">
                        <h5 class="card-title">{{ $article->title }}</h5>
                        <p class="card-text">{{ $article->summary }}</p>
                        <p class="text-end">
                            <a href="{{ route('viewArticle', $article->slug) }}" class="card-link text-end">Read more...</a>
                        </p>
                    </div>
                </div>
            </div>
        @empty
            <div>No articles</div>
        @endforelse 
        
    </div>
    <div class="d-flex justify-content-end mt-3">
        {{ $articles->links() }} 
    </div>
</div>
@endsection
