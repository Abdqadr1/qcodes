<?php

namespace App\Repository;

use App\Interfaces\AdminRepositoryInterface;
use App\Models\Admin;

class AdminRepository implements AdminRepositoryInterface
{

    public function getAllAdmins()
    {
        return Admin::paginate(8);
    }

    public function createAdmin(array $details)
    {
        return Admin::create($details);
    }

    public function updateAdmin($id, array $details)
    {
        return Admin::whereId($id)->update($details);
    }

    public function getAdminById($id)
    {
        return Admin::findOrFail($id);
    }

    public function deleteAdmin($id)
    {
        return Admin::destroy($id);
    }
}
