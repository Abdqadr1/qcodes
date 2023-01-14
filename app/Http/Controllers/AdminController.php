<?php

namespace App\Http\Controllers;

use App\Interfaces\AdminRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public AdminRepositoryInterface $adminRepo;

    public function __construct(AdminRepositoryInterface $adminRepo)
    {
        $this->adminRepo = $adminRepo;
    }


    public function getAllAdmin(Request $request)
    {
        return $this->adminRepo->getAllAdmins();
    }

    public function editAdmin(Request $request)
    {
        $id = $request->route('id');
        return DB::transaction(function () use ($id, $request) {
            $admin =
                $this->adminRepo->updateAdmin($id, [
                    'first_name' => $request->input('first_name'),
                    'last_name' => $request->input('last_name'),
                    'email' => $request->input('email'),
                    'mobile' => $request->input('mobile'),
                    'bio' => $request->input('bio'),
                    'enabled' => $request->boolean('enabled')
                ]);

            $admin->roles()->syncWithPivotValues(
                $request->roles,
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
        return DB::transaction(function () use ($request) {
            $admin =  $this->adminRepo->createAdmin([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'mobile' => $request->input('mobile'),
                'bio' => $request->input('bio'),
                'enabled' => $request->boolean('enabled'),
                'password' => Hash::make('password')
            ]);

            $admin->roles()->syncWithPivotValues(
                $request->roles,
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
