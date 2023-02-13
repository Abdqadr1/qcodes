@extends('home.app')

@section('content')
<div class="container">
    <div class="row justify-content-start gy-3">
        @foreach ($articles as $article)
            <div class="col-md-4 d-flex" style="align-self: stretch;">
                <div class="card" style="width: 100%;">
                    {{-- <img src="{{ $article->banner }}" class="card-img-top" alt="{{ $article->title }}"> --}}
                    <div class="card-body pb-0">
                        <h5 class="card-title fw-bold">{{ $article->title }}</h5>
                        <p class="card-text">{{ $article->summary }}</p>
                        <p class="text-end">
                            <a href="{{ route('viewArticle', $article->slug) }}" class="text-end btn btn-danger btn-sm">Read more</a>
                        </p>
                    </div>
                </div>
            </div>
        @endforeach
        
    </div>
    <div class="d-flex justify-content-end mt-3">
        {{ $articles->links() }} 
    </div>

    <hr class="my-4"/>

    <div class="row justify-content-center mx-0">
        <div class="col col-md-7 col-lg-5">
            <form class="" method="POST" action="{{ route('newsletter-signup') }}">
                @csrf
                @method('post')
                <p class="my-3 text-center fs-3">Sign Up For Our Newsletter</p>
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
