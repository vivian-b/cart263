"use strict";

/**
Exploring Trolberg
Vivianbui

description
*/

//user control
let hilda;

// map layout
let area;

let state = 'title'

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(750,750)
  hilda = new Hilda(width / 2, height / 2);
  area = new Area(width / 2, height / 2);

}


/**
Description of draw()
*/
function draw() {

  if (state === `title`) {
    titleScreen();
  } else if (state === `city1`) {
    areaA();
  } else if (state === `city2`) {
    areaB();
  } else if (state === `outskirt1`) {
    areaC();
  } else if (state === `outskirt2`) {
    areaD();
}
}

function titleScreen(){
  simulation();
  background(20);

}

function areaA(){
  simulation();
  area.city1();
}

function areaB(){
  simulation();
  area.city2();

}

function areaC(){
  simulation();
  area.outskirt1();

}

function areaD(){
  simulation();
  area.outskirt2();

}

function simulation() {
  hilda.move();
  hilda.handleInput();
}
