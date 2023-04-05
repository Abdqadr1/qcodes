<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use App\Http\Service\MailService;
use App\Models\Newsletter;

class NewsletterController extends Controller
{
    private string $fromEmail = "info@qluecodes.com";
    private $addressPerPage = 20;

    public function newsletterSignup(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:newsletter',
            'name' => 'required|max:60',
        ]);
        $token = Str::random(100);

        $newsletter = Newsletter::create([
            'name' => $request->name,
            'email' => $request->email,
            'token' => $token,
        ]);

        if ($newsletter) {
            MailService::send([
                'first_name' => $newsletter->name,
                'title' => 'Subscribe',
                'subject' => env('APP_NAME') . " Newsletter Confirmation Email",
                'from' => $this->fromEmail,
                'view' => "mail.newsletter.confirm",
                'to' => $newsletter->email,
                'link' => URL::to('/newsletter/subscribe?token=' .  $newsletter->token . '&email=' . $newsletter->email),
            ]);

            return redirect(route('newsletter-confirm'));
        }
    }

    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255|exists:newsletter',
            'token' => 'required|size:100',
        ]);

        $newsletter = Newsletter::where(function ($q) use ($request) {
            $q->where('email', $request->email);
            $q->where('token', $request->token);
        })->first();

        if ($newsletter) {
            if ($newsletter->confirmed) {
                abort(403, 'Email has already been verified');
            }

            $newsletter->confirmed = true;
            $newsletter->save();

            return redirect(route('newsletter-subscribe'));
        }

        abort(404);
    }


    public function unsubscribe(Request $request)
    {
        if ($request->has('email') && $request->has('token')) {

            $newsletter = Newsletter::where(function ($q) use ($request) {
                $q->where('email', $request->email);
                $q->where('token', $request->token);
            })->first();

            if ($newsletter) {
                $newsletter->confirmed = 0;
                $newsletter->save();

                return redirect(route('newsletter-unsubscribe'));
            }

            abort(404);
        }
        abort(400);
    }

    public function getMailList(Request $request)
    {

        $keyword = $request->input('keyword');
        $newsletter = Newsletter::orderBy('updated_at', 'DESC');
        if ($keyword) {
            $newsletter->where(function ($query) use ($keyword) {
                $query->where('name', 'like', '%' . $keyword . '%');
                $query->orWhere('email', 'like', '%' . $keyword . '%');
            });
        }

        return  $newsletter->where("confirmed", true)->paginate($this->addressPerPage);
    }

    public function deleteMailAddress(Request $request)
    {
        $id = $request->route('id');
        return  Newsletter::findOrFail($id)->delete();
    }
}
