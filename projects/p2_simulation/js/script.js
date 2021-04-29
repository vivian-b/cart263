
/**
Virtual Blob
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

$(function() {
  $("#tabs").tabs();


    let button = document.getElementById(`btnReset`);

    button.addEventListener(`click`, function(event) {
      $(".dialog").dialog("open");
    });

    $(".dialog").dialog({
      autoOpen: false,
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        Reset: function() {
          $(this).dialog("close");
          restart();
        },
        Cancel: function() {
          $(this).dialog("close");
        }
      }
    });
});


$(document).ready(function(){
   $("#petType").change(function(){
     $("img[name=image-swap]").attr("src",$(this).val());

   });
   // $("#petType")
   //   .selectmenu()
   //   .selectmenu("menuWidget")
   //   .addClass("overflow");

   $("#hide").click(function(){
     $("#poo").toggle();
   });

});


function restart(){
  document.getElementById('progressbar').value = 50
  document.getElementById('progressbar2').value = 50
  document.getElementById('progressbar3').value = 50

  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 255 );
  $( "#blue" ).slider( "value", 255 );
}

function addMood() {
var v2=document.getElementById('progressbar2').value;
document.getElementById("progressbar2").value= v2 + 5;
positiveReact();
}

function decreaseMood() {
var v2=document.getElementById('progressbar2').value;
document.getElementById("progressbar2").value= v2 - 5;
negativeReact();

}

function addHunger() {
var v1=document.getElementById('progressbar').value;
document.getElementById("progressbar").value= v1 + 5;
negativeReact();

}

function decreaseHunger() {
var v1=document.getElementById('progressbar').value;
document.getElementById("progressbar").value= v1 - 5;
positiveReact();

}

function addHealth() {
var v3=document.getElementById('progressbar3').value;
document.getElementById("progressbar3").value= v3 + 5;
negativeReact();

}

function decreaseHealth() {
var v3=document.getElementById('progressbar3').value;
document.getElementById("progressbar3").value= v3 - 5;
positiveReact();

}

function positiveReact(){
  document.getElementById("pet").src = "assets/images/animal1.png";
}

function negativeReact(){
  document.getElementById("pet").src = "assets/images/animal0.png";
}

$( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }

    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 255 );
    $( "#blue" ).slider( "value", 255 );
  } );

  $( function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 250,
      min: 150,
      max: 300,
      slide: function( event, ui ) {
        $( "#amount" ).val(  ui.value );
        document.getElementById("pet").width = ui.value;
        document.getElementById("pet").height = ui.value;
      }
    });
    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );
  } );

  $( function() {
      $( ".drag" ).draggable({
        revert: "invalid",

      });
      $( "#droppable" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .find( "p" )
              $("#poo").hide();
        }

      });
    } );
