@extends('home.app')
@section('title', $keyword . ' | search results')
@section('meta_description', 'Categories ' . env('APP_NAME'))
@section('meta_keywords', 'Categories ' . env('APP_NAME'))
@section('tag-nav', 'active')

@section('content')
<style>
    .card-title a {
        text-decoration: none;
        color: var(--bs-danger);
    }
    .card-title a:hover {
        text-decoration: underline;
    }
</style>
<div class="container-lg thebody">
    <div class="row justify-content-start gy-3">
            <div class="col-md-9">
                <form class="input-group mb-4" method="get" action="">
                    <input required name="keyword" class="form-control border border-secondary bg-transparent" placeholder="Search tags" 
                     aria-describedby="button-addon2">
                    <button title="search tags" class="btn btn-danger d-flex align-items-center" type="button" id="button-addon2">
                        <iconify-icon class="fs-5" icon="ic:outline-search"></iconify-icon>
                    </button>
                </form>
                <hr>
                <h2>Search results for tags: {{ $keyword }}</h2>
                @foreach ($results as $result)
                    <div class="card mt-3" style="width: 100%;">
                        <div class="card-body">
                            <h5 class="card-title">
                                <a href="{{ '/tags/'. $result->slug}}">{{ $result->name }}</a>
                            </h5>
                            <p class="card-text lh-sm">{{ $result->content }}</p>
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
