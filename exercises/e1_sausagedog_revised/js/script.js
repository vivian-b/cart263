"use strict";

/**
Sausage Dog
Vivian Bui

find the sausage dog among all the other animals moving around
*/

// global constants
const NUM_ANIMAL_IMAGES = 10;
const ANIMAL_IMAGE_PREFIX = `assets/images/animal`;
const SAUSAGE_DOG_IMAGE = `assets/images/sausage-dog.png`;

const NUM_ANIMALS = 105;

// Array of animals
let animalImages = []; //images
let animals = []; //objects

let sausageDogImage;
let sausageDog;

let state = 'title'
let clear = '*happy dog noises*'
let retry = `click anywhere to restart`

let barkSFX;

/**
Description of preload
*/

function preload() {

  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`${ANIMAL_IMAGE_PREFIX}${i}.png`);
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage(`assets/images/sausage-dog.png`)
}


/**
Description of setup
*/
function setup() {
  createCanvas(900, 900);

  barkSFX = loadSound(`assets/sounds/bark.wav`)

  createAnimals();
  createSausageDog();
}

function createAnimals() {
  // Create the correct number of animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    // Create one random animal
    let animal = createRandomAnimal();
    // Add it to the animals array
    animals.push(animal);
  }
}

function createRandomAnimal() {
  let x = random(0, width);
  let y = random(0, height);
  let animalImage = random(animalImages);
  let animal = new Animal(x, y, animalImage);
  return animal;
}

// createSausageDog()
// Creates a sausage dog at a random position
function createSausageDog() {
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}
/**
Description of draw()
*/
function draw() {
  background(30, 30, 0);

  //Game states

  if (state === `title`) {
    titlescreen();
  } else if (state === 'gameplay') {
    gameplay();

  } else if (state === `gameclear`) {
    gameclear();

  }

}

function titlescreen() {
  textSize(40);
  textAlign(CENTER);

  fill(252);
  text('hi', width / 2, height / 2);

  loadGame();
}


function gameplay() {
  updateSausageDog();
  updateAnimals();
}

function gameclear() {

  textSize(45);
  textAlign(CENTER);
  fill(252, 169, 3);
  text(clear, width / 2, height / 2);

  textSize(20);
  text(retry, width / 2, height / 2 - 60);


  updateSausageDog();
  loadGame();
}

function updateSausageDog() {
  sausageDog.update();
}

function updateAnimals() {
  // Loop through all animals
  for (let i = 0; i < animals.length; i++) {
    // Update the current animal
    animals[i].update();
  }
}



function mousePressed() {
  sausageDog.mousePressed();
}

function loadGame() {
  if ((keyIsDown(32)) && ((state === `gameclear`) || (state === `title`))) {
    state = `gameplay`;
    sausageDog.reset();
  }
}
