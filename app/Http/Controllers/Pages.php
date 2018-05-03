<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class Pages extends Controller {
    
    public function index() {
        return view('welcome');
    }
    
    public function contact() {
        return view('contact');
    }
    
}
