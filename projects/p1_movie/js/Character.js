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
    if ((d < hilda.size / 2 + hilda.size / 2) && (mouseIsPressed)) {
      currentCharacter === `Johanna`;
      lineNumber = 0;
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

    if ((d < hilda.size / 2 + hilda.size / 2) && (mouseIsPressed)) {
      currentCharacter === `Woodman`;
      lineNumber = 1;
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

  outskirtRight() {}

   displayDialogue() {

     // let characterName = dialogueData.characters.chara[characterNumber];
     // let dialogue = dialogueData.characters[characterNumber].line[lineNumber];

     let characterName = dialogueData.characters[characterNumber].name;
     let dialogue = dialogueData.characters[characterNumber].line[lineNumber];


    push();
    textSize(24);
    textAlign(LEFT);
    text(`${characterName} :`, 550, 525);
    text(`${dialogue}`, 550, 555);

    pop();

  }
}
