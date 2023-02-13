<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> @yield('title', $title ?? config('app.name', 'Laravel'))</title>
    <meta name="keywords" content="@yield('meta_keywords', env('APP_NAME') . ' keywords')">
    <meta name="description" content="@yield('meta_description', env('APP_NAME') . ' description')">
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
