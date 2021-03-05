class Arrow {

  constructor(x, y) {
    this.size = 35;

    this.x = x;
    this.y = y;

    this.arrowLeftX = 25;
    this.arrowLeftY = 385;
    this.arrowLeftY2 = 450;

    this.arrowRightX = width-25;
    this.arrowRightY = 375;
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

    image(arrowImg[1], this.arrowTopX, this.arrowTopY, this.size, this.size)

  }

  displayBot() {
    image(arrowImg[2], this.arrowBottomX, this.arrowBottomY, this.size, this.size)

  }

  displayLeft() {
    push();
    image(arrowImg[3], this.arrowLeftX, this.arrowLeftY, this.size, this.size)
    rotate(PI / 3.0);
pop();
  }

  displayRight() {
    image(arrowImg[0], this.arrowRightX, this.arrowRightY, this.size, this.size)

  }

  displayLeft2() {
    image(arrowImg[3], this.arrowLeftX, this.arrowLeftY2, this.size, this.size)

  }

  displayRight2() {
    image(arrowImg[0], this.arrowRightX, this.arrowRightY2, this.size, this.size)
  }

}
