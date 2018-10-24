<?php

namespace App\Http\Controllers; 
use Illuminate\Http\Request;
use App\Country;
use DB;
class AngularjsController extends Controller
{
	public function getData(Request $request)
	{
	    $cdata=Country::select('id','name','code','population')->where('status',1)->get(); 
        return response()->json(['status'=>'success','code'=>200,'data'=>$cdata]);
	}

	public function deleteData(Request $request)
	{   
	     echo $request->delid;
		$status=Country::where('id',$request->delid)->update(['status'=>0]);
		return response()->json(['status'=>'success','code'=>200,]);

		
	}
     
}
