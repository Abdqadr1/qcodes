<?php

namespace App\Interfaces;


interface AdminRepositoryInterface
{
    public function getAllAdmins();
    public function getAllAdminsPaginate();
    public function getAllRoles();
    public function createAdmin(array $details);
    public function updateAdmin($id, array $details);
    public function getAdminById($id);
    public function deleteAdmin($id);
}
