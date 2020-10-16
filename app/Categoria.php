<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public function getRouteKeyName()
    {
        return 'slug';
    }

    //Relacion 1:n
    public function establecimientos()
    {
        return $this->hasmany(Establecimiento::class);
    }
}
