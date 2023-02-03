<?php

namespace App\Invocables;

use App\Models\Notification;

class DeleteReadNotification
{
    public function __invoke()
    {
        Notification::where(function ($query) {
            $query->where('type', 'GENERAL');
            $query->where('created_at', '<=', now()->subWeek());
        })->orWhere(function ($q) {
            $q->where('type', '!=', 'GENERAL');
            $q->where('read', 1);
            $q->where('created_at', '<=', now()->subDays(3));
        })->delete();
    }
}
