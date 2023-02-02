<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface NotificationRepositoryInterface
{
    public function getAllNotifications(Request $request);
    public function getNotificationsPaginate(Request $request);
    public function getUserNotifications(Request $request);
    public function createNotification(array $details);
    public function updateNotification($id, array $details);
    public function getNotificationById($id);
    public function deleteNotification($id);
    public function readNotification($id);
}
