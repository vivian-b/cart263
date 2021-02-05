"use strict";

/**
wybmv?
Vivian Bui

Answer a simple yes or no question.
*/

// bot voices set up
let voices;
let currentVoiceName = ``;

// starting screen
let state = `title`;

// text strings
let currentQuestion = `"Will you be my Valentine?"`;
let currentAnswer = ``;
let instruction = `keep clicking`;
let intro = `(click anywhere)`;

// set variable
let bottomHeight = 350;

// general text size and position & voice speech set up
function setup() {
  createCanvas(500, 500)

  voices = responsiveVoice.getVoices();

  textSize(32);
  textAlign(CENTER, CENTER);
}

/**
set up first/
second stage and text positions

*/
function draw() {
  background(255);

  if (state === `title`) {
    titlescreen();
  } else if (state === 'gameplay') {
    gameplay();
  }

  text(currentAnswer, width / 2, height / 2);
  text(currentVoiceName, width / 2, height);

}

// start of program (landing page)
function titlescreen() {

// function to play the game
  loadGame();

push();
// intro to the program
  textSize(40);
    fill(0);
      text(`...!`, width / 2, height/2);

// instructions
      textSize(20);
      text(`press space to continue`, width / 2, 380)
      text(intro, width / 2, bottomHeight)

    pop();
}

// function of the program
function gameplay() {
  myResponse(); //vocal to text

// vocal program
  if (annyang) {
    let commands = {
      '*answer': myAnswer //register any vocal words
    };
    annyang.addCommands(commands);
    annyang.start();
  }

push();
// bot question
  fill(0);
    text(currentQuestion, width / 2, height/5);

// user instructions
  textSize(10);
  fill(220)
    text(instruction, width / 2, height-50 )
  pop();
}

// Mouse Pressed to generate voices (randomized every click)
function mousePressed() {

   //randomized speaker name/voice
  let voice = random(voices);
  let currentVoiceName = voice.name;
  responsiveVoice.speak(currentQuestion, currentVoiceName);
}

// user's answer (vocal)
function myResponse() {

  // Vocal YES answer = happy reaction + green text
  if (currentAnswer === `yes`) {
    fill(0, 255, 0);
    text(`:D`, width / 2, bottomHeight);

// Vocal NO answer = sad reaction + red text
  } else if(currentAnswer === `no`){
    fill(255, 0, 0);
      text(`D:`, width / 2, bottomHeight);
  }

  // Vocal ANY answer = confusion (??? text)
  else{
    fill(230, 230, 230);
      text(`???`, width / 2, bottomHeight);
  }
}

// translate vocal to text
function myAnswer(answer) {
  currentAnswer = answer.toLowerCase();
}

// title state shift
function loadGame() {
  if ((keyIsDown(32)) && (state === `title`)) {
    state = `gameplay`;
  }
}
