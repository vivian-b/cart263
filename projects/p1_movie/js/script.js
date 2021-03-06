"use strict";

/**
Exploring Trolberg
Vivian Bui

description
*/


//user control
let user;
let companion;

// canvas size
let width = 950;
let height = 700;

// JSON file for all written dialogues
let dialogueData;

// objects
let dialogue; // dialogue boxes, text and images
let arrow; // arrows for map indicators
let characters; // all characters control (display, coordinates, interactions)
let area; //control the maps

let state = 'title'; //starting title screen
let titleDisplay; // display title screen

// images
let hildaSprite; //user single
let hildaNalfurSprite; //user with companion1: alfur
let twigSprite; // user's companion2: twig

// image arrays control
// character images
let images = [];
let numImages = 25;

// map images
let map = [];
let numMaps = 4;

// arrow images
let arrowImg = [];
let numArrows = 4;

// selector (inside an array)
let lineNumber = 0;
let characterNumber = 0;
let mapNumber = 0;

// distance variable
let d;
let d2;

/**
Description of preload
*/
function preload() {
  dialogueData = loadJSON('data/characterDialogue.json');

  hildaSprite = loadImage(`assets/images/hilda.png`);
  hildaNalfurSprite = loadImage(`assets/images/hilda2.png`);
twigSprite = loadImage(`assets/images/twig.png`)

  for (let i = 0; i < numArrows; i++) {
    let loadedImages = loadImage(`assets/images/arrow-${i}.png`);
    arrowImg.push(loadedImages);
  }

  for (let i = 0; i < numImages; i++) {
    let loadedImages = loadImage(`assets/images/images-${i}.png`);
    images.push(loadedImages);
  }

  for (let i = 0; i < numMaps; i++) {
    let loadedImages = loadImage(`assets/images/map-${i}.jpg`);
    map.push(loadedImages);
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
  dialogue = new Dialogue();
  titleDisplay = new Titlescreen();
}

/**
Description of draw()
*/
function draw() {
  textFont(`Indie Flower`); //chosen font
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
titleDisplay.display();
  user.displayHilda();
  enterGame();
}

function enterGame() {

  if (keyIsDown(65)) {
    companion = `alfur`;
    state = `outskirt1`;

  } else if (keyIsDown(84)) {
    companion = `twig`;
    state = `outskirt1`;

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
  if (companion === `twig`) {
    user.displayTwig();
    user.displayHilda();

  } else if (companion === `alfur`) {
    user.displayHilda();
  }
  dialogue.displayDialogue();

}

function mouseMoved() {
  user.twigMove();
  user.hildaMove();
}
