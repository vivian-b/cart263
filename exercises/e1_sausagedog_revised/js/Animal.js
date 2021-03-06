//class defining/displaying the animals
class Animal {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;

    this.vx = 2;
    this.speed = 2;
    this.image = image;

    // mirror effect (flip)
    this.scale = {
    x: 1,
    y: 1,
  };
  }

// call all functions
  update() {
    this.display();
    this.move();
    this.flip();
  }

// display the animal's image + position + effects
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    scale(this.scale.x, this.scale.y);
    image(this.image, 0, 0)
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



// interaction with the positioning of the animal's image
  overlap(x, y) {
    if (x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height / 2) {
      return true; //interaction
    }
    else {
      return false; //no interaction
    }
  }
}
