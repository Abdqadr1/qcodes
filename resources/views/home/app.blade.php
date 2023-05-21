<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-85CV4KMTGW"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-85CV4KMTGW');
    </script>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="msvalidate.01" content="82771543F1B228BD5B232A3459905162" />

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
    <meta name="twitter:card" content="/images/qluecodes-icon-72.png"/>
    <meta name="twitter:site" content="{{env('APP_NAME')}}"/>
    <meta name="twitter:image:src" content="{{url('/images/qluecodes-icon-180.png')}}"/>
    <meta name="twitter:creator" content="{{env('APP_NAME')}}">
    <meta property="twitter:url" content="{{ url()->current() }}"/>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
 
    <!-- Scripts -->
    <script src="https://code.iconify.design/iconify-icon/1.0.3/iconify-icon.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet">

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
