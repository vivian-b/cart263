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
    this.babaX = 829;
    this.babaY = 217;

    // #1 bellkeeper
    this.bellkeeperN = 1;
    this.bellkeeperX = 868;
    this.bellkeeperY = 213;

    // #2 david
    this.davidN = 2;
    this.davidX = 61;
    this.davidY = 670;

    // #3 deerfoxes
    this.deerfoxesN = 3;
    this.deerfoxesX = 122;
    this.deerfoxesY = 125;

    // #4 erik
    this.erikN = 4;
    this.erikX = 481;
    this.erikY = 569;

    // #5 elfking
    this.elfkingN = 5;
    this.elfkingX = 142;
    this.elfkingY = 123;

    // #6 elfmayor
    this.elfmayorN = 6;
    this.elfmayorX = 143;
    this.elfmayorY = 344;

    // #7 frida
    this.fridaN = 7;
    this.fridaX = 51;
    this.fridaY = 450;

    // #8 giant
    this.giantN = 8;
    this.giantX = 675;
    this.giantY = 172;

    // #9 jellybean
    this.jellybeanN = 9;
    this.jellybeanX = 420;
    this.jellybeanY = 268;

    // #10 johanna
    this.johannaN = 10;
    this.johannaX = 231;
    this.johannaY = 351;

    // #11 kaisa
    this.kaisaN = 11;
    this.kaisaX = 812;
    this.kaisaY = 664;

    // #12 kelly
    this.kellyN = 12;
    this.kellyX = 655;
    this.kellyY = 807;

    // #13 lindworm
    this.lindwormN = 13;
    this.lindwormX = 648;
    this.lindwormY = 110;

    // #14 matilda
    this.matildaN = 14;
    this.matildaX = 792;
    this.matildaY = 472;

    // #15 peter
    this.peterN = 15;
    this.peterX = 176;
    this.peterY = 559;

    // #16 principal
    this.principalN = 16;
    this.principalX = 567;
    this.principalY = 493;

    // #17 ratKing
    this.ratKingN = 17;
    this.ratKingX = 458;
    this.ratKingY = 688;

    // #18 ravenLeader
    this.ravenLeaderN = 18;
    this.ravenLeaderX = 82;
    this.ravenLeaderY = 269;

    // #19 greatRaven
    this.greatRavenN = 19;
    this.greatRavenX = 376;
    this.greatRavenY = 241;

    // #20 tontu
    this.tontuN = 20;
    this.tontuX = 228;
    this.tontuY = 559;

    // #21 vittra
    this.vittraN = 21,
    this.vittraX = 763;
    this.vittraY = 643;

    // #22 wofs
    this.wofsN = 22;
    this.wofsX = 886;
    this.wofsY = 330;

    // #23 woodman
    this.woodmanN = 23;
    this.woodmanX = 126;
    this.woodmanY = 597;

    // #24 troll
    this.trollN = 24;
    this.trollX = 559;
    this.trollY = 310;

  }

  // Character #0
  baba() {
    image(sprites[0], this.babaX, this.babaY, this.size, this.size)

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
    image(sprites[1], this.bellkeeperX, this.bellkeeperY, this.size, this.size)

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
    image(sprites[2], this.davidX, this.davidY, this.size, this.size)

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
    image(sprites[4], this.erikX, this.erikY, this.size, this.size)


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
    image(sprites[4], this.elfkingX, this.elfkingY, this.size, this.size)

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
  giant() {

    d = dist(mouseX, mouseY, this.giantX, this.giantY);
    if (d < user.size / 2 + user.size / 2) {

      updateX = this.giantX;
      updateY = this.giantY;
      lineNumber = 0;
      if (mouseIsPressed) {
        lineNumber = 1;
      }

      characterNumber = this.giantN;
      this.displayDialogue();
    }
  }

  // Character #9
  jellybean() {

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


  // Bottom Left (city): david, frida, johanna, kelly, matilda, peter, tontu
  // Bottom Right (city): erik, kaisa, principal, greatRaven, ratKing, ravenLeader, vittra


  cityLeft() {

    this.david(); // #2
    this.frida(); // #7
    this.kelly(); // #12
    this.tontu(); // #20
    this.jellybean(); // #9
    this.ratKing(); // #17
    this.ravenLeader(); // #18
    this.principal(); // #16
    this.peter(); // #15



  }

  cityRight() {
    this.erik(); // #4
    this.kaisa(); // #11
    this.greatRaven(); // #19
    this.matilda(); // #14
    this.bellkeeper(); // #1

  }

  // Top Left (outskirts): deerfoxes, elfking, lindworm, wofs, woodman
  // Top Right (outskirts): baba, bellkeeper, elfmayor, giant, jellybean, troll

  outskirtLeft() {
    this.elfmayor(); // #6
    this.elfking(); // #5
    this.baba(); // #0
    this.woodman(); // #23
    this.giant(); // #8
    this.johanna(); // #10

  }

  outskirtRight() {
    this.deerfoxes(); // #3
    this.lindworm(); // #13
    this.troll(); // #24
    this.vittra(); //#21
    this.wofs(); // #22


  }


}
