@extends('home.app')

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
<div class="container-lg">
    <div class="row justify-content-start gy-3">
            <div class="col-md-9">
                <form class="input-group mb-4" method="get" action="">
                    <input required name="keyword" type="text" class="form-control" placeholder="Search categories" 
                     aria-describedby="button-addon2">
                    <button title="search categories" class="btn btn-success d-flex align-items-center" type="button" id="button-addon2">
                        <iconify-icon class="fs-5" icon="ic:outline-search"></iconify-icon>
                    </button>
                </form>
                <hr>
                <h2>Search results for categories: {{ $title }}</h2>
                @foreach ($results as $result)
                    <div class="card mt-3" style="width: 100%;">
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="{{ '/categories/'. $result->slug}}">{{ $result->name }}</a>
                            </h4>
                            <p class="card-text fs-5">{{ $result->content }}</p>
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
