<?php

namespace App\Invocables;

use App\Models\Notification;

class DeleteReadNotification
{
    public function __invoke()
    {
        Notification::where('type', 'GENERAL')->delete();
    }
}
