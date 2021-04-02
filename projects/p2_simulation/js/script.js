
/**
Virtual Blob
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";



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
function draw() {}

$(function() {
  $("#tabs").tabs();

  $("#number")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow");

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

  let button = document.getElementById(`btnReset`);

  button.addEventListener(`click`, function(event) {
    $(".dialog").dialog("open");

  });


});

// let happyBar;
// let hungryBar = 50;
//
// $("#eatFood").one("click", function(event)  {
//   happyBar = 20;
// })
//
// $(function() {
//   $("#progressbar1").progressbar({
//     value: happyBar,
//   });
//   $("#progressbar2").progressbar({
//     value: hungryBar,
//   });
// });
//


// $( function() {
//
//     $( "button" ).on( "click", function( event ) {
//
//       var target = $( event.target ),
//         progressbar = $( "#progressbar" );
//       //   progressbarValue = progressbar.find( ".ui-progressbar-value" );
//
//       if ( target.is( "#feedButton" ) ) {
//         progressbar.progressbar( "option","value", value + 10 );
// // value +=1
//       } else if ( target.is( "#playButton" ) ) {
//         progressbar.progressbar( "option", {
//           value: 40
//         });
//
//       } else if ( target.is( "#falseButton" ) ) {
//         progressbar.progressbar( "option", "value", false );
//       }
//     });
//   } );

 //  $( "#feedButton" ).addEventListener(`click`, function(event) {
 //    var v1=document.getElementById('progressbar').value;
 // document.getElementById("progressbar").value= v1 + 10;
 //  });

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

function positiveReact(){
  document.getElementById("pet").src = "assets/images/animal1.png";
}

function negativeReact(){
  document.getElementById("pet").src = "assets/images/animal0.png";
}

// function actions(){
//
//   actionSummary = `test`;
//
//   // Display the action recap in the match history
//     $("#recap").append(`<p>${actionSummary}</p>`);
//     // Adjust the overflow to see what was just added without scrolling
//     updateLog();
// }
//
// function updateLog() {
//   // Scroll to the bottom of the recap div
//   let log = document.getElementById("recap");
//   log.scrollTop = log.scrollHeight;
// }
