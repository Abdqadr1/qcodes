@extends('home.app')


@section('title',env('APP_NAME'))
@section('meta_description', "Discover a world of programming and web development with QlueCodes. Explore our extensive collection of tutorials and articles covering various topics such as Java, JavaScript, PHP, Larvel, React, Spring Boot, etc. Stay up-to-date with the latest trends in software development and enhance your coding skills with QlueCodes.")
@section('meta_keywords', "programming,coding,web development,software development,technology,tutorials,articles,Java,Spring Boot,Amazon S3 integration,observability in Spring Boot,Spring Boot native query, JPQL,dynamic queries in Spring Boot,YAML to properties conversion,properties to YAML conversion")

@section('content')
<div class="container thebody">
    <div class="row mx-0">
       <h1 style="color:#022d36;" class="my-4 border-bottom col-8 col-sm-7 col-md-3 border-danger border-3 px-0 latest-header">Latest Posts</h1> 
    </div>
    
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

    <hr class="my-4"/>

    <div class="row justify-content-center mx-0 mb-5">
        <div class="col col-md-7 col-lg-5">
            <form class="" method="POST" action="{{ route('newsletter-signup') }}">
                @csrf
                @method('post')
                <p style="color:#022d36;" class="my-3 text-center fs-3">Sign Up For Our Newsletter</p>
                <div class="row">
                    <input name='name' class="form-control mb-1 bg-transparent border border-secondary" id="name" placeholder="Name" required>
                    @error('name') <p class="text-danger mb-2">{{$message}}</p> @enderror

                    <input name='email' type="email" class="form-control mb-1 bg-transparent border border-secondary" id="email" placeholder="email address" required>
                    @error('email') <p class="text-danger mb-2">{{$message}}</p> @enderror

                    <button class="btn btn-danger mt-3">Sign Up</button>
                </div>
            </form> 
        </div>
    </div>

</div>
@endsection
