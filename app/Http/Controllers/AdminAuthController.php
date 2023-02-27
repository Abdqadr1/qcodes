<?php

namespace App\Http\Controllers;

use App\Http\Service\MailService;
use App\Interfaces\AdminRepositoryInterface;
use App\Models\Admin;
use App\Models\AdminResetPassword;
use App\Rules\PhoneNumber;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use RuntimeException;

class AdminAuthController extends Controller
{
    private AdminRepositoryInterface $adminRepo;
    private string $fromEmail = "account@qluecodes.com";

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

        $token = Str::random(80);

        $validated['remember_token'] = $token;

        $admin =  $this->adminRepo->createAdmin($validated);

        if ($admin) {
            $subject = env('APP_NAME') . " Confirmation Email";
            MailService::send([
                'first_name' => $admin->first_name,
                'subject' => $subject,
                'title' => $subject,
                'from' => $this->fromEmail,
                'view' => "mail.admin.registration",
                'to' => $admin->email,
                'link' => URL::to('/admin/confirm?token=' .  $token . '&email=' . $request->email),
            ]);
        }

        return;
    }

    public function confirmEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255|exists:admins',
            'token' => 'required|size:80',
        ]);

        $admin = Admin::where(function ($query) use ($request) {
            $query->where('email', $request->email);
            $query->where('remember_token', $request->token);
        })->first();

        if ($admin) {
            if ($admin->email_verified_at) {
                return new JsonResponse(['message' => 'Email address has already been confirmed'], 400);
            }
            $admin->email_verified_at = now();
            $admin->save();
        } else {
            return new JsonResponse(['message' => 'Invalid email or token'], 400);
        }
    }

    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255|exists:admins',
        ]);

        $token = Str::random(64);

        $reset = DB::table('admin_password_resets')->upsert([
            'email' => $request->email,
            'token' => $token,
            'created_at' => now(),
            'updated_at' => now(),
            'expired_at' => now()->addWeek(),
        ], ['email'], ['token', 'updated_at', 'expired_at']);

        if ($reset) {
            MailService::send([
                'subject' => "Forgot your password?",
                'title' => "Forgot your password?",
                'from' => $this->fromEmail,
                'view' => "mail.admin.forgotpassword",
                'to' => $request->email,
                'link' => URL::to('/admin/changepassword/' . $token . '?email=' . $request->email),
            ]);
        }
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

        if ($adminReset && now()->lte($adminReset->expired_at)) {
            $admin = Admin::where('email', $request->email)->first();
            if (Hash::check($request->password, $admin->password)) {
                return new JsonResponse(['message' => 'Use another password'], 400);
            }
            $admin->password = $password;
            $admin->save();
        } else {
            return new JsonResponse(['message' => 'Invalid email or expired token'], 400);
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
            fn ($query) => $query->whereNotNull('email_verified_at')
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

    public function getDashboard(Request $request)
    {
        $id = $request->user('admin')->id;
        return Admin::with('roles')
            ->withCount('articles')
            ->where('id', $id)
            ->first([
                'id', 'email', 'street_address', 'enabled', 'last_login_at',
                'first_name', 'last_name', 'bio', 'mobile', 'email_verified_at',
                'state', 'country'
            ]);
    }
}
