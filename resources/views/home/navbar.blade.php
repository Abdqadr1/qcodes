<nav class="navbar navbar-expand-md navbar-light bg-transparent shadow-sm">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ url('/') }}">
            <img src="/images/qluecodes.png" title="logo" loading='eager' alt="{{ config('app.name', 'Laravel') }}" width="80" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link fw-bold {{ $nav_name == 'java' ? 'active' : '' }} text-uppercase" href="/categories/java">Java</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fw-bold {{$nav_name == 'spring' ? 'active' : ''}} text-uppercase" href="/categories/spring">Spring</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fw-bold {{$nav_name == 'react' ? 'active' : ''}} text-uppercase" href="/categories/react">React</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fw-bold {{$nav_name == 'php' ? 'active' : ''}} text-uppercase" href="/categories/php">PHP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fw-bold {{$nav_name == 'laravel' ? 'active' : ''}} text-uppercase" href="/categories/laravel">Laravel</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fw-bold {{$nav_name == 'sql' ? 'active' : ''}} text-uppercase" href="/categories/sql">MySQL</a>
                </li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ms-auto align-items-center">
                <li class="nav-item">
                    <a class="nav-link fw-bold @yield('search-nav', '') d-md-flex" title="search" href="{{route('search')}}">
                        <iconify-icon class="fs-3" icon="ic:outline-search">search</iconify-icon>
                    </a>
                </li>
                {{-- <a class="btn btn-danger w-220p ms-md-2 fw-bold mt-3 mt-md-0" href="/admin/dashboard">Become a writer</a> --}}
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