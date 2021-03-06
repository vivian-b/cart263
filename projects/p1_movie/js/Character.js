// updated X/Y coordinates depending on the selected character
let updateX;
let updateY;
let shift = 65;

class Character {
  constructor() {

    // general character size
    this.size = 40;

    // All character coordinates

    // #0 baba
    this.baba = {
      n: 0,
      x: 829,
      y: 217,
    }

    // #1 bellkeeper
    this.bellkeeper = {
      n: 1,
      x: 868,
      y: 213,
    }

    // #2 david
    this.david = {
      n: 2,
      x: 61,
      y: 670,
    }

    this.deerfoxes = {
      n: 3,
      x: 122,
      y: 125,
    }

    // #4 erik
    this.erik = {
      n: 4,
      x: 481,
      y: 569,
    }

    // #5 elfking
    this.elfking = {
      n: 5,
      x: 142,
      y: 123,
    }

    // #6 elfmayor
    this.elfmayor = {
      n: 6,
      x: 143,
      y: 344,
    }

    // #7 frida
    this.frida = {
      n: 7,
      x: 51,
      y: 450,
    }

    // #8 giant
    this.giant = {
      n: 8,
      x: 675,
      y: 172,
    }

    // #9 jellybean
    this.jellybean = {
      n: 9,
      x: 420,
      y: 268,
    }

    // #10 johanna
    this.johanna = {
      n: 10,
      x: 231,
      y: 351,
    }

    // #11 kaisa
    this.kaisa = {
      n: 11,
      x: 812,
      y: 664,
    }

    // #12 kelly
    this.kelly = {
      n: 12,
      x: 200,
      y: 670,
    }

    // #13 lindworm
    this.lindworm = {
      n: 13,
      x: 648,
      y: 110,
    }

    // #14 matilda
    this.matilda = {
      n: 14,
      x: 792,
      y: 472,
    }

    // #15 peter
    this.peter = {
      n: 15,
      x: 176,
      y: 559,
    }

    // #16 principal
    this.principal = {
      n: 16,
      x: 567,
      y: 493,
    }

    // #17 ratKing
    this.ratKing = {
      n: 17,
      x: 458,
      y: 688,
    }

    // #18 ravenLeader
    this.ravenLeader = {
      n: 18,
      x: 82,
      y: 269,
    }

    // #19 greatRaven
    this.greatRaven = {
      n: 19,
      x: 376,
      y: 241,
    }

    // #20 tontu
    this.tontu = {
      n: 20,
      x: 228,
      y: 559,
    }

    // #21 vittra
    this.vittra = {
      n: 21,
      x: 763,
      y: 643,
    }

    // #22 wofs
    this.wofs = {
      n: 22,
      x: 886,
      y: 330,
    }

    // #23 woodman
    this.woodman = {
      n: 23,
      x: 126,
      y: 597,
    }

    // #24 troll
    this.troll = {
      n: 24,
      x: 559,
      y: 310,
    }

  }

