class Animal {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;

    this.vx = 2;
    this.speed = 2;
    this.image = image;

    this.angle = 0;
    this.scale = {
    x: 1,
    y: 1,
  };
  }

  update() {
    this.display();
    this.move();
    this.flip();
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.scale.x, this.scale.y);
    image(this.image, 0, 0)
    pop();
  }

  overlap(x, y) {
    if (x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height / 2) {
      return true;
    }
    else {
      return false
    }
  }

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
