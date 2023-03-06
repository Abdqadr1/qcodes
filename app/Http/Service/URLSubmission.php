<?php

namespace App\Http\Service;

use Illuminate\Support\Facades\Http;

class URLSubmission
{
    //
    public static function bingSubmit($url)
    {
        $response = Http::post(
            'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=' . env('BING_API_KEY', ''),
            [
                "siteUrl" => "https://qluecodes.com",
                "url" => $url
            ]
        );
        if ($response->successful()) {
            error_log($response->body());
        }

        if ($response->failed()) {
            error_log("Error submitting url: " . $response->body());
        }
    }
}
