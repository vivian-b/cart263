"use strict";

/**
Exploring Trolberg
Vivian Bui

Inspired by the universe of the franchise "Hilda", a British-Canadian Netflix Original animated television series based on
an award-winning British graphic novel series, and a book series created by Luke Pearson.

This simulation lets the user explore a bit of the universe the main character lives in.
The user can interact with creatures and characters that appear in the series by clicking on them.
The user can "move" around the canvas and explore 4 different places (two on the outskirts and two inside the city areas)

(All illustrations and graphics we're self drawn)
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
preloading all assets:
- JSON: all character names and dialogues
- sprites: images displaying/controlled by the user (hilda,twig)
- arrows [array]: images of different arrow direction
- characters [array]: listed all character images
- maps [array]: images of 4 different areas
*/
function preload() {
  dialogueData = loadJSON('data/characterDialogue.json'); //dialogues

//images of sprites (user)
  hildaSprite = loadImage(`assets/images/hilda.png`);
  hildaNalfurSprite = loadImage(`assets/images/hilda2.png`);
twigSprite = loadImage(`assets/images/twig.png`)

// arrow images [in array]
  for (let i = 0; i < numArrows; i++) {
    let loadedImages = loadImage(`assets/images/arrow-${i}.png`);
    arrowImg.push(loadedImages);
  }

// character images [in array]
  for (let i = 0; i < numImages; i++) {
    let loadedImages = loadImage(`assets/images/images-${i}.png`);
    images.push(loadedImages);
  }

// area images [in array]
  for (let i = 0; i < numMaps; i++) {
    let loadedImages = loadImage(`assets/images/map-${i}.jpg`);
    map.push(loadedImages);
  }
}

/**
Description of setup
- Canvas size
-all object files: user, areas, arrows, characters, dialogues(JSON), title screen
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
- chosen font
- separating different stages/areas: title > outskirt 1,2 & city 1,2
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

// starting screen (landing page) background + start control
function titleScreen() {
  titleDisplay.display(); //display + text
  user.displayHilda(); // user control
  enterGame(); // start of game control
}

// start of game control: user presses key (A or T) to enter the actual simulation
function enterGame() {

//option A: user image updated with alfur, start in first map
  if (keyIsDown(65)) { //user press "a"
    companion = `alfur`;
    state = `outskirt1`;

//option T: user image + twig object, start in first map
} else if (keyIsDown(84)) { // user press "T"
    companion = `twig`;
    state = `outskirt1`;

  }
}

//different areas/maps layout + general control
// first map: outskirt1
function areaA() {
  area.outskirt1();
  simulation();
}

// second map: outskirt2
function areaB() {
  area.outskirt2();
  simulation();
}

//third map: city2
function areaC() {
  area.city1();
  simulation();
}

//fourth map: city 1
function areaD() {
  area.city2();
  simulation();
}

//program simulation: different user display + dialogue display
function simulation() {
  // if option T: hilda normal sprite + twig sprite
  if (companion === `twig`) {
    user.displayTwig();
    user.displayHilda();

// if option A: updated hilda sprite
  } else if (companion === `alfur`) {
    user.displayHilda();
  }
// dialogue that appears at the front
  dialogue.displayDialogue();
}

// user control
function mouseMoved() {
  user.twigMove();
  user.hildaMove();
}
