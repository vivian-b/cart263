"use strict";

/**
Virtual Blob
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(400, 400);
}


/**
Description of draw()
*/
function draw() {
background(255)
  }

function petDisplay(){
rect(20)
}

$( function() {
    $( "#tabs" ).tabs();
  } );

  $( function() {
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
  } );

  $( function() {
      $( ".progressbar1" ).progressbar({
        value: 37
      });
      $( ".progressbar2" ).progressbar({
        value: 47
      });
      $( ".progressbar3" ).progressbar({
        value: 67
      });
    } );

    $( function() {
  $( "#slider" ).slider();
} );

let button = document.getElementById(`btnReset`);

$( function() {
   $( ".dialog" ).dialog({
     autoOpen: false,
     resizable: false,
     height: "auto",
     width: 400,
     modal: true,
     buttons: {
       "Reset": function() {
         $( this ).dialog( "close" );
       },
       Cancel: function() {
         $( this ).dialog( "close" );
       }
     }
   });

   $( "#btnReset" ).on( "click", function() {
     $( ".dialog" ).dialog( "open" );

   });
 } );
