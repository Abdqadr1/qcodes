@extends('home.app')
@section('title', $keyword . ' | search results')
@section('meta_description', 'Search ' . env('APP_NAME'))
@section('meta_keywords', 'Search ' . env('APP_NAME'))

@section('content')
<style>
    .card-title a {
        text-decoration: none;
        color: #267438;
    }
    .card-title a:hover {
        text-decoration: underline;
    }
</style>
<div class="container-lg thebody">
    <div class="row justify-content-start gy-3">
            <div class="col-md-9">
                <h2>Search results for: {{ $keyword }}</h2>
                @foreach ($results as $result)
                    <div class="card mt-3" style="width: 100%;">
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="{{ '/article/'. $result->slug}}">{{ $result->title }}</a>
                            </h4>
                            <p class="card-text fs-5">{{ $result->summary }}</p>
                        </div>
                    </div>
                @endforeach
            </div>
    </div>
    <div class="d-flex mt-5">
        {{ $results->links() }} 
    </div>
</div>
@endsection
