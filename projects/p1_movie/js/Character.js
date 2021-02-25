// updated character coordinates
let updateX;
let updateY;

class Character {

  constructor() {
    this.size = 40;

    // city characters
    // david, frida, johanna, kaisa, peter, ratking, greatRaven, tontu

    // david
    this.davidX = 100;
    this.davidY = 100;

    // frida
    this.fridaX = 300;
    this.fridaY = 300;

    // johanna
    this.johannaX = 750;
    this.johannaY = 750;

    // kaisa
    this.kaisaX = 200;
    this.kaisaY = 200;

    //peter
    this.peterX = 250;
    this.peterY = 250;

    //ratking
    this.ratkingX = 350;
    this.ratkingY = 350;

    // greatRaven
    this.greatRavenX = 500;
    this.greatRavenY = 500;

    // tontu
    this.tontuX = 400;
    this.tontuY = 400;

    // vittra
    this.vittraX = 450;
    this.vittraY = 450;

    // matilda
    this.matildaX = 550;
    this.matildaY = 550;

    // kelly
    this.kellyX = 650;
    this.kellyY = 650;

    // ravenLeader
    this.ravenLeaderX = 150;
    this.ravenLeaderY = 150;

    // principal
    this.principalX = 700;
    this.principalY = 700;

    // erik
    this.erikX = 680;
    this.erikY = 680;

    // outskirt characters
    // baba, deerfoxes,giants, lindworm, wofs, woodman

    // baba
    this.babaX = 600;
    this.babaY = 600;

    // deerfoxes
    this.deerfoxesX = 300;
    this.deerfoxesY = 300;

    // elfking
    this.elfkingX = 250;
    this.elfkingY = 250;

    // elfmayor
    this.elfmayorX = 350;
    this.elfmayorY = 350;

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

    // bellkeeper
    this.bellkeeperX = 150;
    this.bellkeeperY = 150;

    // jellybean
    this.jellybeanX = 450;
    this.jellybeanY = 450;

  }

// 0
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

// 1
  bellkeeper() {
    push();
    fill(255);
    noStroke();
    ellipse(this.bellkeeperX, this.bellkeeperY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.bellkeeperX, this.bellkeeperY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.bellkeeperX;
      updateY = this.bellkeeperY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 1;
      this.displayDialogue();
    }
  }

// 2
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

      characterNumber = 2;
      this.displayDialogue();
    }
  }

// 3
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

      characterNumber = 3;
      this.displayDialogue();
    }
  }

// 4
  erik() {
    push();
    fill(255);
    noStroke();
    ellipse(this.erikX, this.erikY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.erikX, this.erikY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.erikX;
      updateY = this.erikY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 4;
      this.displayDialogue();
    }
  }

// 5
  elfking() {
    push();
    fill(255);
    noStroke();
    ellipse(this.elfkingX, this.elfkingY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.elfkingX, this.elfkingY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.elfkingX;
      updateY = this.elfkingY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 5;
      this.displayDialogue();
    }
  }

// 6
  elfmayor() {
    push();
    fill(255);
    noStroke();
    ellipse(this.elfmayorX, this.elfmayorY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.elfmayorX, this.elfmayorY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.elfmayorX;
      updateY = this.elfmayorY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 6;
      this.displayDialogue();
    }
  }

// 7
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

      characterNumber = 7;
      this.displayDialogue();
    }
  }

// 8
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

      characterNumber = 8;
      this.displayDialogue();
    }
  }

// 9
  jellybean() {
    push();
    fill(255);
    noStroke();
    ellipse(this.jellybeanX, this.jellybeanY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.jellybeanX, this.jellybeanY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.jellybeanX;
      updateY = this.jellybeanY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 9;
      this.displayDialogue();
    }
  }

// 10
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
      characterNumber = 10;
      this.displayDialogue();
    }
  }

// 11
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

      characterNumber = 11;
      this.displayDialogue();
    }
  }

// 12
  kelly() {
    push();
    fill(255);
    noStroke();
    ellipse(this.kellyX, this.kellyY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.kellyX, this.kellyY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.kellyX;
      updateY = this.kellyY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 12;
      this.displayDialogue();
    }
  }

// 13
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

      characterNumber = 13;
      this.displayDialogue();
    }
  }

// 14
  matilda() {
    push();
    fill(255);
    noStroke();
    ellipse(this.matildaX, this.matildaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.matildaX, this.matildaY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.matildaX;
      updateY = this.matildaY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 14;
      this.displayDialogue();
    }
  }

// 15
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

      characterNumber = 15;
      this.displayDialogue();
    }
  }

// 16
  principal() {
    push();
    fill(255);
    noStroke();
    ellipse(this.principalX, this.principalY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.principalX, this.principalY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.principalX;
      updateY = this.principalY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 16;
      this.displayDialogue();
    }
  }

// 17
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

      characterNumber = 17;
      this.displayDialogue();
    }
  }

// 18
  ravenLeader() {
    push();
    fill(255);
    noStroke();
    ellipse(this.ravenLeaderX, this.ravenLeaderY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.ravenLeaderX, this.ravenLeaderY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.ravenLeaderX;
      updateY = this.ravenLeaderY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 18;
      this.displayDialogue();
    }
  }

// 19
  greatRaven() {
    push();
    fill(255);
    noStroke();
    ellipse(this.greatRavenX, this.greatRavenY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.greatRavenX, this.greatRavenY);
    if (d < hilda.size / 2 + hilda.size / 2) {

      updateX = this.greatRavenX;
      updateY = this.greatRavenY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = 19;
      this.displayDialogue();
    }
  }

// 20
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

      characterNumber = 20;
      this.displayDialogue();
    }
  }

// 21
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

      characterNumber = 21;
      this.displayDialogue();
    }
  }

// 22
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

      characterNumber = 22;
      this.displayDialogue();
    }
  }

// 23
  woodman() {
    push();
    fill(20,200,20);
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
      characterNumber = 23;

      this.displayDialogue();

    }

  }


  cityLeft() {}

  cityRight() {

    this.david();
    this.erik();
    this.frida();
    this.johanna();
    this.kaisa();
    this.kelly();
    this.matilda();
    this.peter();
    this.principal();
    this.greatRaven();
    this.tontu();
    this.ratking();
    this.ravenLeader();

  }

  outskirtLeft() {}

  outskirtRight() {
    this.baba();
    this.bellkeeper();
    this.deerfoxes();
    this.elfking();
    this.elfmayor();
    this.giants();
    this.lindworm();
    this.jellybean();
    this.wofs();
    this.woodman();


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
