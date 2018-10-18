<?php

namespace App\Http\Controllers; 
use Illuminate\Http\Request;
use App\Country;
use DB;
class AngularjsController extends Controller
{
	public function getData(Request $request)
	{
	    $cdata=Country::select('id','name','code','population')->get(); 
        return response()->json(['status'=>'success','code'=>200,'data'=>$cdata]);
	}
     
}
