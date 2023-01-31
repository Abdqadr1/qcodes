<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

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

    <a  style="margin-block: 2em;" href="{{ $link }}">Create a new password</a>

    <p>Link doesn't work? Copy the following link to your browser address bar:</p>
    <a  style="margin-bottom: 3em;" href="{{ $link }}">{{ $link }}</a>

    <p  style="margin-bottom: 3em;">You received this email, because it was requested by a <a href="{{ url('') }}">{{ env('APP_NAME') }}</a> user. This is part of the procedure to create a new password on the system. If you DID NOT request a new password then please ignore this email and your password will remain the same.</p>

    <p style="margin-bottom: 2em;">Thanks,</p>
    <p>The {{ env('APP_NAME') }} Team</p>
</body>
</html>