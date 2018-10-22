<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class htmlController extends Controller
{
     
     public function loadPage(Request $request)
     {
     	return File::get(public_path() . '/angular/country.html');
     }
}
