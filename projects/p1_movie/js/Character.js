// updated X/Y coordinates depending on the selected character
let updateX;
let updateY;

class Character {
  constructor() {

    // general character size
    this.size = 40;

    // All character coordinates

    // #0 baba
    this.babaN = 0;
    this.babaX = 600;
    this.babaY = 600;

    // #1 bellkeeper
    this.bellkeeperN = 1;
    this.bellkeeperX = 150;
    this.bellkeeperY = 150;

    // #2 david
    this.davidN = 2;
    this.davidX = 100;
    this.davidY = 100;

    // #3 deerfoxes
    this.deerfoxesN = 3;
    this.deerfoxesX = 300;
    this.deerfoxesY = 300;

    // #4 erik
    this.erikN = 4;
    this.erikX = 680;
    this.erikY = 680;

    // #5 elfking
    this.elfkingN = 5;
    this.elfkingX = 250;
    this.elfkingY = 250;

    // #6 elfmayor
    this.elfmayorN = 6;
    this.elfmayorX = 350;
    this.elfmayorY = 350;

    // #7 frida
    this.fridaN = 7;
    this.fridaX = 300;
    this.fridaY = 300;

    // #8 giants
    this.giantsN = 8;
    this.giantsX = 500;
    this.giantsY = 500;

    // #9 jellybean
    this.jellybeanN = 9;
    this.jellybeanX = 450;
    this.jellybeanY = 450;

    // #10 johanna
    this.johannaN = 10;
    this.johannaX = 750;
    this.johannaY = 750;

    // #11 kaisa
    this.kaisaN = 11;
    this.kaisaX = 200;
    this.kaisaY = 200;

    // #12 kelly
    this.kellyN = 12;
    this.kellyX = 650;
    this.kellyY = 650;

    // #13 lindworm
    this.lindwormN = 13;
    this.lindwormX = 200;
    this.lindwormY = 200;

    // #14 matilda
    this.matildaN = 14;
    this.matildaX = 550;
    this.matildaY = 550;

    // #15 peter
    this.peterN = 15;
    this.peterX = 250;
    this.peterY = 250;

    // #16 principal
    this.principalN = 16;
    this.principalX = 700;
    this.principalY = 700;

    // #17 ratKing
    this.ratKingN = 17;
    this.ratKingX = 350;
    this.ratKingY = 350;

    // #18 ravenLeader
    this.ravenLeaderN = 18;
    this.ravenLeaderX = 150;
    this.ravenLeaderY = 150;

    // #19 greatRaven
    this.greatRavenN = 19;
    this.greatRavenX = 500;
    this.greatRavenY = 500;

    // #20 tontu
    this.tontuN = 20;
    this.tontuX = 400;
    this.tontuY = 400;

    // #21 vittra
    this.vittraN = 21,
    this.vittraX = 450;
    this.vittraY = 450;

    // #22 wofs
    this.wofsN = 22;
    this.wofsX = 400;
    this.wofsY = 400;

    // #23 woodman
    this.woodmanN = 23;
    this.woodmanX = 100;
    this.woodmanY = 100;

    // #24 troll
    this.trollN = 24;
    this.trollX = 250;
    this.trollY = 250;

  }

  // Character #0
  baba() {
    image(images[characterNumber], this.babaX, this.babaY, this.size, this.size)

    d = dist(mouseX, mouseY, this.babaX, this.babaY);
    if (d < user.size / 2 + user.size / 2) {

      updateX = this.babaX;
      updateY = this.babaY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }
      characterNumber = this.babaN;
      this.displayDialogue();

    }
  }

  // Character #1
  bellkeeper() {
    image(images[characterNumber], this.bellkeeperX, this.bellkeeperY, this.size, this.size)

    d = dist(mouseX, mouseY, this.bellkeeperX, this.bellkeeperY);
    if (d < user.size / 2 + user.size / 2) {

      updateX = this.bellkeeperX;
      updateY = this.bellkeeperY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = this.bellkeeperN;
      this.displayDialogue();
    }
  }

  // Character #2
  david() {
    image(images[characterNumber], this.davidX, this.davidY, this.size, this.size)

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

      characterNumber = this.deerfoxesN;
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

      characterNumber = this.erikN;
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

      characterNumber = this.elfkingN;
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

      characterNumber = this.elfmayorN;
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

      characterNumber = this.fridaN;
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

      characterNumber = this.giantsN;
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

      characterNumber = this.jellybeanN;
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
      characterNumber = this.johannaN;
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

      characterNumber = this.kaisaN;
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

      characterNumber = this.kellyN;
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

      characterNumber = this.lindwormN;
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

      characterNumber = this.matildaN;
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

      characterNumber = this.peterN;
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

      characterNumber = this.principalN;
      this.displayDialogue();
    }
  }

  // Character #17
  ratKing() {
    push();
    fill(255);

    ellipse(this.ratKingX, this.ratKingY, this.size);
    pop();

    d = dist(mouseX, mouseY, this.ratKingX, this.ratKingY);
    if (d < user.size / 2 + user.size / 2) {

      updateX = this.ratKingX;
      updateY = this.ratKingY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = this.ratKingN;
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

      characterNumber = this.ravenLeaderN;
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

      characterNumber = this.greatRavenN;
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

      characterNumber = this.tontuN;
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

      characterNumber = this.vittraN;
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

      characterNumber = this.wofsN;
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
      characterNumber = this.woodmanN;
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
      characterNumber = this.trollN;
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

    imageMode(CENTER)
    image(images[characterNumber], 800, 500)
  }


  // Bottom Left (city): david, frida, johanna, kelly, matilda, peter, tontu
  // Bottom Right (city): erik, kaisa, principal, greatRaven, ratKing, ravenLeader, vittra


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
    this.ratKing(); // #17
    this.ravenLeader(); // #18
    this.vittra(); //#21

  }

  // Top Left (outskirts): deerfoxes, elfking, lindworm, wofs, woodman
  // Top Right (outskirts): baba, bellkeeper, elfmayor, giants, jellybean, troll

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
