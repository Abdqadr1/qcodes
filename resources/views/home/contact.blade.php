@extends('home.app')

@section('title', 'Contact | ' . env('APP_NAME'))
@section('meta_description', 'Contact us at ' . env('APP_NAME'))
@section('meta_keywords', 'Contact us at ' . env('APP_NAME'))

@section('content')
<style>
    textarea#msg{
        height: 200px;
    }
</style>
<div class="container thebody">
    <div class="row mx-0">
        <div class="col-md-9">
            <h1 class="mb-3 fw-bold">Contact</h1>
            <p>Comments or questions are welcome. Use the form below or send an email to team@baeldung.com.</p>
            <p>If you're applying to become an author on the platform, click <a href="/admin">here.</a></p>

            <form method="POST" action="{{ route('post-contact') }}">
                @method('post')
                @csrf
                @isset($msg)
                    <p class="text-success">{{$msg}}</p>
                @endisset
                <div class="mb-3">
                    <label for="name" class="form-label fw-bold fs-5">Name*</label>
                    <input required name="name" class="form-control form-control-lg" id="name">
                    @error('name')
                        <span class="text-danger">{{$message}}</span>
                    @enderror
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label fw-bold fs-5">Email*</label>
                    <input type="email" name="email" required class="form-control form-control-lg" id="name">
                    @error('email')
                        <span class="text-danger">{{$message}}</span>
                    @enderror
                </div>
                <div class="mb-3">
                    <label for="about" class="form-label fw-bold fs-5">What is your question about?*</label>
                    <select class="form-select form-select-lg" required name="about" id="about">
                        <option value="The article on the site" selected>The article on the site</option>
                        <option value="Site functionality and other questions">Site functionality and other questions</option>
                        <option value="Partnership inquiries">Partnership inquiries</option>
                    </select>
                    @error('about')
                        <span class="text-danger">{{$message}}</span>
                    @enderror
                </div>
                <div class="mb-3">
                    <label for="msg" class="form-label fw-bold fs-5">Message*</label>
                    <div class="form-floating">
                        <textarea minlength="50" name="message" required class="form-control msg" id="msg"></textarea>
                        <label for="msg">Message</label>
                    </div>
                    @error('message')
                        <span class="text-danger">{{$message}}</span>
                    @enderror
                </div>
                <button type="submit" class="btn btn-success mt-3">Send Message</button>
            </form>
        </div>
    </div>
</div>
@endsection
