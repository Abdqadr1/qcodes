<?php

namespace App\Http\Controllers;

use App\Interfaces\AdminRepositoryInterface;
use App\Models\Admin;
use App\Rules\PhoneNumber;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use RuntimeException;

class AdminAuthController extends Controller
{
    private AdminRepositoryInterface $adminRepo;

    public function __construct(AdminRepositoryInterface $adminRepo)
    {
        $this->adminRepo = $adminRepo;
    }

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

        $admin =  $this->adminRepo->createAdmin($validated);

        //TODO: send verification mail

        return $admin;
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255|exists:admins',
            'password' => 'required|min:8|max:255',
        ]);

        if (Auth::guard('admin')->attempt([
            'email' => $validated['email'],
            'password' => $validated['password'],
            'enabled' => 1,
            fn ($query) => $query->whereNull('email_verified_at')
        ], $request->boolean('remember'))) {
            $request->session()->regenerate();

            $admin = $this->adminRepo->updateAdmin(
                $request->user('admin')->id,
                [
                    'last_login_at' => now('Africa/Lagos'),
                ]
            );

            return new JsonResponse($admin, 200);
        }

        return new JsonResponse(['message' => 'Invalid Credentials'], 401);
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return new JsonResponse([], 204);
    }

    public function update(Request $request)
    {

        $validated = $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'mobile' => [
                'required', 'max:20',
                Rule::unique('admins')->ignore($request->user('admin')),
                new PhoneNumber
            ],
            'street_address' => 'required|max:150',
            'state' => 'required|max:100',
            'country' => 'required|max:100',
        ]);

        return $this->adminRepo->updateAdmin(
            $request->user('admin')->id,
            $validated
        );
    }
}
