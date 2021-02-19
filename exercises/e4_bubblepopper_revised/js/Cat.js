//class defining/displaying the animals
class Cat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 200;

    this.vx = 2;
    this.speed = 2;

    // mirror effect (flip)
    this.scale = {
    x: 1,
    y: 1,
  };
  }

// call all functions
  function() {
    this.display();
    this.move();
    this.flip();
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale.x, this.scale.y);
    fill(0, 0, 200);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }

// animal's movement
  move(){
    let change = random(0, 9);
    if (change < .1) {

      // anima Randomized Direction
      this.vx = random(-this.speed, this.speed);
    }

    // anima Movement
    this.x += this.vx;

    //  Constraint movement within canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  flip(){
    if (this.vx >= 0) {
     this.scale.x = 1;
   }

   else if (this.vx < 0) {
     this.scale.x = -1;

   }
  }

}
