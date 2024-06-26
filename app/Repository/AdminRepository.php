<?php

namespace App\Repository;

use App\Interfaces\AdminRepositoryInterface;
use App\Models\Admin;
use App\Models\Role;
use Illuminate\Support\Facades\DB;

class AdminRepository implements AdminRepositoryInterface
{

    public function getAllAdmins($keyword = "")
    {
        if (empty($keyword)) return Admin::select(['id', 'email'])
            ->orderBy('created_at', 'DESC')->get();
        return Admin::select(['id', 'email'])
            ->orderBy('created_at', 'DESC')
            ->where(function ($query) use ($keyword) {
                $query->orWhere('email', 'like', '%' . $keyword . '%');
            })
            ->get();
    }

    public function getAllAdminsPaginate($keyword = "")
    {
        if (empty($keyword)) return Admin::select([
            'id', 'first_name', 'last_name', 'bio', 'mobile', 'street_address',
            'state', 'country', 'enabled', 'email', 'last_login_at'
        ])
            ->orderBy('created_at', 'DESC')->paginate(8);
        return Admin::select([
            'id', 'first_name', 'last_name', 'bio', 'mobile', 'street_address',
            'state', 'country', 'enabled', 'email', 'last_login_at'
        ])
            ->orderBy('created_at', 'DESC')
            ->where(function ($query) use ($keyword) {
                $query->where('id', $keyword);
                $query->orWhere('first_name', 'like', '%' . $keyword . '%');
                $query->orWhere('last_name', 'like', '%' . $keyword . '%');
                $query->orWhere('email', 'like', '%' . $keyword . '%');
            })
            ->paginate(8);
    }

    public function createAdmin(array $details)
    {
        $admin =  Admin::create($details);
        $admin->roles()->attach(3, ['created_at' => now(), 'updated_at' => now()]);
        return $admin;
    }

    public function updateAdmin($id, array $details)
    {
        Admin::whereId($id)->update($details);
        return $this->getAdminById($id);
    }

    public function getAdminById($id)
    {
        return Admin::select([
            'id', 'first_name', 'last_name', 'bio', 'mobile', 'street_address',
            'state', 'country', 'enabled', 'email', 'last_login_at'
        ])
            ->findOrFail($id);
    }

    public function deleteAdmin($id)
    {
        return DB::transaction(function () use ($id) {
            $admin = Admin::findOrFail($id);
            $admin->roles()->detach();
            return $admin->delete();
        });
    }

    public function getAllRoles()
    {
        return Role::all();
    }
}
