class SausageDog extends Animal {

  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.15;
  }

  // Calls the super update() + clear condition
  update() {
    super.update();
    if (this.found) {
      state = `gameclear`;
      this.happydog();
    }
  }

// tweaks to the dog in the clear screen
  happydog() {
    barkSFX.play();
    this.y = height / 2;
    this.x = width / 2
    this.speed = 6;
    this.vx = 5;
    this.found = false;
  }

// reset dog's position when restarting
  reset() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.speed = 2;
    this.vx = 2;
  }
  
  // Checks if this sausage dog was clicked on
  mousePressed() {
    if (!this.found && this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}
