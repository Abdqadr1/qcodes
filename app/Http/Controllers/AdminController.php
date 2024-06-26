<?php

namespace App\Http\Controllers;

use App\Interfaces\AdminRepositoryInterface;
use App\Models\Admin;
use App\Rules\PhoneNumber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    public AdminRepositoryInterface $adminRepo;

    public function __construct(AdminRepositoryInterface $adminRepo)
    {
        $this->adminRepo = $adminRepo;
    }

    public function getAllAdmin(Request $request)
    {
        $this->authorize('viewAll', Admin::class);
        return $this->adminRepo->getAllAdmins($request->input('keyword'));
    }

    public function getAllAdminsPaginate(Request $request)
    {
        $this->authorize('viewAll', Admin::class);
        return $this->adminRepo->getAllAdminsPaginate($request->input('keyword'));
    }

    public function editAdmin(Request $request)
    {
        $this->authorize('update', Admin::class);

        $id = $request->route('id');

        $validated = $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email' => ['required', 'email', 'max:255', Rule::unique('admins', 'email')->ignore($id)],
            'mobile' => ['required', 'max:20', Rule::unique('admins', 'mobile')->ignore($id), new PhoneNumber],
            'street_address' => 'required|max:150',
            'state' => 'required|max:100',
            'country' => 'required|max:100',
            'roles' => 'required|array',
            'roles.*' => 'numeric',
        ]);

        $validated['enabled'] = $request->boolean('enabled');
        return DB::transaction(function () use ($id, $validated) {
            $roles = $validated['roles'];
            unset($validated['roles']);

            $admin = $this->adminRepo->updateAdmin($id, $validated);

            $admin->roles()->syncWithPivotValues(
                $roles,
                ['updated_at' => now()]
            );

            return $admin->load('roles');
        });
    }

    public function deleteAdmin(Request $request)
    {
        $this->authorize('delete', Admin::class);

        $id = $request->route("id");


        if ($request->user('admin')->id == $id) {
            abort(403, 'Invalid action');
        }


        return $this->adminRepo->deleteAdmin($id);
    }

    public function createAdmin(Request $request)
    {
        $this->authorize('create', Admin::class);

        $validated = $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:admins',
            'mobile' => ['required', 'max:20', 'unique:admins', new PhoneNumber],
            'street_address' => 'required|max:150',
            'state' => 'required|max:100',
            'country' => 'required|max:100',
            'roles' => 'required|array',
            'roles.*' => 'numeric',
        ]);
        $validated['enabled'] = $request->boolean('enabled');

        return DB::transaction(function () use ($validated) {

            $validated['password'] = bcrypt('password');

            $admin =  $this->adminRepo->createAdmin($validated);

            $admin->roles()->syncWithPivotValues(
                $validated['roles'],
                ['created_at' => now(), 'updated_at' => now()]
            );

            return $admin->loadMissing('roles');
        });
    }

    public function getAllRoles()
    {
        return $this->adminRepo->getAllRoles();
    }

    public function getAllMessages(Request $request)
    {
        $perPage = 8;
        $this->authorize('getMessages', Admin::class);
        $keyword = $request->input('keyword', '');
        if (empty($keyword)) {
            return DB::table('contact')->paginate($perPage);
        }
        return DB::table('contact')->where(function ($q) use ($keyword) {
            $q->where('name', 'like', '%' . $keyword . '%');
            $q->orWhere('about', 'like', '%' . $keyword . '%');
            $q->orWhere('email', 'like', '%' . $keyword . '%');
            $q->orWhere('message', 'like', '%' . $keyword . '%');
        })->paginate($perPage);
    }

    public function deleteMessages(Request $request)
    {
        $id = $request->route('id');
        return DB::table('contact')->delete($id);
    }
}
