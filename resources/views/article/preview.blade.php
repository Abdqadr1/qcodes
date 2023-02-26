
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    
    <!-- Scripts -->
    <script src="https://code.iconify.design/iconify-icon/1.0.3/iconify-icon.min.js"></script>

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/preview.scss', 'resources/js/article-view.js'])

    <title>{{$article->title}}</title>
</head>
<body>
    <div id="app">
        <a class="back btn rounded-pill border fs-5 d-flex align-items-center text-secondary" href="javascript:history.back()">
            <iconify-icon icon="ic:baseline-arrow-back"></iconify-icon>
        </a>
        <script>
            window.article = @json($article);
        </script>
        <div class="" id="preview">
            
        </div>
</body>
</html>

