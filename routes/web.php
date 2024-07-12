<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/**
 * Route to show the homepage
 * 
 * @author AutiCodes
 */
Route::get('/', [HomeController::class, 'index']);

