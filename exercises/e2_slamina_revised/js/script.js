"use strict";

/**
wybmv?
Vivian Bui

Answer a simple yes or no question.

added features: random voice on click, added visuals, added sound fx
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

// set sfx names
let sadSFX;
let happySFX;

// preloading soundFX
function preload() {

  //soundFX
  happySFX = loadSound(`assets/sounds/happy.wav`)
  sadSFX = loadSound(`assets/sounds/sad.wav`)
}

// general text size and position & voice speech set up
function setup() {
  createCanvas(windowWidth, windowHeight)

  voices = responsiveVoice.getVoices();

  textSize(32);
  textAlign(CENTER, CENTER);
}

/**
set up first/
second stage and text positions
*/
function draw() {
  textFont(`Chewy`); //chosen font
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
  textSize(60);
  fill(0);
  text(`...!`, width / 2, 150);

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
  text(currentQuestion, width / 2, height / 5);

  // user instructions
  textSize(20);
  fill(220)
  text(instruction, width / 2, height - 50)
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
    goodEnd();

    happySFX.play();


    // Vocal NO answer = sad reaction + red text
  } else if (currentAnswer === `no`) {
    badEnd();

    sadSFX.play();

  }

  // Vocal ANY answer = confusion (??? text)
  else {
    fill(230, 230, 230);
    text(`???`, width / 2, bottomHeight);
  }


}

// Vocal YES answer = happy reaction + green text
function goodEnd() {
  stopSound();

  background(255, 245, 248); //pink background
  fill(224, 63, 90);
  text(`:D`, width / 2, bottomHeight);

}

// Vocal NO answer = sad reaction + red text
function badEnd() {
  stopSound();

  background(129, 134, 184); //blue background
  fill(81, 96, 181);
  text(`D:`, width / 2, bottomHeight);

}

// trying to stop the loop but can't
function stopSound() {

  if (happySFX.isPlaying()) {
    happySFX.pause();
  }

  if (sadSFX.isPlaying()) {
    sadSFX.pause();
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
