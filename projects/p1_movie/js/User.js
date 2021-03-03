class User {

  constructor(x, y) {
    this.size = 45;

    this.x = x;
    this.y = y;

    this.hildaX = x;
    this.hildaY = y;

    this.vx = 2;
    this.vy = 2;
    this.speed = 5;
  }

displayHilda(){
  push();
  if (companion === `twig`){
  image(hildaSprite, this.hildaX, this.hildaY, this.size, this.size+30)
} else {
  image(hildaNalfurSprite, this.hildaX, this.hildaY, this.size, this.size+30)

}
  pop();
}

  displayTwig() {
    push();
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size/2);
    pop();
this.wander();
  }


hilda(){
  if (mouseX > this.hildaX) {
    this.vx = this.speed;
  } else if (mouseX < this.hildaX) {
    this.vx = -this.speed;
  } else if (mouseX < this.hildaY) {
    this.vy = this.speed;
  } else if (mouseX > this.hildaY) {
    this.vy = -this.speed;
  }

  let distX = mouseX - this.hildaX;
  let distY = mouseY - this.hildaY;

  this.hildaX += distX / 5;
  this.hildaY += distY / 5;
}

  twig() {
    if (mouseX > this.x) {
      this.vx = this.speed;
    } else if (mouseX < this.x) {
      this.vx = -this.speed;
    } else if (mouseX < this.y) {
      this.vy = this.speed;
    } else if (mouseX > this.y) {
      this.vy = -this.speed;
    }

    let distX = mouseX - this.x;
    let distY = mouseY - this.y;

    this.x += distX / 20;
    this.y += distY / 20;
  }

  wander(){
  let change = random(0, 4);
   if (change < .2) {

     this.vx = random(-this.speed/4, this.speed/4);
     this.vy = random(-this.speed/4, this.speed/4);

   }

   this.x += this.vx;
   this.y += this.vy;

  }




}
