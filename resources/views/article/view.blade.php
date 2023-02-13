@extends('article.app')
@section('title', $article->title)
@section('meta_description', $article->meta_title)
@section('meta_keywords', $article->meta_keywords)

@section('content')
<script>
    window.article = @json($article);
    function updateLastVisited(){
        fetch(`/article/${article.id}/visited`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((response) => {
                console.log(response);
            });
    };
    setTimeout(() => {
        updateLastVisited();
    }, 10000);
</script>
<div class="thebody px-3 px-md-0" id="view">
    
</div>
<div class="mx-0 row g-2 px-4">
    @forelse ($children as $child)
        @if ($loop->first)
            <div class="d-flex">
                <span class='my-3 border-bottom border-3 border-secondary fs-4'>Related Articles</span>
            </div>
            
        @endif
        <div class="col-md-4 d-flex" style="align-self: stretch;">
            <div class="card" style="width: 100%;">
                {{-- <img src="{{ $article->banner }}" class="card-img-top" alt="{{ $article->title }}"> --}}
                <div class="card-body pb-0">
                    <h5 class="card-title fw-bold">{{ $child->title }}</h5>
                    <p class="card-text ellipsis">{{ $child->summary }}</p>
                    <p class="text-end">
                        <a href="{{ route('viewArticle', $child->slug) }}" class="text-end btn btn-danger btn-sm">Read more</a>
                    </p>
                </div>
            </div>
        </div>
    @empty
        <div></div>
    @endforelse
</div>

@endsection
