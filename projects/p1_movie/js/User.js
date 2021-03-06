/**
User: controls and displays of the user's chosen sprite
that follows their cursor + Twig controls (extra sprite that follows user)
*/
class User {

  constructor(x, y) {
    // user's hitbox (for character interaction)
    this.size = 40;

    //general variables
    this.vx = 1.5;
    this.vy = 1.5;
    this.speed = 2;

    // hilda (user)
    this.hilda = {
      x: x,
      y: y,
      width: 45,
      height: 65,
      delay: 10, //stagger user's mouse + character distance
    }

    //twig (follower)
    this.twig = {
      x: x,
      y: y,
      width: 35,
      height: 25,
      delay: 20, //stagger user's mouse + character distance
    }
  }

  // user sprite display
  displayHilda() {
    push();
    // option "A" : image updates to hildaNalfurSprite
    if (companion === `alfur`) {
      image(hildaNalfurSprite, this.hilda.x, this.hilda.y, this.hilda.width, this.hilda.height)
    } else {
      //option "T": image stays the same as title (hildaSprite)
      image(hildaSprite, this.hilda.x, this.hilda.y, this.hilda.width, this.hilda.height)
    }
    pop();
  }

  //twig sprite display
  displayTwig() {
    this.wander(); //additional twig movement (when user is iddle)
    push();
    image(twigSprite, this.twig.x, this.twig.y, this.twig.width, this.twig.height)
    pop();
  }

  // hilda movement: follows the cursor with a bit of delay
  hildaMove() {

    //hilda follows the cursor (both axis: x & y)
    let distX = mouseX - this.hilda.x;
    let distY = mouseY - this.hilda.y;

    //hilda staggers behind the cursor (delay)
    this.hilda.x += distX / this.hilda.delay;
    this.hilda.y += distY / this.hilda.delay;
  }

  // twig movement: follows the cursor with a bit of delay
  twigMove() {

    //twig follows the cursor (both axis: x & y)
    let distX = mouseX - this.twig.x;
    let distY = mouseY - this.twig.y;

    //twig staggers behind the cursor (delay)
    this.twig.x += distX / this.twig.delay;
    this.twig.y += distY / this.twig.delay;
  }

  //twig wandering: when cursor is iddle, twig runs around randomly
  wander() {
    //randomize
    let change = random(0, 5);
    if (change < .2) {
      //random direction
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    //twig movement
    this.twig.x += this.vx;
    this.twig.y += this.vy;
  }
}
