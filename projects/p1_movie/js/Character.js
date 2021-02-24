// updated character coordinates
let updateX;
let updateY;

class Character {

  constructor() {
    this.size = 40;

    // city characters

    // johanna
    this.johannaX = 750;
    this.johannaY = 700;

    // woodman
    this.woodmanX = 500;
    this.woodmanY = 500;

    // aahhaha

  }

  johanna() {
    push();
    fill(255);
    noStroke();
    ellipse(this.johannaX, this.johannaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.johannaX, this.johannaY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.johannaX;
      updateY = this.johannaY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }
      characterNumber = 0;
      this.displayDialogue();


  }
}

  woodman() {
    push();
    fill(255);
    noStroke();
    ellipse(this.woodmanX, this.woodmanY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.woodmanX, this.woodmanY);

    if (d < hilda.size / 2 + hilda.size / 2) {
      updateX = this.woodmanX;
      updateY = this.woodmanY;
      lineNumber = 1;
      if (mouseIsPressed) {
        lineNumber = 0;
      }
      characterNumber = 1;

      this.displayDialogue();

    }

  }

  cityLeft() {}

  cityRight() {
    this.johanna();
  }

  outskirtLeft() {
    this.woodman();
  }

  outskirtRight() {

  }

  displayDialogue() {

    let characterName = dialogueData.characters[characterNumber].name;
    let dialogue = dialogueData.characters[characterNumber].line[lineNumber];



    if (mouseIsPressed){
      push();
      textSize(40);
      textAlign(LEFT);
      text(`${characterName} :`, 100, 580);
      text(`${dialogue}`, 100, 620);
      pop();
    }
    else{
      push();
      textSize(24);
      textAlign(LEFT);
      text(`${characterName} :`, updateX, updateY - 70);
      text(`${dialogue}`, updateX, updateY - 50);
      pop();
    }

  }




}
