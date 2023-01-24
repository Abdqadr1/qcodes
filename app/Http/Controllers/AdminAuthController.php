<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Rules\PhoneNumber;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use RuntimeException;

class AdminAuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:admins',
            'mobile' => ['required', 'max:20', 'unique:admins', new PhoneNumber],
            'street_address' => 'required|max:150',
            'state' => 'required|max:100',
            'country' => 'required|max:100',
            'password' => 'required|min:8|max:255|confirmed',
        ]);

        $validated['password'] = bcrypt($validated['password']);

        $admin =  Admin::create($validated);

        //TODO: send verification mail

        return $admin;
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255|exists:admins',
            'password' => 'required|min:8|max:255',
            // 'remember' => 'nullable|boolean'
        ]);

        if (Auth::guard('admin')->attempt([
            'email' => $validated['email'],
            'password' => $validated['password'],
            'enabled' => 1,
            fn ($query) => $query->whereNull('email_verified_at')
        ])) {
            return new JsonResponse($request->user('admin'), 200);
        }

        return new JsonResponse(['message' => 'Invalid Credentials'], 401);
    }
}
