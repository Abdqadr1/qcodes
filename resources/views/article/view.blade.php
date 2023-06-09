<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @include('article.analytics')
    
    <meta name="msvalidate.01" content="82771543F1B228BD5B232A3459905162" />
    <meta name="robots" content="max-snippet:300" />
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $article->title }}</title>
    <meta name="keywords" content="{{ $article->meta_keywords }}">
    <meta name="description" content="{{ $article->meta_title }}">
    <meta name="summary" content="{{ $article->summary }}">
    <link rel="canonical" href="{{ url()->current() }}">

    
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-48.png" sizes="48x48">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-60.png" sizes="60x60">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-72.png" sizes="72x72">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-114.png" sizes="114x114">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-152.png" sizes="152x152">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-180.png" sizes="180x180">
    <link rel="icon" type="image/png" href="/images/qluecodes-icon-192.png" sizes="192x192">

     {{-- OG --}}
    <meta name="theme-color" content="#000000"/>
    <link rel="apple-touch-icon" href="/images/qluecodes-icon-32.png" sizes="32x32"/>

    <meta property="og:type" content="website"/>
    <meta property="og:title" content="@yield('title', $title ?? config('app.name', 'Laravel'))"/>
    <meta property="og:image" content="{{url('/images/qluecodes-icon-180.png')}}"/>
    <meta name="og:description" content="@yield('meta_description', env('APP_NAME') . ' description')"/>
    <meta property="og:url" content="{{ url()->current() }}"/>
    <meta property="og:locale" content="en-us"/>
    <meta property="og:site_name" content="{{env('APP_NAME')}}"/>

    <meta name="twitter:title" content="@yield('title', $title ?? config('app.name', 'Laravel'))"/>
    <meta name="twitter:description" content="@yield('meta_description', env('APP_NAME') . ' description')"/>
    <meta name="twitter:card" content="/images/qluecodes-icon-180.png"/>
    <meta name="twitter:site" content="{{env('APP_NAME')}}"/>
    <meta name="twitter:image:src" content="{{url('/images/qluecodes-icon-180.png')}}"/>
    <meta name="twitter:creator" content="{{env('APP_NAME')}}">
    <meta property="twitter:url" content="{{ url()->current() }}"/>


    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet">

    <!-- Scripts -->
    <script src="https://code.iconify.design/iconify-icon/1.0.3/iconify-icon.min.js"></script>

    {{-- styles --}}
    <link
        rel="stylesheet"
        href="/css/editor.css"
        />
    
     {{-- highlight js --}}
    <link href="/highlight/styles/vs2015.min.css" rel="stylesheet" />

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
 rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/sass/preview.scss'])
</head>
<body>
    <div id="app">
        @include('home.navbar')
    <script>
        const id = {{$article->id}}
        const referrer = document.referrer;
        async function updateLastVisited() {
            const response = await fetch(`/article/${id}/visited`, {
                method: "POST", 
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ referrer }),
            });

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            // const json = await response.json();
        };
        setTimeout(() => {
            updateLastVisited();
        }, 10000);
    </script>
    <div class="thebody px-3 px-md-0">
        <div class="row mx-0 justify-content-center mt-5">
            <div class="col-10 px-1">
                <div class='title mb-5'>
                    <h1 class='title mb-5'>{{ $article->title }}</h1>
                    <div class='mb-3'>
                        Last Modified: {{ date_format($article->updated_at, 'Y-m-d') }}
                    </div>
                    <div class='border-start border-secondary d-flex p-2 border-3 justify-content-md-between align-items-md-center flex-column flex-md-row'>
                        <span>by <em class='text-success'>
                            @if ($article?->author)
                                {{ $article?->author->first_name . ' ' . $article?->author->last_name }}
                            @else
                                Unknown
                            @endif
                            
                        </em></span>
                        <div class='mt-3 mt-md-0'>
                            @foreach ($article->tags as $tag)
                                <a href={{"/tags/$tag->slug"}} class='btn btn-secondary text-light fw-bold rounded-0 ms-1'>{{ $tag->name }}</a>
                            @endforeach
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="ck-content">
                    {!! $article->content !!}
                </div>
            </div>

        </div>
    </div>

    <div class="mx-0 row g-2 px-4">
        @forelse ($children as $child)
            @if ($loop->first)
                <div class="d-flex">
                    <span class='my-3 border-bottom border-3 border-secondary fs-4'>Related Articles</span>
                </div>
                
            @endif
            <div class="col-md-4 d-flex" style="align-self: stretch;">
                <div class="card article-card" style="width: 100%;">
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

    <div class="mx-0 row g-2 px-4">
        @forelse ($categories as $kind)
            @if ($loop->first)
                <div class="d-flex">
                    <span class='my-3 border-bottom border-3 border-secondary fs-4'>Read more</span>
                </div>
            @endif
            <div class="col-md-4 d-flex" style="align-self: stretch;">
                <div class="card article-card" style="width: 100%;">
                    {{-- <img src="{{ $article->banner }}" class="card-img-top" alt="{{ $article->title }}"> --}}
                    <div class="card-body pb-0">
                        <h5 class="card-title fw-bold">{{ $kind->title }}</h5>
                        <p class="card-text ellipsis">{{ $kind->summary }}</p>
                        <p class="text-end">
                            <a href="{{ route('viewArticle', $kind->slug) }}" class="text-end btn btn-danger btn-sm">Read more</a>
                        </p>
                    </div>
                </div>
            </div>
        @empty
            <div></div>
        @endforelse
    </div>
        @include('home.footer')
    </div>
        
    
   @include('article.highlightjs')
</body>
</html>
