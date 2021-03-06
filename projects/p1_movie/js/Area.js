/**
Area:
control and display the different four differents areas in the simulation (outskirt 1&2 + city 1&2)
each map has different cast of characters and arrows that lets the user navigate between the areas when clicked on.
*/

//second distance variable for double arrows in a single area
let d2;

class Area {
  constructor() {}

  // first map/top left: outskirt
  outskirt1() {
    mapNumber = 0; //number for array
    this.mapDisplay(); //background image
    characters.outskirtLeft(); //characters shown
    //arrow display + position
    arrow.displayRight2();
    //user interaction with right arrow
    d = dist(mouseX, mouseY, arrow.arrowRightX, arrow.arrowRightY2); //distance between user + arrow
    if ((d < arrow.size / 2 + user.size / 2) && (mouseIsPressed)) { //user interaction(clicking) with arrow
      state = `outskirt2`;
    }
  }

  // second map/top right: outskirt
  outskirt2() {
    mapNumber = 1; //number for array
    this.mapDisplay(); //background image
    characters.outskirtRight(); //characters shown

    //arrow display + position
    arrow.displayLeft2();
    arrow.displayBot();
    //user interaction with left arrow
    d = dist(mouseX, mouseY, arrow.arrowLeftX, arrow.arrowLeftY2); //distance between user + arrow
    if ((d < arrow.size / 2 + user.size / 2) && (mouseIsPressed)) { //user interaction(clicking) with arrow
      state = `outskirt1`; //travel to other area
    }
    // user interaction with bottom arrow
    d2 = dist(mouseX, mouseY, arrow.arrowBottomX, arrow.arrowBottomY); //distance between user + arrow
    if ((d2 < arrow.size / 2 + user.size / 2) && (mouseIsPressed)) { //user interaction(clicking) with arrow
      state = `city2`; //travel to other area
    }
  }

  // third map/bottom left: city
  city1() {
    mapNumber = 2; //number for array
    this.mapDisplay(); //background image
    characters.cityLeft(); //characters shown

    //arrow display + position
    arrow.displayRight();
    // user interaction with right arrow
    d = dist(mouseX, mouseY, arrow.arrowRightX, arrow.arrowRightY); //distance between user + arrow
    if ((d < arrow.size / 2 + user.size / 2) && (mouseIsPressed)) { //user interaction(clicking) with arrow
      state = `city2`; //travel to other area
    }
  }

  // fourth map/bottom right: city
  city2() {
    mapNumber = 3; //number for array
    this.mapDisplay(); //background image
    characters.cityRight(); //characters shown

    //arrows object display + position
    arrow.displayTop();
    arrow.displayLeft();
    //user interaction with top arrow
    d = dist(mouseX, mouseY, arrow.arrowTopX, arrow.arrowTopY); //distance between user + arrow
    if ((d < arrow.size / 2 + user.size) / 2 && (mouseIsPressed)) { //user interaction(clicking) with arrow
      state = `outskirt2`; //travel to other area
    }
    //user interaction with left arrow
    d2 = dist(mouseX, mouseY, arrow.arrowLeftX, arrow.arrowLeftY); //distance between user + arrow
    if ((d2 < arrow.size / 2 + user.size) / 2 && (mouseIsPressed)) { //user interaction(clicking) with arrow
      state = `city1`; //travel to other area
    }
  }

  // display background image, centered
  mapDisplay() {
    push();
    image(map[mapNumber], width / 2, height / 2, width, height) //image selected from array
    pop();
  }
}
