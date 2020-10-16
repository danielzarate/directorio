<?php

namespace App\Http\Controllers;

use App\Categoria;
use App\Establecimiento;
use Illuminate\Http\Request;

class APIController extends Controller
{
    public function categorias()
    {
        $categorias = Categoria::all();
        return response()->json($categorias);
        
    }

    
    //Muestra los establecimientos de la categoria

    public function categoria(Categoria $categoria)
    {
        $establecimientos = Establecimiento::where('categoria_id',$categoria->id)->with('categoria')->get();

        return response()->json($establecimientos);
    }
}
