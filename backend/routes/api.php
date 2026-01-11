<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

// API routes for Todo
Route::apiResource('todos', TodoController::class);
