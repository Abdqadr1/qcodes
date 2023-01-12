<?php

namespace App\Http\Controllers;

use App\Interfaces\AdminRepositoryInterface;
use App\Repository\AdminRepository;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public AdminRepositoryInterface $adminRepo;

    public function __construct(AdminRepositoryInterface $adminRepo)
    {
        $this->adminRepo = $adminRepo;
    }


    public function getAllAdmin(Request $request)
    {
        return $this->adminRepo->getAllAdmins();
    }
}
