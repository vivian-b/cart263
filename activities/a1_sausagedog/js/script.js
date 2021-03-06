"use strict";

/**
Sausage Dog
Vivian Bui

find the sausage dog picture
*/

// global constants
const NUM_ANIMAL_IMAGES = 10;
const ANIMAL_IMAGE_PREFIX = `assets/images/animal`;
const SAUSAGE_DOG_IMAGE = `assets/images/sausage-dog.png`;

const NUM_ANIMALS = 50;

// Array of animals
let animalImages = []; //images
let animals = []; //objects

let sausageDogImage;
let sausageDog;

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
background(30,30,0);

updateAnimals();
updateSausageDog();
}

function updateAnimals() {
  // Loop through all animals
  for (let i = 0; i < animals.length; i++) {
    // Update the current animal
    animals[i].update();
  }
}

function updateSausageDog() {
  sausageDog.update();
}

function mousePressed(){
  sausageDog.mousePressed();
}
