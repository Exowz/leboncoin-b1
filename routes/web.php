<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ChatController;

Route::middleware('auth')->group(function () {
    Route::get('/', [HomeController::class, 'index']) -> name('home.index');
    Route::get('/users/{id}', [UserController::class, 'show'])->name('users.show');
    Route::get('/users', [UserController::class, 'update'])->name('users.update');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::delete('/posts/{id}', [PostController::class, 'destroy'])->name('posts.destroy');

    Route::post('/likes', [LikeController::class, 'store'])->name('likes.store');
    Route::delete('/likes/{id}', [LikeController::class, 'destroy'])->name('likes.destroy');

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::post('/send-message', [ChatController::class, 'sendMessage'])->middleware('auth');
    Route::get('/chat', [ChatController::class, 'index'])->name('chat.index');

});

require __DIR__.'/auth.php';
