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
tarotData = loadJSON (`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
instrumentData = loadJSON (`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
objectData = loadJSON (`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);

}


/**
Description of setup
*/
function setup(){
createCanvas(windowWidth, windowHeight);

let data = JSON.parse(localStorage.getItem(`spy-profile-data`));

// saved data (revisiting)
if (data !== null){
  let password = prompt(`Agent, what is the password?`)

  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.secretWeapon = data.secretWeapon;
  spyProfile.password = data.password;
}
// no saved data (create new profile)
else{
  generateSpyProfile();
}
}


function generateSpyProfile(){
  spyProfile.name = prompt(`Agent, state your name.`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));

}
/**
Description of draw()
*/
function draw() {
background(255);

let profile = `** SPY PROFILE, DO NOT DISTRIBUTE. **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
SecretWeapon: ${spyProfile.secretWeapon}
Password:${spyProfile.password} `;

push();
textFont(`Courier, monospace`);
textSize(30);
textAlign(LEFT, TOP);
fill(0);
text(profile, 100, 100);

pop();
}
