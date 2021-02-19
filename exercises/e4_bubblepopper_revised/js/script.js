"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let video = undefined; //webcam
let handpose = undefined; //handpose model
let predictions = []; //current set of predictions (empty array)
let kitty; // cat
/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);

kitty = new Cat(0,0);
  // access webcam
  video = createCapture(VIDEO);
  video.hide();

  //load handpose model

  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`Model loaded.`);
  });

  // listen for predictions
  handpose.on(`predict`, function(results) {
    // console.log(results);
    predictions = results; //keeping predictions array up to date with results
  });


}


/**
Description of draw()
*/
function draw() {
  background(0);

  // when there is a hand
  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // pin body display
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(40);
    line(baseX, baseY, tipX, tipY);
    pop();

    // pin end display
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(baseX, baseY, 200);
    pop();

    // check cat
    let d = dist(tipX, tipY, cat.x, cat.y);
    if (d < cat.size / 2) {
      cat.x = random(width);
      cat.y = height;
    }
  }
simulation();
}

function simulation(){
  kitty.function();
}
