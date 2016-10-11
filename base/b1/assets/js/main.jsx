'use strict';

import 'jquery';

import '../scss/style.scss';

import 'bootstrap-sass/assets/javascripts/bootstrap/tooltip';

console.log('Init main.js');

$(document).ready(function(){
   console.log('Init with jQuery');

   $('[data-toggle="tooltip"]').tooltip();
});