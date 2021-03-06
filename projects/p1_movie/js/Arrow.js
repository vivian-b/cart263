/**
Arrows:
displaying and positioning the different arrow directions found on each map
*/

class Arrow {

  constructor() {
    // general arrow size
    this.size = 35;

    // arrow pointing left positioning
    this.arrowLeftX = 25;
    this.arrowLeftY = 385;
    this.arrowLeftY2 = 450;

    // arrow pointing right positioning
    this.arrowRightX = width - 25;
    this.arrowRightY = 375;
    this.arrowRightY2 = 450;

    // arrow pointing up positioning
    this.arrowTopX = 97;
    this.arrowTopY = 193;

    // arrow pointing down positioning
    this.arrowBottomX = 97;
    this.arrowBottomY = height - 30;

  }

  // displaying up arrow (in the city)
  displayTop() {
    image(arrowImg[1], this.arrowTopX, this.arrowTopY, this.size, this.size)
  }

  // displaying down arrow (on the outskirt)
  displayBot() {
    image(arrowImg[2], this.arrowBottomX, this.arrowBottomY, this.size, this.size)

  }

  // displaying left arrow (in the city)
  displayLeft() {
    image(arrowImg[3], this.arrowLeftX, this.arrowLeftY, this.size, this.size)
  }

  // displaying right arrow (in the city)
  displayRight() {
    image(arrowImg[0], this.arrowRightX, this.arrowRightY, this.size, this.size)

  }

  // displaying second left arrow (on the outskirts)
  displayLeft2() {
    image(arrowImg[3], this.arrowLeftX, this.arrowLeftY2, this.size, this.size)

  }

  // displaying second right arrow (on the outskirts)
  displayRight2() {
    image(arrowImg[0], this.arrowRightX, this.arrowRightY2, this.size, this.size)
  }

}
