"use strict";

/**
Exploring Trolberg
Vivianbui

description
*/

let d;
let d2;

let dialogues = []; //array of dialogues

let characterDialogue;

//user control
let hilda;

let width = 1050;
let height = 750;

// map layout
let area;

//elements
let arrow;
let characters;
let tester;

let state = 'title'

let currentCharacter;

/**
Description of preload
*/
function preload() {
  characterDialogue = loadJSON('data/characterDialogue.json');

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
  tester = new Tester(0, 0);

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

function createDialogue(character, sentence) {
  let dialogue = {
    character: character,
    sentence: sentence,
  };

  return dialogue;
}


function updateCharacterDialogue() {
  if (currentCharacter === `Johanna`) {
    generateDialogue(characterDialogue.johanna_dialogue);
  }
}


function generateDialogue() {

    let dialogue = createDialogue(characterDialogue.character, characterDialogue.sentence);
    dialogues.push(dialogue);

  displayDialogue();

}


function displayDialogue() {

  //dialoguebox
  push();
  fill(0);
  rect(200, 400);
  pop();

  //display current character dialogue
  push();
  textSize(24);
  textAlign(LEFT);
  text(`${characterDialogue.sentence}`, 550, 550); //dialogue
  text(`${characterDialogue.character} :`, 550, 525);
  pop();

}
