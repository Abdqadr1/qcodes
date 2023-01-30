<?php

namespace App\Http\Service;

use App\Mail\EmailSender;
use Illuminate\Support\Facades\Mail;

class MailService
{
    //
    public static function send($data)
    {
        try {
            Mail::to($data['to'])->send(new EmailSender($data));
        } catch (\Throwable $th) {
            error_log($th->getMessage());
        }
    }
}
