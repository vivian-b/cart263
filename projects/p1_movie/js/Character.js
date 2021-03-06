/**
Characters:

controls all characters coordinates(to interact with user)
and dialogue(select corresponding characters and character lines from JSON)
*/

// updated X/Y coordinates depending on the selected character
let updateX;
let updateY;

//shifting coordinates (for dialogue boxes going off canvas)
let shift = 65;

//user interactions
let chat = false; //click character
let nearby = false; //hover near character

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
  babaDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.baba.x, this.baba.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.baba.x;
      updateY = this.baba.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.baba.n; // select character number from array
    } else {
      nearby = false; // mouse away from characters
    }
  }

  // Character #1
  bellkeeperDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.bellkeeper.x, this.bellkeeper.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.bellkeeper.x - shift;
      updateY = this.bellkeeper.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.bellkeeper.n; // select character number from array
    } else {
      nearby = false; // mouse away from characters

    }
  }

  // Character #2
  davidDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.david.x, this.david.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.david.x;
      updateY = this.david.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.david.n; // select character number from array
    } else {
      nearby = false; // mouse away from characters
    }
  }

  // Character #3
  deerfoxesDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.deerfoxes.x, this.deerfoxes.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.deerfoxes.x;
      updateY = this.deerfoxes.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.deerfoxes.n; // select character number from array
    } else {
      nearby = false; // mouse away from characters

    }
  }

  // Character #4
  erikDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.erik.x, this.erik.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.erik.x;
      updateY = this.erik.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.erik.n; // select character number from array
    }
  }

  // Character #5
  elfkingDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.elfking.x, this.elfking.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.elfking.x;
      updateY = this.elfking.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.elfking.n; // select character number from array
    }

  }

  // Character #6
  elfmayorDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.elfmayor.x, this.elfmayor.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.elfmayor.x;
      updateY = this.elfmayor.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.elfmayor.n; // select character number from array
    }
  }

  // Character #7
  fridaDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.frida.x, this.frida.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.frida.x;
      updateY = this.frida.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.frida.n; // select character number from array
    }
  }

  // Character #8
  giantDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.giant.x, this.giant.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.giant.x;
      updateY = this.giant.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.giant.n; // select character number from array
    }
  }

  // Character #9
  jellybeanDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.jellybean.x, this.jellybean.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.jellybean.x;
      updateY = this.jellybean.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file

      }

      characterNumber = this.jellybean.n; // select character number from array
    }
  }

  // Character #10
  johannaDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.johanna.x, this.johanna.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.johanna.x;
      updateY = this.johanna.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.johanna.n; // select character number from array
    }
  }


  // Character #11
  kaisaDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice

    d = dist(mouseX, mouseY, this.kaisa.x, this.kaisa.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.kaisa.x;
      updateY = this.kaisa.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.kaisa.n; // select character number from array
    }
  }

  // Character #12
  kellyDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.kelly.x, this.kelly.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.kelly.x;
      updateY = this.kelly.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.kelly.n; // select character number from array
    }
  }

  // Character #13
  lindwormDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.lindworm.x, this.lindworm.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.lindworm.x;
      updateY = this.lindworm.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.lindworm.n; // select character number from array
    }
  }

  // Character #14
  matildaDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.matilda.x, this.matilda.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.matilda.x;
      updateY = this.matilda.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.matilda.n; // select character number from array
    }
  }

  // Character #15
  peterDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.peter.x, this.peter.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.peter.x;
      updateY = this.peter.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.peter.n; // select character number from array
    }
  }

  // Character #16
  principalDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.principal.x, this.principal.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.principal.x;
      updateY = this.principal.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.principal.n; // select character number from array
    }
  }

  // Character #17
  ratKingDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.ratKing.x, this.ratKing.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.ratKing.x;
      updateY = this.ratKing.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.ratKing.n; // select character number from array
    }
  }

  // Character #18
  ravenLeaderDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice

    d = dist(mouseX, mouseY, this.ravenLeader.x, this.ravenLeader.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.ravenLeader.x;
      updateY = this.ravenLeader.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.ravenLeader.n; // select character number from array
    }
  }

  // Character #19
  greatRavenDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.greatRaven.x, this.greatRaven.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.greatRaven.x;
      updateY = this.greatRaven.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.greatRaven.n; // select character number from array
    }
  }

  // Character #20
  tontuDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.tontu.x, this.tontu.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.tontu.x;
      updateY = this.tontu.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.tontu.n; // select character number from array
    }
  }

  // Character #21
  vittraDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.vittra.x, this.vittra.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.vittra.x;
      updateY = this.vittra.y;
      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.vittra.n; // select character number from array
    }
  }

  // Character #22
  wofsDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.wofs.x, this.wofs.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.wofs.x - shift;
      updateY = this.wofs.y;

      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.wofs.n; // select character number from array
    }
  }

  // Character #23
  woodmanDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.woodman.x, this.woodman.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.woodman.x;
      updateY = this.woodman.y;

      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.woodman.n; // select character number from array
    }
  }

  // Character #24
  trollDisplay() { // display & interactions of the character: coordinates, interaction with user + dialogue choice
    d = dist(mouseX, mouseY, this.troll.x, this.troll.y); // distance between the user's mouse and the character coordinates
    if (d < user.size / 2 + user.size / 2) { //user hovering character
      nearby = true; // user hover character
      //updated coordinates to correspond with character
      updateX = this.troll.x;
      updateY = this.troll.y;

      lineNumber = 0; //first chosen line from JSON file
      if (mouseIsPressed) { //interacting with the character
        chat = true; // user clicks character
        lineNumber = 1; //second chosen line from JSON file
      }
      characterNumber = this.troll.n; // select character number from array
    }
  }

  // character roster for each map/area

  // Area A
  // characters appearing in top left map (outskirt1)
  outskirtLeft() {
    this.babaDisplay(); // #0
    this.woodmanDisplay(); // #23
    this.johannaDisplay(); // #10
    this.giantDisplay(); // #8
    this.elfmayorDisplay(); // #6
    this.elfkingDisplay(); // #5
  }
  // Area B
  // characters appearing in top right map (outskirt2)
  outskirtRight() {
    this.deerfoxesDisplay(); // #3
    this.trollDisplay(); // #24
    this.wofsDisplay(); // #22
    this.vittraDisplay(); //#21
    this.lindwormDisplay(); // #13
  }
  // Area C
  // characters appearing in bottom left map (city1)
  cityLeft() {
    this.davidDisplay(); // #2
    this.fridaDisplay(); // #7
    this.jellybeanDisplay(); // #9
    this.kellyDisplay(); // #12
    this.peterDisplay(); // #15
    this.principalDisplay(); // #16
    this.ratKingDisplay(); // #17
    this.ravenLeaderDisplay(); // #18
    this.tontuDisplay(); // #20
  }
  // Area D
  // characters appearing in bottom right map (city2)
  cityRight() {
    this.bellkeeperDisplay(); // #1
    this.erikDisplay(); // #4
    this.kaisaDisplay(); // #11
    this.greatRavenDisplay(); // #19
    this.matildaDisplay(); // #14
  }
}
