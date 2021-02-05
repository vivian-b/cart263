"use strict";

/**
slaminA
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/
let agree =

    [
      "yes",
    ];

let positive = false;
/**
Description of preload
*/
function preload() {

}

let currentQuestion =`Will you be my valentine`;
let currentAnswer = ``;

/**
Description of setup
*/

function setup() {
  createCanvas(500, 500)

  if (annyang) {
  let commands = {
    'My answer is *agree': myAnswer
  };
  annyang.addCommands(commands);
  annyang.start();

  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);

}
}


/**
Description of draw()
*/
function draw() {
  background(0);

  if (currentAnswer === `yes`){
    fill(0,255,0);
  }
  else{
    fill(255,0,0);
  }

text(currentAnswer, width / 2, height / 2);
fill(255,200,200);
text(currentQuestion, width / 2, height / 3);

}

function mousePressed(){
 responsiveVoice.speak(currentQuestion, "UK English Male", {
  pitch: 2,
  rate: 1.5,
  volume: 1
});
}

function myAnswer(agree){

  currentAnswer = agree.toLowerCase();

}
