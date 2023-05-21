
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

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
    <link href="/highlight/vs2015.min.css" rel="stylesheet" />

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
 rel="stylesheet" />

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/preview.scss'])

    <title>{{$article->title}}</title>
</head>
<body class="">
    <div id="app">
        <a class="back btn rounded-pill border fs-5 d-flex align-items-center text-secondary" href="javascript:history.back()">
            <iconify-icon icon="ic:baseline-arrow-back"></iconify-icon>
        </a>
        
    <div class="thebody px-3 px-md-0 mt-4">
        <p class='preview'>Preview</p>
        <div class="row mx-0 justify-content-center mt-5">
            <div class="col-10 px-1">
                <div class='title mb-5'>
                    <h1 class='title mb-5'>{{ $article->title }}</h1>
                    <div class='mb-3'>
                        Last Modified: {{ date_format($article->updated_at, 'Y-m-d') }}
                    </div>
                    <div class='border-start border-secondary d-flex p-2 border-3 justify-content-md-between align-items-md-center flex-column flex-md-row'>
                        <span>by <em class='text-success'>
                            {{ $article?->author->first_name. ' ' . $article?->author->last_name }}
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
   @include('article.highlightjs')
</body>
</html>

