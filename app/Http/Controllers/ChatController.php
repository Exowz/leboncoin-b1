<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    /**
     * Fetch all messages.
     */
    public function fetchMessages()
    {
        return Chat::with('user')->get();
    }

    /**
     * Persist message to database and broadcast.
     */
    public function sendMessage(Request $request)
    {
        $message = Chat::create([
            'user_id' => Auth::id(),
            'message' => $request->input('message')
        ]);

        broadcast(new MessageSent($message))->toOthers();

        return ['status' => 'Message Sent!'];
    }
}
