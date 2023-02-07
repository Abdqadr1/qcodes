@extends('home.app')

@section('content')
<div class="container-lg thebody">
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
            @forelse ($articles as $article)
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
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
                <div class="col-12 p-2">No articles found</div>
            @endforelse
        </div> 
    </div>
    <div class="d-flex justify-content-end mt-3">
        {{ $articles->links() }} 
    </div>
</div>
@endsection
