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
      textSize(35);
      fill(200);
      textAlign(LEFT);
      text(`${characterName} :`, 100, 550);
      textSize(25);
      text(`${dialogue}`, 100, 600);
      pop();
    } else {
      push();
      textSize(15);
      textAlign(LEFT);
      text(`${characterName} :`, updateX, updateY - 70);
      text(`${dialogue}`, updateX, updateY - 50);
      pop();
    }
  }

  displayDialogueBox() {
    push();
    fill(0);
    rectMode(CENTER);
    rect(width / 2, 700, 900, 450, 30);
    pop();

    imageMode(CENTER)
    image(images[characterNumber], 750, 500)
  }


}
