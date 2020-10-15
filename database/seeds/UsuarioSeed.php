<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuarioSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Juan',
            'email' => 'daniel.andres.zarate@gmail.com',
            'email_verified_at' => Carbon::now(),
            'password'=>Hash::make('123456789')
        ]);
        DB::table('users')->insert([
            'name' => 'Juan',
            'email' => 'daniel.andres.zarate2@gmail.com',
            'email_verified_at' => Carbon::now(),
            'password'=>Hash::make('123456789')
        ]);
    }
}
