// updated character coordinates
let updateX;
let updateY;

class Character {

  constructor() {
    this.size = 40;

    // city characters
    // david, frida, johanna, kaisa, peter, ratking, thunderbird, tontu

    // david
    this.davidX = 100;
    this.davidY = 100;

    // frida
    this.fridaX = 300;
    this.fridaY = 300;

    // johanna
    this.johannaX = 750;
    this.johannaY = 700;

    // kaisa
    this.kaisaX = 200;
    this.kaisaY = 200;

    //peter
    this.peterX = 250;
    this.peterY = 250;

    //ratking
    this.ratkingX = 350;
    this.ratkingY = 350;

    // thunderbird
    this.thunderbirdX = 500;
    this.thunderbirdY = 500;

    // tontu
    this.tontuX = 400;
    this.tontuY = 400;

// vittra
this.vittraX = 450;
this.vittraY = 450;

    // outskirt characters
    // baba, deerfoxes,giants, lindworm, wofs, woodman

    // baba
    this.babaX = 600;
    this.babaY = 600;

    // deerfoxes
    this.deerfoxesX = 300;
    this.deerfoxesY = 300;

    // giants
    this.giantsX = 500;
    this.giantsY = 500;

    // lindworm
    this.lindwormX = 200;
    this.lindwormY = 200;

    // wofs
    this.wofsX = 400;
    this.wofsY = 400;

    // woodman
    this.woodmanX = 100;
    this.woodmanY = 100;

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


  vittra() {
    push();
    fill(255);
    noStroke();
    ellipse(this.vittraX, this.vittraY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.vittraX, this.vittraY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.vittraX;
      updateY = this.vittraY;
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

  wofs() {
    push();
    fill(255);
    noStroke();
    ellipse(this.wofsX, this.wofsY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.wofsX, this.wofsY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.wofsX;
      updateY = this.wofsY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  giants() {
    push();
    fill(255);
    noStroke();
    ellipse(this.giantsX, this.giantsY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.giantsX, this.giantsY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.giantsX;
      updateY = this.giantsY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  david() {
    push();
    fill(255);
    noStroke();
    ellipse(this.davidX, this.davidY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.davidX, this.davidY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.davidX;
      updateY = this.davidY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  kaisa() {
    push();
    fill(255);
    noStroke();
    ellipse(this.kaisaX, this.kaisaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.kaisaX, this.kaisaY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.kaisaX;
      updateY = this.kaisaY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  frida() {
    push();
    fill(255);
    noStroke();
    ellipse(this.fridaX, this.fridaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.fridaX, this.fridaY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.fridaX;
      updateY = this.fridaY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  peter() {
    push();
    fill(255);
    noStroke();
    ellipse(this.peterX, this.peterY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.peterX, this.peterY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.peterX;
      updateY = this.peterY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  tontu() {
    push();
    fill(255);
    noStroke();
    ellipse(this.tontuX, this.tontuY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.tontuX, this.tontuY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.tontuX;
      updateY = this.tontuY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }


  ratking() {
    push();
    fill(255);
    noStroke();
    ellipse(this.ratkingX, this.ratkingY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.ratkingX, this.ratkingY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.ratkingX;
      updateY = this.ratkingY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  thunderbird() {
    push();
    fill(255);
    noStroke();
    ellipse(this.thunderbirdX, this.thunderbirdY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.thunderbirdX, this.thunderbirdY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.thunderbirdX;
      updateY = this.thunderbirdY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }


  baba() {
    push();
    fill(255);
    noStroke();
    ellipse(this.babaX, this.babaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.babaX, this.babaY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.babaX;
      updateY = this.babaY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  deerfoxes() {
    push();
    fill(255);
    noStroke();
    ellipse(this.deerfoxesX, this.deerfoxesY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.deerfoxesX, this.deerfoxesY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.deerfoxesX;
      updateY = this.deerfoxesY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  lindworm() {
    push();
    fill(255);
    noStroke();
    ellipse(this.lindwormX, this.lindwormY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.lindwormX, this.lindwormY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.lindwormX;
      updateY = this.lindwormY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 0;
      this.displayDialogue();
    }
  }

  cityLeft() {}

  cityRight() {
    this.johanna();
    this.david();
    this.kaisa();
    this.frida();
    this.tontu();
    this.peter();
    this.thunderbird();
    this.ratking();



  }

  outskirtLeft() {}

  outskirtRight() {
    this.wofs();
    this.woodman();
    this.giants();
    this.lindworm();
    this.deerfoxes();
    this.baba();


  }

  displayDialogue() {

    let characterName = dialogueData.characters[characterNumber].name;
    let dialogue = dialogueData.characters[characterNumber].line[lineNumber];



    if (mouseIsPressed) {
      push();
      textSize(40);
      textAlign(LEFT);
      text(`${characterName} :`, 100, 580);
      text(`${dialogue}`, 100, 620);
      pop();
    } else {
      push();
      textSize(24);
      textAlign(LEFT);
      text(`${characterName} :`, updateX, updateY - 70);
      text(`${dialogue}`, updateX, updateY - 50);
      pop();
    }

  }




}
