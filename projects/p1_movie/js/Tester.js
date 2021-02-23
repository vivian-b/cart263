let vec;


class Tester {

  constructor(x, y, curx, cury) {
    this.size = 40;

    this.x = x;
    this.y = y;
    this.speed = 30;
    this.cury = cury;
    this.curx = curx;

  }

  //  draw() {
  //   // mouseX = mouseX;//library function to find the co-ords of the mouse
  //   // mouseY = mouseY;
  //   vec = this.createVectorDirection(mouseX, mouseY, this.curx, this.cury);//find the vector between the cursor and current text position
  //   this.moveCurrent(this.curx, this.cury, mouseX, mouseY, vec, this.speed); // move the text in the direction of the cursor and apply a speed variable
  //   this.drawCircle(this.curx, this.cury);//curx&cury are updated by moveCurrent then drawn to the canvas
  // }

  drawCircle() {
    fill(255);
    ellipse(this.curx, this.cury, this.size);
  }

  moveCurrent() {
    this.curx += (this.x * 1 / this.speed);
    this.cury += (this.y * 1 / this.speed);
  }

  createVectorDirection() {
    return createVector((mouseX - this.curx), (mouseY - this.cury));
  }




}
