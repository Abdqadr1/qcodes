@extends('article.app')

@section('content')
<script>
    window.article = @json($article);
</script>
<div class="" id="view">
    
</div>
@endsection
