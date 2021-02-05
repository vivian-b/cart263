"use strict";

/**
slaminA
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/
const animals =

    [    ];

/**
Description of preload
*/
function preload() {

}

let currentAnimal =``;
let currentAnswer = ``;
/**
Description of setup
*/

function setup() {
  createCanvas(500, 500)

  if (annyang) {
  let commands = {
    'I think it is *animal': guessAnimal
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

  if (currentAnswer === currentAnimal){
    fill(0,255,0);
  }
  else{
    fill(255,0,0);
  }


text(currentAnswer, width / 2, height / 2);
}

function mousePressed(){
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);
}

function guessAnimal(animal){

  currentAnswer = animal.toLowerCase();

}
/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}
