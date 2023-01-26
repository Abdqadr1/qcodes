<?php

namespace App\Http\Controllers;

use App\Interfaces\AdminRepositoryInterface;
use App\Rules\PhoneNumber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
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
        return $this->adminRepo->getAllAdmins($request->input('keyword'));
    }

    public function editAdmin(Request $request)
    {
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
        $id = $request->route("id");
        return $this->adminRepo->deleteAdmin($id);
    }

    public function createAdmin(Request $request)
    {
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
}
