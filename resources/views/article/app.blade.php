<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $title ?? config('app.name', 'Laravel') }}</title>
    <meta name="keywords" content="@yield('meta_keywords', env('APP_NAME') . ' keywords')">
    <meta name="description" content="@yield('meta_description', env('APP_NAME') . ' description')">
    <link rel="canonical" href="{{ url()->current() }}">

    <!-- Fonts -->
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/preview.scss', 'resources/js/article-view.js'])
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
</body>
</html>
