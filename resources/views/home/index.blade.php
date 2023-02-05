@extends('home.app')

@section('content')
<div class="container">
    <div class="row justify-content-start gy-3">
        @foreach ($articles as $article)
            <div class="col-md-4">
                <div class="card" style="width: 100%;">
                    <img src="{{ $article->banner }}" class="card-img-top" alt="{{ $article->title }}">
                    <div class="card-body pb-0">
                        <h5 class="card-title">{{ $article->title }}</h5>
                        <p class="card-text">{{ $article->summary }}</p>
                        <p class="text-end">
                            <a href="{{ route('viewArticle', $article->slug) }}" class="card-link text-end">Read more...</a>
                        </p>
                    </div>
                </div>
            </div>
        @endforeach
        
    </div>
    <div class="d-flex justify-content-end mt-3">
        {{ $articles->links() }} 
    </div>

    <form class="" method="POST" action="{{ route('newsletter-signup') }}">
        @csrf
        @method('post')
        <h3 class="my-3 text-center">Sign Up For Our Newsletter</h3>
        <div class="row">
            <input name='name' class="form-control mb-1" id="name" placeholder="Name" required>
            @error('name') <p class="text-danger mb-2">{{$message}}</p> @enderror

            <input name='email' type="email" class="form-control mb-1" id="email" placeholder="email address" required>
            @error('email') <p class="text-danger mb-2">{{$message}}</p> @enderror

            <button class="btn btn-primary mt-3">Sign Up</button>
        </div>
    </form>
</div>
@endsection
