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
@endsection
