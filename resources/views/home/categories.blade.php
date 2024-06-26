@extends('home.app')
@section('title', $keyword ?? "Categories" . ' | search results')
@section('meta_description', env('APP_NAME') . ' Categories')
@section('meta_keywords', 'categories')
@section('nav-name', 'active')

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
<div class="container thebody">
    <div class="row justify-content-start gy-3">
            <div class="col-md-9">
                <form class="input-group mb-4" method="get" action="">
                    <input required name="keyword" class="form-control border border-secondary bg-transparent" placeholder="Search categories" 
                     aria-describedby="button-addon2">
                    <button title="search categories" class="btn btn-danger d-flex align-items-center" type="submit" id="button-addon2">
                        <iconify-icon class="fs-5" icon="ic:outline-search"></iconify-icon>
                    </button>
                </form>
                <hr>
                <h1 class="fs-2">Search results for categories: {{ $keyword }}</h1>
                @foreach ($results as $result)
                    <div class="card mt-3 bg-transparent" style="width: 100%;">
                        <div class="card-body">
                            <h5 class="card-title">
                                <a href="{{ '/categories/'. $result->slug}}">{{ $result->name }}</a>
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
