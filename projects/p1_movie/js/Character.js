
class Character {

  constructor() {
this.size = 40;

// city characters

// johanna
this.johannaX = 750;
this.johannaY = 700;

// woodman
this.woodmanX = 750;
this.woodmanY = 700;

// aahhaha

  }

  johanna() {
    push();
    fill(255);
    noStroke();
    ellipse(this.johannaX, this.johannaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.johannaX, this.johannaY);
    if ((d < hilda.size / 2 + hilda.size/ 2)  && (mouseIsPressed)) {
      currentDialogue = `johanna`
    }
  }

  woodman() {
    push();
    fill(255);
    noStroke();
    ellipse(this.woodmanX, this.woodmanY, this.size);
    pop();
  }

  cityLeft(){
  }

  cityRight(){
    this.johanna();
  }

  outskirtLeft(){
    this.woodman();
  }

  outskirtRight(){
  }


}
