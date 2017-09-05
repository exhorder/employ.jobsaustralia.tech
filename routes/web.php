<?php

use App\Job;

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

/* GET Routes */

Route::get('/', function () {
    return view('index');
});

Route::get('/about', function (){
    return view('about');
})->name('about');

Route::get('/support', function (){
    return view('support');
})->name('support');

Route::get('/contact', function (){
    return view('contact');
})->name('contact');

/* GET Controller Routes */

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/profile', 'ProfileController@index')->name('profile');

Route::get('/profile/edit', 'ProfileController@editIndex')->name('editProfile');

Route::post('/profile/delete', 'ProfileController@delete')->name('delete');

Route::get('/post', 'JobController@index')->name('post');

Route::get('/jobs', 'JobController@display')->name('jobs');

/* POST Controller Routes*/

Route::post('/submit', 'JobController@create')->name('post-submit');

Route::post('/enquire', 'ContactController@send')->name('enquire');

Route::post('/update', 'ProfileController@updateProfile')->name('update');

/* Authentication Routes */

Auth::routes();
