<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
    <title>Admin Forgot Password</title>
</head>
<body>
    <h2>Create a new password</h2>
    <p>Forgot your password, huh? No big deal.</p>
    <p>To create a new password, just follow this link:</p>

    <a  class="mb-2" href="{{ $link }}">Create a new password</a>

    <p>Link doesn't work? Copy the following link to your browser address bar:</p>
    <a  class="mb-3" href="{{ $link }}">{{ $link }}</a>

    <p  class="mb-3">You received this email, because it was requested by a <a class="fw-bold" href="{{ url('') }}">{{ env('APP_NAME') }}</a> user. This is part of the procedure to create a new password on the system. If you DID NOT request a new password then please ignore this email and your password will remain the same.</p>

    <p class="mb-1">Thanks,</p>
    <p>The {{ env('APP_NAME') }} Team</p>
</body>
</html>