class User {

  constructor(x, y) {
    this.size = 45;


    this.hilda = {
      x: x,
      y: y,
      width: 45,
      height: 65,
    }

    this.twig = {
      x: x,
      y: y,
      width: 35,
      height: 25,
    }

    this.vx = 1.5;
    this.vy = 1.5;
    this.speed = 2;

  }


displayHilda(){
  push();
  if (companion === `alfur`){
    image(hildaNalfurSprite, this.hilda.x, this.hilda.y, this.hilda.width, this.hilda.height)
} else {
  image(hildaSprite, this.hilda.x, this.hilda.y, this.hilda.width, this.hilda.height)

}
  pop();
}

  displayTwig() {
    push();
    image(twigSprite, this.twig.x, this.twig.y, this.twig.width, this.twig.height)
    pop();
this.wander();
  }


hildaMove(){

  if (mouseX > this.hilda.x) {
    this.vx = this.speed;
  } else if (mouseX < this.hilda.x) {
    this.vx = -this.speed;
  } else if (mouseX < this.hilda.y) {
    this.vy = this.speed;
  } else if (mouseX > this.hilda.y) {
    this.vy = -this.speed;
  }

  let distX = mouseX - this.hilda.x;
  let distY = mouseY - this.hilda.y;

  this.hilda.x += distX / 10;
  this.hilda.y += distY / 10;
}

  twigMove() {
    if (mouseX > this.twig.x) {
      this.vx = this.speed;
    } else if (mouseX < this.twig.x) {
      this.vx = -this.speed;
    } else if (mouseX < this.twig.y) {
      this.vy = this.speed;
    } else if (mouseX > this.twig.y) {
      this.vy = -this.speed;
    }

    let distX = mouseX - this.twig.x;
    let distY = mouseY - this.twig.y;

    this.twig.x += distX / 20;
    this.twig.y += distY / 20;
  }

  wander(){
  let change = random(0, 5);
   if (change < .2) {
     this.vx = random(-this.speed, this.speed);
     this.vy = random(-this.speed, this.speed);
   }

   this.twig.x += this.vx;
   this.twig.y += this.vy;

  }
}
