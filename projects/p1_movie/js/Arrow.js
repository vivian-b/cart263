class Arrow {

  constructor(x, y) {
    this.size = 35;

    this.x = x;
    this.y = y;

    this.arrowLeftX = 0;
    this.arrowLeftY = 385;
    this.arrowLeftY2 = 450;

    this.arrowRightX = width;
    this.arrowRightY = 385;
    this.arrowRightY2 = 450;

    this.arrowTopX = 97;
    this.arrowTopY = 193;

    this.arrowBottomX = 97;
    this.arrowBottomY = height;

  }

  display() {
    fill(40);
    noStroke();
  }

  displayTop() {
    ellipse(this.arrowTopX, this.arrowTopY, this.size);

  }

  displayBot() {
    ellipse(this.arrowBottomX, this.arrowBottomY, this.size);

  }

  displayLeft() {
    ellipse(this.arrowLeftX, this.arrowLeftY, this.size);

  }

  displayRight() {
    ellipse(this.arrowRightX, this.arrowRightY, this.size);
  }

  displayLeft2() {
    ellipse(this.arrowLeftX, this.arrowLeftY2, this.size);

  }

  displayRight2() {
    ellipse(this.arrowRightX, this.arrowRightY2, this.size);
  }

}
