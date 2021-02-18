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
let bubble = undefined // bubble
/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);

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

  // bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2,
  }
  ''
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
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    // pin end display
    push();
    noFill();
    stroke(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    // check bubble pop
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
    }
  }

  bubble.x += bubble.vx
  bubble.y += bubble.vy

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(0, 0, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}
