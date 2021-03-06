"use strict";

/**
Exploring Trolberg
Vivian Bui

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
let mapNumber = 0;

let images = [];
let numImages = 25;

let map = [];
let numMaps = 4;

let arrowImg = [];
let numArrows = 4;

let hildaSprite;
let hildaNalfurSprite;
let dialogue;
let twigSprite;

let chat = false;
let nearby = false;

let titleDisplay;

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
