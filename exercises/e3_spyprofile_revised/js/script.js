"use strict";

/**
Spy profile
vivian bui

randomized spy profile generator
*/

let spyProfile = {
  name: ``,
  alias: ``,
  secretWeapon: ``,
  password: ``,
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

/**
Description of preload
*/
function preload() {

  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);

}


function profileCheck() {

  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));

  // saved data (revisiting)
  if (data !== null) {

    let password = prompt(`Welcome back Agent, what is the password?  \n[WARNING!] Providing the wrong code will erase all previous data`);
    if (password === data.password) {

      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;

    }
    if (password !== data.password) {

      generateSpyProfile('rebooting');
      localStorage.removeItem('spy-profile-data');

  }}
    else {
      generateSpyProfile();
    }
}


function generateSpyProfile() {
  spyProfile.name = prompt(`Agent, state your name.`);

  let instrument = random(instrumentData.instruments);

  spyProfile.alias = `The ${instrument}`;

  spyProfile.secretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations);

  spyProfile.password = random(card.keywords);

  // Save the resulting profile to local storage
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));

}

function givenProfile() {

  let profile = `** SPY PROFILE, DO NOT DISTRIBUTE. **

  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  SecretWeapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password} `;

  textFont(`Courier, monospace`);
  textSize(30);
  textAlign(LEFT, TOP);
  fill(255);
  text(profile, 100, 100);

}

function keyPressed() {
  if (keyCode === 27) {

    // Set all data to REDACTED
    spyProfile.alias = `*******`;
    spyProfile.secretWeapon = `*******`;
    spyProfile.password = `*******`;
  }

}


/**
Description of setup
*/
function setup() {
  createCanvas(850, 600);

  profileCheck();

}

/**
Description of draw()
*/
function draw() {
  background(0);
  backgroundOutline();
  givenProfile();
instructions();
}

function instructions() {
  textSize(20);
  text(`press ESC to hide information`, 100, 500);
}

function backgroundOutline(){
  push();
noFill();
strokeWeight(3);
stroke(255);
  rectMode(CENTER);
  rect(width/2, height/2, 800, 500, 20);
  pop();
}
