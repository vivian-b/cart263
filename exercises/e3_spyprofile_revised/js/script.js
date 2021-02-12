"use strict";

/**
Spy profile
vivian bui

randomized spy profile generator with a password to revisit the profile.
Incorrect password results in automatically reseting the profile.
user can hide and shuffle their information
*/

// spy profile text variables
let spyProfile = {
  name: ``,
  alias: ``,
  secretWeapon: ``,
  password: ``,
};

// spy profile variables (data)
let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

// data taken loaded from JSON
function preload() {

  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);

}

// Prompt upon page landing (log in screen)
function profileCheck() {

  // check existing profile
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));

  // saved data (revisiting)
  if (data !== null) {

    // message prompt
    let password = prompt(`Welcome back Agent, what is the password?  \n[WARNING!] Providing the wrong code will erase all previous data`);

    // on successful login (correct password, matches)
    if (password === data.password) {

      // reload corresponding data
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;

    }

    // on unsuccessful login (incorrect password, does not match)
    if (password !== data.password) {

      // create new profile
      generateSpyProfile();

      // delete previous profile
      localStorage.removeItem('spy-profile-data');
    }
  }

  //  newcommer = new profile
  else {
    generateSpyProfile();
  }
}

// create profile (name input from user and added random variables taken from JSON)
function generateSpyProfile() {

  // prompt message
  spyProfile.name = prompt(`Agent, state your name.`);

  // variable: instrument
  let instrument = random(instrumentData.instruments); //randomized data taken from JSON
  spyProfile.alias = `The ${instrument}`; //display

  // variable: secret weapon
  spyProfile.secretWeapon = random(objectData.objects); //randomized data taken from JSON

  // variable: password
  let card = random(tarotData.tarot_interpretations); //randomized data taken from JSON (+ specific selection)
  spyProfile.password = random(card.keywords);

  // Save the resulting profile to local storage
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

// display profile
function displayProfile() {

  //  text (instructions + information/spy profile content)
  let profile = `** SPY PROFILE, DO NOT DISTRIBUTE. **

  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  SecretWeapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password} `;

  // display
  textFont(`Courier, monospace`);
  textSize(30);
  textAlign(LEFT, TOP);
  fill(255);
  text(profile, 100, 100);
}

// option to hide information
function keyPressed() {
  if (keyCode === 27) {

    // Set all data to REDACTED
    spyProfile.alias = `*******`;
    spyProfile.secretWeapon = `*******`;
    spyProfile.password = `*******`;
  }

// shuffle data

    if (keyCode === 32){
      // variable: instrument
      let instrument = random(instrumentData.instruments); //randomized data taken from JSON
      spyProfile.alias = `The ${instrument}`; //display

      // variable: secret weapon
      spyProfile.secretWeapon = random(objectData.objects); //randomized data taken from JSON

      // variable: password
      let card = random(tarotData.tarot_interpretations); //randomized data taken from JSON (+ specific selection)
      spyProfile.password = random(card.keywords);

      // update information on server
      localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
    }
}



// prompt pop up + canvas size
function setup() {
  createCanvas(850, 600);
  profileCheck();
}

// background + text display(spy card information)
function draw() {
  background(0);
  addedContent();
  displayProfile();
}

// background outline + text instruction display
function addedContent() {

  // white outline decoration
  push();
  noFill();
  strokeWeight(3);
  stroke(255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 800, 500, 20);
  pop();

  // instruction text
  textSize(20);
  text(`press ESC to hide information / press SPACEBAR to shuffle`, 100, 500);
}
