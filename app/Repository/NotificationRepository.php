<?php

namespace App\Repository;

use App\Interfaces\NotificationRepositoryInterface;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationRepository implements NotificationRepositoryInterface
{
    private $perPage = 10;

    public function getNotificationsPaginate(Request $request)
    {
        $keyword = $request->input('keyword');
        return Notification::orderBy('updated_at', 'DESC')->paginate($this->perPage);
    }

    public function getAllNotifications(Request $request)
    {
        $keyword = $request->input('keyword');
        if (empty($keyword)) {
            return [];
        }
        return Notification::where(function ($query) use ($keyword) {
            $query->where('title', 'like', '%' . $keyword . '%');
            $query->orWhere('content', 'like', '%' . $keyword . '%');
        })->get();
    }
    public function getUserNotifications(Request $request)
    {
        $id = $request->user('admin')->id;
        return Notification::where(function ($query) use ($id) {
            $query->where('to', $id);
            $query->orWhere('type', 'GENERAL');
        })->get();
    }
    public function createNotification(array $details)
    {
        return Notification::create($details);
    }
    public function updateNotification($id, array $details)
    {
        Notification::whereId($id)->update($details);
        return $this->getNotificationById($id);
    }
    public function getNotificationById($id)
    {
        return Notification::findOrFail($id);
    }
    public function deleteNotification($id)
    {
        return Notification::destroy($id);
    }
}
