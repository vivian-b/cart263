class Area {
  constructor() {

  }

  outskirt1() {
    mapNumber = 0;
    this.mapDisplay();

    arrow.displayRight2();

    characters.outskirtLeft();

    d = dist(mouseX, mouseY, arrow.arrowRightX, arrow.arrowRightY2);
    if ((d < arrow.size / 2 + user.size / 2) && (mouseIsPressed)) {
      state = `outskirt2`;
    }
  }

  outskirt2() {
    mapNumber = 1;
    this.mapDisplay();

    arrow.displayLeft2();
    arrow.displayBot();

    characters.outskirtRight();


    d = dist(mouseX, mouseY, arrow.arrowLeftX, arrow.arrowLeftY2);
    if ((d < arrow.size / 2 + user.size / 2) && (mouseIsPressed)) {
      state = `outskirt1`
    }

    d2 = dist(mouseX, mouseY, arrow.arrowBottomX, arrow.arrowBottomY);
    if ((d2 < arrow.size / 2 + user.size / 2) && (mouseIsPressed)) {
      state = `city2`
    }
  }

  city1() {
    mapNumber = 2;
    this.mapDisplay();

    arrow.displayRight();

    characters.cityLeft();

    d = dist(mouseX, mouseY, arrow.arrowRightX, arrow.arrowRightY);
    if ((d < arrow.size / 2 + user.size / 2) && (mouseIsPressed)) {
      state = `city2`;
    }
  }


  city2() {
    mapNumber = 3;
    this.mapDisplay();

    arrow.displayTop();
    arrow.displayLeft();

    characters.cityRight();


    d = dist(mouseX, mouseY, arrow.arrowTopX, arrow.arrowTopY);
    if ((d < arrow.size / 2 + user.size) / 2 && (mouseIsPressed)) {
      state = `outskirt2`
    }

    d2 = dist(mouseX, mouseY, arrow.arrowLeftX, arrow.arrowLeftY);
    if ((d2 < arrow.size / 2 + user.size) / 2 && (mouseIsPressed)) {
      state = `city1`
    }

  }

  mapDisplay() {
    push();
    imageMode(LEFT);
    image(map[mapNumber], width / 2, height / 2, width, height)
    pop();
  }




}
