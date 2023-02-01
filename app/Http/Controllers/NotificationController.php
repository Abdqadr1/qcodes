<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function getUserNotifications(Request $request)
    {
        $id = $request->user('admin')->id;
        return DB::table('admin_notifications')->where(function ($query) use ($id) {
            $query->where('to', $id);
            $query->orWhere('type', 'GENERAL');
        })->get();
    }
}
