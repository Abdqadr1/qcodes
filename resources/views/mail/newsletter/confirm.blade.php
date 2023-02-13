<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
        crossorigin="anonymous"
    >
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
    <title>Newsletter Subscription</title>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center px-4 py-2">
            <div class="col-12 px-2">
                <div class="p-3 bg-light border my-3">
                    <img class="mx-auto d-block" src="{{url('/images/qluecodes.png')}}" alt="{{env('APP_NAME')}}" height="80">
                </div>
                <p class="">Hi {{ $first_name }},</p>
                <p class="">Thank you for signing up for our newsletter.</p>
                <p class="fs-4">Please confirm your email address to start receiving our newsletter.</p>
                <p class="">please click on the button to confirm..</p>

                <a class="btn btn-success mb-3" href="{{ $link }}">Confirm My Email Address</a>

                <p>Or copy the following link to your browser address bar:</p>
                <a class="mb-3 d-block"  href="{{ $link }}">{{ $link }}</a>

                <p class="fs-6">If you don't know why you received this email, please contact us so we can help you.</p>
                <p class="fs-6 mb-1">Thanks, </p>
                <p class="fs-6">The {{ env('APP_NAME') }} Team</p>
            </div>
        </div>
    </div>
    
</body>
</html>