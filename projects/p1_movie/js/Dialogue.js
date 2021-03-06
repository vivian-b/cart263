class Dialogue {

  constructor() {
    this.bigTextName = 40;
    this.bigTextSpeech = 30;

    this.smallTextName = 18;
    this.smallTextSpeech = 16;

    this.indent = 90;

    this.image = {
      x: 750,
      y: 500,
    }
  }

  displayDialogue() {

    let characterName = dialogueData.characters[characterNumber].name;
    let dialogue = dialogueData.characters[characterNumber].line[lineNumber];

    if (mouseIsPressed && nearby) {
      this.displayDialogueBox();

      push();
      fill(255);
      textAlign(LEFT);

      textSize(this.bigTextName);
      text(`${characterName}`, this.indent, 550);

      textSize(this.bigTextSpeech);
      text(`${dialogue}`, this.indent, 600);
      pop();
    }
     else if (nearby){
      this.displaySmallDialogueBox();

      push();
      textAlign(LEFT);

      textSize(this.smallTextName);
      text(`${characterName} :`, updateX, updateY - 70);

      textSize(this.smallTextSpeech);
      text(`${dialogue}`, updateX, updateY - 50);
      pop();
   }
    if (!nearby){
      chat = false;
    }
  }

  displayDialogueBox() {
    if (chat){
    push();
    fill(40,36,34);
    rectMode(CENTER);
    rect(width / 2, 700, 900, 450, 30);
    pop();

    imageMode(CENTER)
    image(images[characterNumber], this.image.x, this.image.y)
    }
  }

  displaySmallDialogueBox() {

    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(updateX + 55, updateY - 65, 135, 55, 10);
    pop();

  }
}
