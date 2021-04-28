
/**
Virtual Blob
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

$("#tabs").tabs();

$("#number")
  .selectmenu()
  .selectmenu("menuWidget")
  .addClass("overflow");



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

function restart(){
  document.getElementById('progressbar').value = 50
  document.getElementById('progressbar2').value = 50
  document.getElementById('progressbar3').value = 50
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
