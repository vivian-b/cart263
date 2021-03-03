// updated X/Y coordinates depending on the selected character
let updateX;
let updateY;

class Character {
  constructor() {

    // general character size
    this.size = 40;

    // City character coordinates
    // Bottom Left (city): david, frida, johanna, kelly, matilda, peter, tontu
    // Bottom Right (city): erik, kaisa, principal, greatRaven, ratKing, ravenLeader, vittra

    // #2 david
    this.davidN = 2
    this.davidX = 100;
    this.davidY = 100;

    // # frida
    this.fridaX = 300;
    this.fridaY = 300;

    // # johanna
    this.johannaX = 750;
    this.johannaY = 750;

    // # kaisa
    this.kaisaX = 200;
    this.kaisaY = 200;

    // # peter
    this.peterX = 250;
    this.peterY = 250;

    // # ratking
    this.ratkingX = 350;
    this.ratkingY = 350;

    // # greatRaven
    this.greatRavenX = 500;
    this.greatRavenY = 500;

    // # tontu
    this.tontuX = 400;
    this.tontuY = 400;

    // # vittra
    this.vittraX = 450;
    this.vittraY = 450;

    // # matilda
    this.matildaX = 550;
    this.matildaY = 550;

    // # kelly
    this.kellyX = 650;
    this.kellyY = 650;

    // # ravenLeader
    this.ravenLeaderX = 150;
    this.ravenLeaderY = 150;

    // # principal
    this.principalX = 700;
    this.principalY = 700;

    // # erik
    this.erikX = 680;
    this.erikY = 680;

    // Outskirts character coordinates
    // Top Left (outskirts): deerfoxes, elfking, lindworm, wofs, woodman
    // Top Right (outskirts): baba, bellkeeper, elfmayor, giants, jellybean, troll

    // # baba
    this.babaX = 600;
    this.babaY = 600;

    // #deerfoxes
    this.deerfoxesX = 300;
    this.deerfoxesY = 300;

    // #elfking
    this.elfkingX = 250;
    this.elfkingY = 250;

    // #elfmayor
    this.elfmayorX = 350;
    this.elfmayorY = 350;

    // #giants
    this.giantsX = 500;
    this.giantsY = 500;

    // #lindworm
    this.lindwormX = 200;
    this.lindwormY = 200;

    // #wofs
    this.wofsX = 400;
    this.wofsY = 400;

    // #woodman
    this.woodmanX = 100;
    this.woodmanY = 100;

    // #bellkeeper
    this.bellkeeperX = 150;
    this.bellkeeperY = 150;

    // #jellybean
    this.jellybeanX = 450;
    this.jellybeanY = 450;

    // #troll
    this.trollX = 250;
    this.trollY = 250;

  }

