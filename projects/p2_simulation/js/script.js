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

let happyBar;
let hungryBar = 50;


$("#playingToy").one("click", (event) => {
  happyBar += 20;
})

$(function() {
  $(".progressbar1").progressbar({
    value: happyBar,
  });
  $(".progressbar2").progressbar({
    value: hungryBar,
  });

});

// let hungry = 4;
//
// $("#playingToy").one("click", (event) => {
//   hungry += 20;
// })
//
// $(function() {
//   $(".progressbar2").progressbar({
//     value: hungry,
//   });
// });

// let slider = document.getElementById(`slider`);
// // Listen for changes to the slider
// slider.addEventListener(`change`, function(event) {
//   let value = event.target.value;
// });
