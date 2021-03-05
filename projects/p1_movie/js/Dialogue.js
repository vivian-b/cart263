class Dialogue {

  constructor(x, y) {

  }

  display() {
    fill(40);
    noStroke();
  }

  displayDialogue() {

    let characterName = dialogueData.characters[characterNumber].name;
    let dialogue = dialogueData.characters[characterNumber].line[lineNumber];


    if (mouseIsPressed) {
      this.displayDialogueBox();

      push();
      textSize(40);
      fill(255);
      textAlign(LEFT);
      text(`${characterName} :`, 90, 550);
      textSize(30);
      text(`${dialogue}`, 90, 600);
      pop();
    } else {

      this.displaySmallDialogueBox();

      push();
      textSize(18);
      textAlign(LEFT);
      text(`${characterName} :`, updateX, updateY - 70);
      text(`${dialogue}`, updateX, updateY - 50);
      pop();
    }
  }

  displayDialogueBox() {
    push();
    fill(40,36,34);
    rectMode(CENTER);
    rect(width / 2, 700, 900, 450, 30);
    pop();

    imageMode(CENTER)
    image(images[characterNumber], 750, 500)
  }

  displaySmallDialogueBox() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(updateX + 50, updateY - 65, 120, 55, 10);
    pop();
  }
}
