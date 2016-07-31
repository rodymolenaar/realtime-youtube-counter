var elixir = require('laravel-elixir');

require('laravel-elixir-browserify-official');
require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Config
 |--------------------------------------------------------------------------
 */

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

/*
 |--------------------------------------------------------------------------
 | Asset Management
 |--------------------------------------------------------------------------
 */

elixir(function(mix) {
    mix.sass('app.scss')
       .browserify('app.js');
});
