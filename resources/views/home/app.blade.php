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

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
 
    <!-- Scripts -->
    <script src="https://code.iconify.design/iconify-icon/1.0.3/iconify-icon.min.js"></script>

    @vite(['resources/sass/app.scss', 'resources/js/bootstrap.js'])

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="/categories">Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="/tags">Tags</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="/about">About</a>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <form class="input-group" method="get" action="{{route('search')}}">
                            <input required name="keyword" type="text" class="form-control" placeholder="search articles" aria-describedby="button-addon2">
                            <button title="search article" class="btn btn-outline-secondary d-flex align-items-center" type="submit" id="button-addon2">
                                <iconify-icon class="fs-5" icon="ic:outline-search"></iconify-icon>
                            </button>
                        </form>
                        <a class="btn btn-success w-220p ms-md-2 fw-bold mt-3 mt-md-0" href="/admin">Become a writer</a>
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
        <footer class="row py-3 px-md-4 mx-0 bg-dark bg-gradient text-light">
            <div class="col-md-2 mb-3 mb-md-0">
                <img src="" alt="{{ env('APP_NAME') }}">
            </div>
            <div class="col-md-10">
                <div class="d-flex justify-content-center flex-column flex-md-row text-uppercase">
                    <a class="ms-md-2 text-center" href="/about">about</a>
                    <a class="ms-md-2 text-center" href="/terms">Terms Of Service</a>
                    <a class="ms-md-2 text-center" href="/privacy">privacy policy</a>
                    <a class="ms-md-2 text-center" href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