  // Character #0
  babaDisplay() {

    d = dist(mouseX, mouseY,  this.baba.x, this.baba.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.baba.x;
      updateY = this.baba.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;
        lineNumber = 1;
      }
      characterNumber = this.baba.n;
    } else {
      nearby = false;
    }
  }

  // Character #1
  bellkeeperDisplay() {

    d = dist(mouseX, mouseY, this.bellkeeper.x, this.bellkeeper.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.bellkeeper.x -shift;
      updateY = this.bellkeeper.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.bellkeeper.n;
    } else {
      nearby = false;
    }
  }

  // Character #2
  davidDisplay() {

    d = dist(mouseX, mouseY, this.david.x, this.david.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.david.x;
      updateY = this.david.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.david.n;
    } else {
      nearby = false;
    }
  }

  // Character #3
  deerfoxesDisplay() {

    d = dist(mouseX, mouseY, this.deerfoxes.x, this.deerfoxes.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.deerfoxes.x;
      updateY = this.deerfoxes.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.deerfoxes.n;
    } else {
      nearby = false;
    }
  }

  // Character #4
  erikDisplay() {

    d = dist(mouseX, mouseY, this.erik.x, this.erik.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.erik.x;
      updateY = this.erik.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.erik.n;
    }
  }

  // Character #5
  elfkingDisplay() {

    d = dist(mouseX, mouseY, this.elfking.x, this.elfking.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.elfking.x;
      updateY = this.elfking.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.elfking.n;
    }

  }

  // Character #6
  elfmayorDisplay() {

    d = dist(mouseX, mouseY, this.elfmayor.x, this.elfmayor.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.elfmayor.x;
      updateY = this.elfmayor.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.elfmayor.n;
    }
  }

  // Character #7
  fridaDisplay() {

    d = dist(mouseX, mouseY, this.frida.x, this.frida.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.frida.x;
      updateY = this.frida.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.frida.n;
    }
  }

  // Character #8
  giantDisplay() {

    d = dist(mouseX, mouseY, this.giant.x, this.giant.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.giant.x;
      updateY = this.giant.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.giant.n;
    }
  }

  // Character #9
  jellybeanDisplay() {

    d = dist(mouseX, mouseY, this.jellybean.x, this.jellybean.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.jellybean.x;
      updateY = this.jellybean.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.jellybean.n;
    }
  }

  // Character #10
  johannaDisplay() {

    d = dist(mouseX, mouseY, this.johanna.x, this.johanna.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.johanna.x;
      updateY = this.johanna.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;
        lineNumber = 1;
      }
      characterNumber = this.johanna.n;
    }
  }

  // Character #11
  kaisaDisplay() {

    d = dist(mouseX, mouseY, this.kaisa.x, this.kaisa.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.kaisa.x;
      updateY = this.kaisa.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.kaisa.n;
    }
  }

  // Character #12
  kellyDisplay() {

    d = dist(mouseX, mouseY, this.kelly.x, this.kelly.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.kelly.x;
      updateY = this.kelly.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.kelly.n;
    }
  }

  // Character #13
  lindwormDisplay() {

    d = dist(mouseX, mouseY, this.lindworm.x, this.lindworm.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.lindworm.x;
      updateY = this.lindworm.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.lindworm.n;
    }
  }

  // Character #14
  matildaDisplay() {

    d = dist(mouseX, mouseY, this.matilda.x, this.matilda.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.matilda.x;
      updateY = this.matilda.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.matilda.n;
    }
  }

  // Character #15
  peterDisplay() {

    d = dist(mouseX, mouseY, this.peter.x, this.peter.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.peter.x;
      updateY = this.peter.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.peter.n;
    }
  }

  // Character #16
  principalDisplay() {

    d = dist(mouseX, mouseY, this.principal.x, this.principal.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.principal.x;
      updateY = this.principal.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.principal.n;
    }
  }

  // Character #17
  ratKingDisplay() {

    d = dist(mouseX, mouseY, this.ratKing.x, this.ratKing.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.ratKing.x;
      updateY = this.ratKing.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.ratKing.n;
    }
  }

  // Character #18
  ravenLeaderDisplay() {

    d = dist(mouseX, mouseY, this.ravenLeader.x, this.ravenLeader.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.ravenLeader.x;
      updateY = this.ravenLeader.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.ravenLeader.n;
    }
  }

  // Character #19
  greatRavenDisplay() {

    d = dist(mouseX, mouseY, this.greatRaven.x, this.greatRaven.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.greatRaven.x;
      updateY = this.greatRaven.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.greatRaven.n;
    }
  }

  // Character #20
  tontuDisplay() {

    d = dist(mouseX, mouseY, this.tontu.x, this.tontu.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.tontu.x;
      updateY = this.tontu.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.tontu.n;
    }
  }

  // Character #21
  vittraDisplay() {

    d = dist(mouseX, mouseY, this.vittra.x, this.vittra.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.vittra.x;
      updateY = this.vittra.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }
      characterNumber = this.vittra.n;
    }
  }

  // Character #22
  wofsDisplay() {

    d = dist(mouseX, mouseY, this.wofs.x, this.wofs.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.wofs.x - shift;
      updateY = this.wofs.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }

      characterNumber = this.wofs.n;
    }
  }

  // Character #23
  woodmanDisplay() {

    d = dist(mouseX, mouseY, this.woodman.x, this.woodman.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;

      updateX = this.woodman.x;
      updateY = this.woodman.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;
        lineNumber = 1;
      }
      characterNumber = this.woodman.n;
    }
  }

  // Character #24
  trollDisplay() {

    d = dist(mouseX, mouseY, this.troll.x, this.troll.y);
    if (d < user.size / 2 + user.size / 2) {
      nearby = true;


      updateX = this.troll.x;
      updateY = this.troll.y;
      lineNumber = 0;

      if (mouseIsPressed) {
        chat = true;

        lineNumber = 1;
      }
      characterNumber = this.troll.n;
    }

  }




  // Bottom Left (city): david, frida, johanna, kelly, matilda, peter, tontu
  // Bottom Right (city): erik, kaisa, principal, greatRaven, ratKing, ravenLeader, vittra


  cityLeft() {

    this.davidDisplay(); // #2

    this.fridaDisplay(); // #7
    this.kellyDisplay(); // #12
    this.tontuDisplay(); // #20
    this.jellybeanDisplay(); // #9
    this.ratKingDisplay(); // #17
    this.ravenLeaderDisplay(); // #18
    this.principalDisplay(); // #16
    this.peterDisplay(); // #15




  }

  cityRight() {
    this.bellkeeperDisplay(); // #1

    this.erikDisplay(); // #4
    this.kaisaDisplay(); // #11
    this.greatRavenDisplay(); // #19
    this.matildaDisplay(); // #14


  }

  // Top Left (outskirts): deerfoxes, elfking, lindworm, wofs, woodman
  // Top Right (outskirts): baba, bellkeeper, elfmayor, giant, jellybean, troll

  outskirtLeft() {
    this.babaDisplay(); // #0

    this.woodmanDisplay(); // #23
    this.johannaDisplay(); // #10
    this.giantDisplay(); // #8
    this.elfmayorDisplay(); // #6
    this.elfkingDisplay(); // #5


  }


  outskirtRight() {
    this.deerfoxesDisplay(); // #3

    this.trollDisplay(); // #24
    this.wofsDisplay(); // #22
    this.vittraDisplay(); //#21
    this.lindwormDisplay(); // #13



  }


}
