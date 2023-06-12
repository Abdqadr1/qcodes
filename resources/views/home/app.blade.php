<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    
    @include('article.analytics')

    <title>@yield('title', $title ?? config('app.name', 'Laravel'))</title>
    <meta name="keywords" content="@yield('meta_keywords', env('APP_NAME') . ' keywords')">
    <meta name="description" content="@yield('meta_description', env('APP_NAME') . ' description')">
    <link rel="canonical" href="{{ url()->current() }}">

    @include('article.socials')


    @vite(['resources/sass/app.scss', 'resources/js/bootstrap.js'])

    <style>
        body {
            font-family: 'Overpass', sans-serif;
        }
    </style>
</head>
<body>
    <div id="app">
        @include('home.navbar')

        <main class="py-4">
            @yield('content')
        </main>
       

        @include('home.footer')
    </div>
</body>
</html>
