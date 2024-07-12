<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class Controller
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
        return 'boobs';
    }
}
