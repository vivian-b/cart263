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

$(function() {
  $("#tabs").tabs();

});

$(function() {
  $("#number")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow");
});


$(function() {
  $(".dialog").dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Reset": function() {
        $(this).dialog("close");
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

let hungerBar;

  $(function() {
let feedingFood = document.getElementById(`feedApple`);

feedingFood.addEventListener(`click`, function(event) {
  hungerBar = 20;
});
});

  $(function() {
    $(".progressbar1").progressbar({
      value: hungerBar
    });
    // $(".progressbar2").progressbar({
    //   value: happyBar
    // });
    // $(".progressbar3").progressbar({
    //   value: cleanBar
    // });
  });
  //
  // let happyBar = 50;
  // let cleanBar = 50;

// function actions(){
//
//   actionSummary = `aw`;
//
//   // Display the action recap in the match history
//     $("#recap").append(`<p>${actionSummary}</p>`);
//     // Adjust the overflow to see what was just added without scrolling
//     updateScroll();
// }
//
// function updateScroll() {
//   // Scroll to the bottom of the recap div
//   let log = document.getElementById("recap");
//   log.scrollTop = log.scrollHeight;
// }

let slider = document.getElementById(`slider`);
// Listen for changes to the slider
slider.addEventListener(`change`, function(event) {
  let value = event.target.value;
});
