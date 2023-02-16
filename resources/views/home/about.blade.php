@extends('home.app')
@section('title', 'About | ' . env('APP_NAME'))
@section('meta_description', 'About ' . env('APP_NAME'))
@section('meta_keywords', 'About ' . env('APP_NAME'))
@section('about-nav', 'active')

@section('content')
<style>
.thebody a{
    text-decoration: none;
}
.thebody a:hover{
    text-decoration: underline;
}
</style>
<div class="container-lg thebody fs-5">
    <h1 class="mb-3 fw-bold">About {{ env('APP_NAME') }}</h1>
    <p>{{ env('APP_NAME') }} helps developers explore the Tech space and simply become better engineers. </p>
    <p>We publish articles and courses, with a strong focus on different programming languages (Java, Javascript, Php, e.t.c.), libraries (React, JQuery, e.t.c.), 
        and frameworks (Spring, Laravel, Nodejs, e.t.c.) for building web and mobile applications</p>

    <p class="fs-4">You can follow us on our social platforms: </p>

    <ul class="fs-5 mb-3">
        <li class="list-group-item">
            <a class="socials" href="" target="_blank">Youtube</a>
        </li>
        <li class="list-group-item">
            <a class="socials" href="https://twitter.com/QlueCodes" target="_blank" >Twitter</a>
        </li>
    </ul>
    <p>
        <a href="/contact" class="text-success">Contact us</a> if you have any questions or issues.
    </p>
</div>
@endsection
