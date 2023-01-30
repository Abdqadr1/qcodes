<?php

namespace App\Http\Controllers;

use App\Interfaces\AdminRepositoryInterface;
use App\Models\Admin;
use App\Models\AdminResetPassword;
use App\Rules\PhoneNumber;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
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

    public function confirmEmail(Request $request)
    {

        $request->validate([
            'email' => 'required|email|max:255|exists:admins',
        ]);
    }

    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255|exists:admins',
        ]);

        $reset = DB::table('admin_password_resets')->upsert([
            'email' => $request->email,
            'token' => Str::random(64),
            'created_at' => now(),
            'updated_at' => now(),
        ], ['email'], ['token', 'updated_at']);

        //TODO: send change password mail to user;
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'password' => 'required|min:8|max:255|confirmed',
            'email' => 'required|email|max:255|exists:admin_password_resets',
            'token' => 'required|max:255|exists:admin_password_resets',
        ]);


        $adminReset = DB::table('admin_password_resets')->where(function ($query) use ($request) {
            $query->where('email', $request->email);
            $query->where('token', $request->token);
        })->first();

        $password = bcrypt($request->password);

        if ($adminReset) {
            $admin = Admin::where('email', $request->email)->first();
            $admin->password = $password;
            $admin->save();
        }
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
