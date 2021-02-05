"use strict";

/**
slaminA
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/


let voices; // To remember the array of voices
let currentVoiceName = ``;


let state = `title`;


/**
Description of preload
*/
function preload() {

}

let currentQuestion = `"Will you be my Valentine?"`;
let currentAnswer = ``;
let instruction = `keep clicking`;

/**
Description of setup
*/

function setup() {
  createCanvas(500, 500)

  voices = responsiveVoice.getVoices();

  textSize(32);
  textAlign(CENTER, CENTER);

}


/**
Description of draw()
*/
function draw() {
  background(0);

  if (state === `title`) {
    titlescreen();
  } else if (state === 'gameplay') {
    gameplay();
  }


  text(currentAnswer, width / 2, height / 2);
  text(currentVoiceName, width / 2, height);


}

function titlescreen() {


// function to play the game
  loadGame();

push();
  textSize(40);
    fill(255, 255, 255);
      text(`...`, width / 2, height/2);

      textSize(20);
      text(`press space to continue`, width / 2, 350)
    pop();
}

function gameplay() {
  if (annyang) {
    let commands = {
      '*answer': myAnswer
    };
    annyang.addCommands(commands);
    annyang.start();
  }

  myResponse();

push();
  fill(255, 255, 255);
    text(currentQuestion, width / 2, height/5);
    textSize(10);
    text(instruction, width / 2, height-50 )
    pop();

}

function mousePressed() {
  let voice = random(voices);
  let currentVoiceName = voice.name;

  responsiveVoice.speak(currentQuestion, currentVoiceName);

}

function myResponse() {
  if (currentAnswer === `yes`) {
    fill(0, 255, 0);

    push();
    fill(255, 255, 255);
      text(`:D`, width / 2, height-150);
    pop();

  } else if(currentAnswer === `no`){
    fill(255, 0, 0);

    push();
    fill(255, 255, 255);
      text(`D:`, width / 2, height-150);
    pop();
  }
  else{
    fill(80, 80, 80);

    push();
    fill(255, 255, 255);
      text(`???`, width / 2, height-100);
    pop();
  }

}

function myAnswer(answer) {
  currentAnswer = answer.toLowerCase();
}

function loadGame() {
  if ((keyIsDown(32)) && (state === `title`)) {
    state = `gameplay`;
  }
}
