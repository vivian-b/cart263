"use strict";

/**
Spy profile
vivian bui

randomized spy profile generator
*/

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`
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

    let password = prompt(`Agent, what is the password?`);
    if (password === data.password) {

      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;

    }
    if (password !== data.password) {

      localStorage.removeItem('spy-profile-data');

      generateSpyProfile('rebooting');
    } }
    else {
      generateSpyProfile('AGENT. STATE YOUR NAME.');

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

  push();
  textFont(`Courier, monospace`);
  textSize(30);
  textAlign(LEFT, TOP);
  fill(255);
  text(profile, 100, 100);

  pop();

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
  givenProfile();


}

function keyPressed() {
  if (keyCode === 27) {
    localStorage.removeItem(`spy-profile-data`);
  }
}
