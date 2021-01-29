"use strict";

/**
Sausage Dog
Vivian Bui

find the sausage dog among all the other animals moving around
>added animal movements
>added title/end screen
>added restart option
>added SFX

*/

// Global constants
const NUM_ANIMAL_IMAGES = 10; // image files from 1-10
const ANIMAL_IMAGE_PREFIX = `assets/images/animal`;
const SAUSAGE_DOG_IMAGE = `assets/images/sausage-dog.png`;
const NUM_ANIMALS = 100; //amount of mobs in the game

// Array of animals
let animalImages = []; //images
let animals = []; //objects

let sausageDogImage; //dog image
let sausageDog; //dog object

// game states
let state = 'title'
let instructions = 'Find the doggo!'
let clear = '* happy dog noises *'
let retry = 'press space to try again!'
let start = 'press space to start'

// sound effects
let barkSFX;


// Loads all the animal images and the sausage dog image
function preload() {

// Loop for each animal image
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`${ANIMAL_IMAGE_PREFIX}${i}.png`); // Load the image with the current number (starting from 0)
    animalImages.push(animalImage); //random image selection (added to the array)
  }

// load the dog image
  sausageDogImage = loadImage(`assets/images/sausage-dog.png`)
}

//  create canvas, sound file, animal objects + dog object
function setup() {
  createCanvas(900, 900);

  barkSFX = loadSound(`assets/sounds/bark.wav`)

  createAnimals();
  createSausageDog();
}

function createAnimals() {
  // Create the specified number of animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    // Create one random animal
    let animal = createRandomAnimal();
    // Add it to the animals array
    animals.push(animal);
  }
}

// Create an animal object (random position & random image)
function createRandomAnimal() {
  let x = random(0, width);
  let y = random(0, height);
  let animalImage = random(animalImages);
  let animal = new Animal(x, y, animalImage);
  return animal;
}

// Creates a sausage dog (random position)
function createSausageDog() {
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}

// game states + main background and main font
function draw() {
  textFont(`Chewy`); //chosen font
  background(122, 77, 34); //brown background color

  //Game states
  if (state === `title`) {
    titlescreen();
  } else if (state === 'gameplay') {
    gameplay();

  } else if (state === `gameclear`) {
    gameclear();

  }

}

// main starting screen: title of game and instructions
function titlescreen() {
  gameplay();
  background(36, 100, 133, 240); //low opacity (see through)

// text styling
  textSize(60);
  textAlign(CENTER);

// instruction/title
  fill(255);
  text(instructions, width / 2, height / 2);

// guide to start the game (press space bar)
  textSize(20);
  text(start, width / 2, height / 2 + 60);

// function to play the game
  loadGame();
}

// screen when game is cleared
function gameclear() {
  background(68, 189, 68); //green BG
  //  text decoration
  textSize(45);
  textAlign(CENTER);
  text(clear, width / 2, height / 2);

  textSize(20);
  text(retry, width / 2, height / 2 + 60);

  // activate sausage dog
  updateSausageDog();

  // function to play the game
  loadGame();
}

// activate mobs (animals) and the target (dog)
function gameplay() {
  updateSausageDog();
  updateAnimals();
}

// activate sausage dog
function updateSausageDog() {
  sausageDog.update();
}

// group of animals
function updateAnimals() {
  // Loop through all animals
  for (let i = 0; i < animals.length; i++) {
    // Update the current animal
    animals[i].update();
  }
}

// interaction between the dog and the user
function mousePressed() {
  sausageDog.mousePressed();
}

// start/restarting the game from the title/clear screen
function loadGame() {
  if ((keyIsDown(32)) && ((state === `gameclear`) || (state === `title`))) {
    state = `gameplay`;
    sausageDog.reset();
  }
}
