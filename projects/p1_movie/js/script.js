"use strict";

/**
Exploring Trolberg
Vivianbui

description
*/

let d;
let d2;

//user control
let hilda;

let width = 1050;
let height = 750;

// map layout
let area;

//elements
let arrow;
let characters;
// let tester;

let state = 'title'

let dialogueData;

let lineNumber = 0;
let characterNumber = 0;

let currentCharacter;
// let randomDialogue = [0,1]

/**
Description of preload
*/
function preload() {
  dialogueData = loadJSON('data/characterDialogue.json');

}


/**
Description of setup
*/
function setup() {
  createCanvas(width, height)
  hilda = new Hilda(width / 2, height / 2);
  area = new Area(width / 2, height / 2);
  arrow = new Arrow(width / 2, height / 2);
  characters = new Character();
  // tester = new Tester(0, 0);

}


/**
Description of draw()
*/
function draw() {
  noCursor();

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
  hilda.display();
  enterGame();
}

function enterGame() {
  if (keyIsDown(32)) {
    state = `city2`
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
  hilda.display();
  hilda.wander();
}

function mouseMoved() {
  hilda.handleInput();
}
