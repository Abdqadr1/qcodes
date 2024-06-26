<?php

namespace App\Http\Controllers;

use App\Interfaces\NotificationRepositoryInterface;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    private NotificationRepositoryInterface $repo;
    public function __construct(NotificationRepositoryInterface $repo)
    {
        $this->middleware('auth:sanctum');
        $this->repo = $repo;
    }

    public function getAllNotifications(Request $request)
    {
        $this->authorize('viewAll', Notification::class);

        return $this->repo->getAllNotifications($request->input('keyword'));
    }

    public function getAllNotificationsPaginate(Request $request)
    {
        $this->authorize('viewAll', Notification::class);

        return $this->repo->getNotificationsPaginate($request);
    }

    public function createNotification(Request $request)
    {
        $this->authorize('create', Notification::class);

        $validated = $request->validate([
            'type' => 'required|max:7',
            'to' => 'required_unless:type,GENERAL|exists:admins,id',
            'title' => 'required|max:255',
            'content' => 'required|max:1000',
        ]);

        return $this->repo->createNotification($validated);
    }

    public function deleteNotification(Request $request)
    {
        $this->authorize('delete', Notification::class);

        $id = $request->route('id');
        return $this->repo->deleteNotification($id);
    }

    public function getUserNotifications(Request $request)
    {

        return $this->repo->getUserNotifications($request);
    }

    public function getNotificationsType()
    {
        return config('enum.notification_type');
    }

    public function readNotification(Request $request)
    {
        $id = $request->route('id');
        return $this->repo->readNotification($id);
    }
}
