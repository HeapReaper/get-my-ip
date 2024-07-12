<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Shows the homepage
     * 
     * @author AutiCodes
     * @param Request $request
     * @return 
     */
    public function index(Request $request) 
    {
        // Get client WAN ip
        $ip = file_get_contents('https://api.ipify.org');

        return view('home', ['ip' => $ip]);
    }
}
