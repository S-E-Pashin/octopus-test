/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
!function() {
/*!****************************************!*\
  !*** ./source/js/checking-checkbox.js ***!
  \****************************************/


$(document).ready(function () {
  $('#form__checkbox-id').on('click', function () {
    if ( $(this).is(':checked') ) {
      $('.form__button-submit').attr('disabled', false);
      $('.form__field input, .form textarea').attr('disabled', false);
    } else {
      $('.form__button-submit').attr('disabled', true);
      $('.form__field input, .form textarea').attr('disabled', true);
    }
  });

  $('#popup__checkbox-id').on('click', function () {
    if ( $(this).is(':checked') ) {
      $('.popup__button-submit').attr('disabled', false);
      $('.popup__field input, .form textarea').attr('disabled', false);
    } else {
      $('.popup__button-submit').attr('disabled', true);
      $('.popup__field input, .popup__field textarea').attr('disabled', true);
    }
  });
});

}();
!function() {
/*!*************************************!*\
  !*** ./source/js/circle-tracker.js ***!
  \*************************************/


$(document).mousemove(function(e) {
  var pointer = $('<div class="circle">').attr({'src':'pointer.png'});
  $(document.body).append(pointer);

  pointer.css({
    'position':'absolute',
    top: e.pageY -49 ,
    left: e.pageX -49
  }).fadeOut(1500);
  setTimeout(function() { $("div.circle").remove(); }, 2500);
});

}();
!function() {
/*!******************************!*\
  !*** ./source/js/scripts.js ***!
  \******************************/


var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

}();
/******/ })()
;