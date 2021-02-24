let min = 0;
let mid = height/2;
let side  = height;

class Arrow {

  constructor(x, y) {
    this.size = 35;

    this.x = x;
    this.y = y;

    this.min = min;
    this.mid = mid;
    this.max = width;
    this.side = side;

  }

  display() {
    fill(40);
    noStroke();
  }

  displayTop() {
    ellipse(this.mid, this.min, this.size);

  }

  displayBot() {
    ellipse(this.mid, this.side, this.size);

  }

  displayLeft() {
    ellipse(this.min, this.mid, this.size);

  }

  displayRight() {
    ellipse(this.max, this.mid, this.size);

  }


}
