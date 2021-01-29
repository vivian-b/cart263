class SausageDog extends Animal {

  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.15;
  }

  // update()
  // Calls the super update() and changes angle if found (to rotate!)
  update() {
    super.update();
    if (this.found) {
    state = `gameclear`;
this.happydog();
    }
  }

  happydog(){
    barkSFX.play();
    this.y = height/2;
    this.speed = 6;
    this.vx = 5;
    this.found = false;
  }

reset(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.speed = 2;
  this.vx = 2;
}
  // mousePressed()
  // Checks if this sausage dog was clicked and remembers it was found if so
  mousePressed() {
    if (!this.found && this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}
