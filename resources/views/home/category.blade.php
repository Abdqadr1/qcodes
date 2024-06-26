@extends('home.app')
@section('title', $category->name)
@section('meta_description', $category->meta_title)
@section('meta_keywords', $category->name)

@section('content')
<div class="container thebody">
    <div class="row justify-content-start gy-3 align-items-center">
        <div class="col-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    @foreach($parents as $parent)
                        <li class="breadcrumb-item"><a href="{{route('cat-page', $parent->slug)}}">{{ $parent->name }}</a></li>
                    @endforeach
                    <li class="breadcrumb-item active" aria-current="page">{{$category->name}}</li>
                </ol>
            </nav>
            <h1>Category: {{$category->name}}</h1>
            <div class="my-4">
                {{$category->content}}
            </div>
            <hr>

             <div class="row justify-content-start gy-3">
                @forelse ($articles as $article)
                    <div class="col-md-4 d-flex" style="align-self: stretch;">
                        <div class="card article-card" style="width: 100%;">
                            {{-- <img src="{{ $article->banner }}" class="card-img-top" alt="{{ $article->title }}"> --}}
                            <div class="card-body pb-0">
                                <h5 class="card-title fw-bold">{{ $article->title }}</h5>
                                <p class="card-text ellipsis">{{ $article->summary }}</p>
                                <p class="text-end">
                                    <a href="{{ route('viewArticle', $article->slug) }}" class="text-end btn btn-danger btn-sm">Read more</a>
                                </p>
                            </div>
                        </div>
                    </div>
                @empty
                    <div style="height: 200px;">No articles</div>
                @endforelse
                
            </div>

            <div class="d-flex justify-content-end mt-3">
                {{ $articles->links() }} 
            </div>
        </div> 
    </div>
</div>
@endsection
