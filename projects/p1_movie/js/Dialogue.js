/**
Dialogue
Display and select images/dialogues to match the character the user interacts with's interactions
Different dialogue boxes for when hovering and when clicking
*/
class Dialogue {

  constructor() {

    //Display for big dialogue box (user clicked)
    this.big = {
      // box dimensions and positions
      x: width / 2,
      y: 700,
      w: 900,
      h: 450,
      corner: 30,
      // background color
      r: 40,
      g: 36,
      b: 34,
      //text size
      name: 40,
      speech: 30,
      //text position
      shiftname: 550,
      shiftspeech: 600,
    }

    //Display for small dialogue box (user hover)
    this.small = {
      // box dimensions and positions
      x: 55,
      y: 65,
      w: 135,
      h: 55,
      corner: 10,
      // background color
      bg: 255,
      //text size
      name: 18,
      speech: 16,
      //text shift (position inside the box)
      shiftname: 70,
      shiftspeech: 50,
    }
    // extra space to the left of the text inside the boxes
    this.indent = 90;

    // character image size
    this.image = {
      x: 750,
      y: 500,
    }
  }

  // displaying the TEXT of the dialogue taken from JSON
  displayDialogue() {

    //data taken from JSON file
    let characterName = dialogueData.characters[characterNumber].name;
    let dialogue = dialogueData.characters[characterNumber].line[lineNumber];

    // big dialogue box when user directly interacts with character
    if (mouseIsPressed && nearby) {
      // background dialogue box display
      this.displayDialogueBox();

      //text display
      push();
      fill(255);
      textAlign(LEFT);

      //character name
      textSize(this.big.name);
      text(`${characterName}`, this.indent, this.big.shiftname);

      //character line (speech)
      textSize(this.big.speech);
      text(`${dialogue}`, this.indent, this.big.shiftspeech);
      pop();
    }
    // small dialogue box when user hovers over the character
    else if (nearby) {
      // background dialogue box display
      this.displaySmallDialogueBox();

      //text display
      push();
      textAlign(LEFT);

      //character name
      textSize(this.small.name);
      text(`${characterName} :`, updateX, updateY - this.small.shiftname);

      //character line (speech)
      textSize(this.small.speech);
      text(`${dialogue}`, updateX, updateY - this.small.shiftspeech);
      pop();
    }
    //user away from character
    if (!nearby) {
      chat = false;
    }
  }

  //User interacts with character: Display Large black background dialogue box
  displayDialogueBox() {
    if (chat) { //user directly interacts with character
      push();
      rectMode(CENTER);
      noStroke();

      fill(this.big.r, this.big.g, this.big.b);
      rect(this.big.x, this.big.y, this.big.w, this.big.h, this.big.corner);
      pop();

      // character image displayed with the dialogue box
      imageMode(CENTER)
      image(images[characterNumber], this.image.x, this.image.y)
    }
  }

  //User hovers the character: Display small white background dialogue box
  displaySmallDialogueBox() {
    push();
    rectMode(CENTER);
    noStroke();

    fill(this.small.bg);
    rect(updateX + this.small.x, updateY - this.small.y, this.small.w, this.small.h, this.small.corner);
    pop();

  }
}
