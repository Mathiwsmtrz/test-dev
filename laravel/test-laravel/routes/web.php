<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/photos/{photo?}', function ($photo='numero') {
//     return 'Estas en la galeria de fotos '.$photo;
// });


// Route::get('/numberosoly/{number}', function ($number) {
//     return 'Numero : '.$number;
// })->where('number','[0-9]+');

Route::view('fotos','photos')->name('photos');
Route::view('historias','historys')->name('historys');
