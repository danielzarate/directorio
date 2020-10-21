<?php

namespace App\Http\Controllers;

use App\Categoria;
use App\Establecimiento;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class EstablecimientoController extends Controller
{


    public function create()
    {
        $categorias=Categoria::all();
        
        return view ('establecimientos.create',compact('categorias'));
    }

    public function store(Request $request)
    {
        // Validacion
        $data=$request->validate([

            'nombre'=>'required',
            'categoria_id'=>'required|exists:App\Categoria,id',
            'imagen_principal'=>'required|image|max:1000',
            'direccion'=>'required',
            'colonia'=>'required',
            'lat'=>'required',
            'lng'=>'required',
            'telefono'=>'required',
            'descripcion'=>'required|min:50',
            'apertura'=>'date_format:H:i',
            'cierre'=>'date_format:H:i|after:apertura',

        ]);
        $ruta_imagen=$request['imagen_principal']->store('principales','public');

        $img=Image::make(public_path("storage/{$ruta_imagen}"))->fit(800,600);
        $img->save();

        $establecimiento = new Establecimiento($data);
        $establecimiento->imagen_principal = $ruta_imagen;
        $establecimiento->user_id = auth()->user()->id;
        $establecimiento->save();

        return back()->with('estado','Tu informacion se almaceno correctamente');


    }

    public function show(Establecimiento $establecimiento)
    {
        //
    }

    public function edit(Establecimiento $establecimiento)
    {
        return "Desde Edit";
    }


    public function update(Request $request, Establecimiento $establecimiento)
    {
        //
    }


    public function destroy(Establecimiento $establecimiento)
    {
        //
    }
}