  // Character #0
  baba() {

    push();
    fill(2);
    ellipse(this.babaX, this.babaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.babaX, this.babaY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #1
  bellkeeper() {
    push();
    fill(255);

    ellipse(this.bellkeeperX, this.bellkeeperY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.bellkeeperX, this.bellkeeperY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #2
  david() {
    push();
    fill(255);

    ellipse(this.davidX, this.davidY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.davidX, this.davidY);
    if (d < user.size / 2 + user.size / 2) {

      updateX = this.davidX;
      updateY = this.davidY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = this.davidN;
      this.displayDialogue();
    }
  }

  // Character #3
  deerfoxes() {
    push();
    fill(255);

    ellipse(this.deerfoxesX, this.deerfoxesY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.deerfoxesX, this.deerfoxesY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #4
  erik() {
    push();
    fill(255);

    ellipse(this.erikX, this.erikY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.erikX, this.erikY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #5
  elfking() {
    push();
    fill(255);

    ellipse(this.elfkingX, this.elfkingY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.elfkingX, this.elfkingY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #6
  elfmayor() {
    push();
    fill(255);

    ellipse(this.elfmayorX, this.elfmayorY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.elfmayorX, this.elfmayorY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #7
  frida() {
    push();
    fill(255);

    ellipse(this.fridaX, this.fridaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.fridaX, this.fridaY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #8
  giants() {
    push();
    fill(255);

    ellipse(this.giantsX, this.giantsY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.giantsX, this.giantsY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #9
  jellybean() {
    push();
    fill(255);

    ellipse(this.jellybeanX, this.jellybeanY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.jellybeanX, this.jellybeanY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #10
  johanna() {
    push();
    fill(255);

    ellipse(this.johannaX, this.johannaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.johannaX, this.johannaY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #11
  kaisa() {
    push();
    fill(255);

    ellipse(this.kaisaX, this.kaisaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.kaisaX, this.kaisaY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #12
  kelly() {
    push();
    fill(255);

    ellipse(this.kellyX, this.kellyY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.kellyX, this.kellyY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #13
  lindworm() {
    push();
    fill(255);

    ellipse(this.lindwormX, this.lindwormY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.lindwormX, this.lindwormY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #14
  matilda() {
    push();
    fill(255);

    ellipse(this.matildaX, this.matildaY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.matildaX, this.matildaY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #15
  peter() {
    push();
    fill(255);

    ellipse(this.peterX, this.peterY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.peterX, this.peterY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #16
  principal() {
    push();
    fill(255);

    ellipse(this.principalX, this.principalY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.principalX, this.principalY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #17
  ratking() {
    push();
    fill(255);

    ellipse(this.ratkingX, this.ratkingY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.ratkingX, this.ratkingY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #18
  ravenLeader() {
    push();
    fill(255);

    ellipse(this.ravenLeaderX, this.ravenLeaderY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.ravenLeaderX, this.ravenLeaderY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #19
  greatRaven() {
    push();
    fill(50);

    ellipse(this.greatRavenX, this.greatRavenY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.greatRavenX, this.greatRavenY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #20
  tontu() {
    push();
    fill(255);

    ellipse(this.tontuX, this.tontuY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.tontuX, this.tontuY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #21
  vittra() {
    push();
    fill(255);

    ellipse(this.vittraX, this.vittraY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.vittraX, this.vittraY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #22
  wofs() {
    push();
    fill(255);

    ellipse(this.wofsX, this.wofsY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.wofsX, this.wofsY);
    if (d < user.size / 2 + user.size / 2) {

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

  // Character #23
  woodman() {
    push();
    fill(20, 200, 20);

    ellipse(this.woodmanX, this.woodmanY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.woodmanX, this.woodmanY);

    if (d < user.size / 2 + user.size / 2) {
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

  // Character #24
  troll() {
    push();
    fill(20, 200, 20);

    ellipse(this.trollX, this.trollY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.trollX, this.trollY);

    if (d < user.size / 2 + user.size / 2) {
      updateX = this.trollX;
      updateY = this.trollY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }
      characterNumber = 24;
      this.displayDialogue();
    }

  }

  displayDialogue() {

    let characterName = dialogueData.characters[characterNumber].name;
    let dialogue = dialogueData.characters[characterNumber].line[lineNumber];


    if (mouseIsPressed) {
      this.displayDialogueBox();

      push();
      textSize(40);
      fill(200);
      textAlign(LEFT);
      text(`${characterName} :`, 110, 570);
      text(`${dialogue}`, 110, 640);
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

  displayDialogueBox() {
    push();
    fill(0);
    rectMode(CENTER);
    rect(width / 2, 700, 900, 400, 30);
    pop();
  }

  cityLeft() {

    this.david(); // #2
    this.frida(); // #7
    this.johanna(); // #10
    this.kelly(); // #12
    this.matilda(); // #14
    this.peter(); // #15
    this.tontu(); // #20


  }

  cityRight() {

    this.erik(); // #4
    this.kaisa(); // #11
    this.principal(); // #16
    this.greatRaven(); // #19
    this.ratking(); // #17
    this.ravenLeader(); // #18
    this.vittra(); //#21

  }

  outskirtLeft() {
    this.deerfoxes(); // #3
    this.elfking(); // #5
    this.lindworm(); // #13
    this.wofs(); // #22
    this.woodman(); // #23
  }

  outskirtRight() {
    this.baba(); // #0
    this.bellkeeper(); // #1
    this.elfmayor(); // #6
    this.giants(); // #8
    this.jellybean(); // #9
    this.troll(); // #24

  }


}