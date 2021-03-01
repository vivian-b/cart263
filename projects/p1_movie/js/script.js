"use strict";

/**
Exploring Trolberg
Vivianbui

description
*/

let d;
let d2;

//user control
let user;
let companion;

let width = 950;
let height = 700;

// map layout
let area;

//elements
let arrow;
let characters;
// let tester;

let state = 'title';

let dialogueData;

let lineNumber = 0;
let characterNumber = 0;


let images = [];
let sprites = [];
let numImages = 3;

/**
Description of preload
*/
function preload() {
  dialogueData = loadJSON('data/characterDialogue.json');


for (let i=0; i < numImages; i++){
  let loadedImages = loadImage(`assets/images/clown-${i}.png`);
  images.push(loadedImages);
}

for (let i=0; i < numImages; i++){
  let loadedImages = loadImage(`assets/images/clown-${i}.png`);
  sprites.push(loadedImages);
}

}


/**
Description of setup
*/
function setup() {
  createCanvas(width, height)
  user = new User(width / 2, height / 2);
  area = new Area(width / 2, height / 2);
  arrow = new Arrow(width / 2, height / 2);
  characters = new Character();

}


/**
Description of draw()
*/
function draw() {
  noCursor();
  imageMode(CENTER)


  if (state === `title`) {
    titleScreen();
  } else if (state === `outskirt1`) {
    areaA();
  } else if (state === `outskirt2`) {
    areaB();
  } else if (state === `city1`) {
    areaC();
  } else if (state === `city2`) {
    areaD();
  }
}

function titleScreen() {
  background(20);
  user.displayHilda();
  enterGame();
}

function enterGame() {
  if (keyIsDown(32)) {
    state = `city2`;
    companion = `alfur`;
  } else if (keyIsDown(13)){
    state = `city2`;
companion = `twig`;
  }
}

function areaA() {
  area.outskirt1();
  simulation();

}

function areaB() {
  area.outskirt2();
  simulation();

}

function areaC() {
  area.city1();
  simulation();

}

function areaD() {
  area.city2();
  simulation();

}

function simulation() {
  if (companion === `twig`){
  user.displayTwig();
  user.wander();
} else if (companion === `alfur`){
  user.displayAlfur();
}
}

function mouseMoved() {
  user.twig();

}
