<?php

namespace App\Repository;

use App\Interfaces\AdminRepositoryInterface;
use App\Models\Admin;
use App\Models\Role;

class AdminRepository implements AdminRepositoryInterface
{

    public function getAllAdmins()
    {
        return Admin::orderBy('created_at', 'DESC')->paginate(8);
    }

    public function createAdmin(array $details)
    {
        return Admin::create($details);
    }

    public function updateAdmin($id, array $details)
    {
        Admin::whereId($id)->update($details);
        return Admin::find($id);
    }

    public function getAdminById($id)
    {
        return Admin::findOrFail($id);
    }

    public function deleteAdmin($id)
    {
        return Admin::destroy($id);
    }

    public function getAllRoles()
    {
        return Role::all();
    }
}
