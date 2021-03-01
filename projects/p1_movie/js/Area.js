
class Area {
  constructor() {

  }

  outskirt1() {
    background(150);
    arrow.displayRight();

    characters.outskirtLeft();

    d = dist(mouseX, mouseY, arrow.max, arrow.mid);
    if ((d < arrow.size / 2 + hilda.size /2)  && (mouseIsPressed)) {
      state = `outskirt2`;
    }
  }

  outskirt2() {
    background(220);
    arrow.displayLeft();
    arrow.displayBot();

    characters.outskirtRight();


    d = dist(mouseX, mouseY, arrow.min, arrow.mid);
    if ((d < arrow.size / 2 + hilda.size /2)  && (mouseIsPressed)) {
      state = `outskirt1`
    }

    d2 = dist(mouseX, mouseY, arrow.mid, arrow.side);
    if ((d2 < arrow.size / 2 + hilda.size /2)  && (mouseIsPressed)) {
      state = `city2`
    }
  }

  city1() {
    background(50);
    arrow.displayRight();

    characters.cityLeft();

    d = dist(mouseX, mouseY, arrow.max, arrow.mid);
    if ((d < arrow.size / 2 + hilda.size/2)  && (mouseIsPressed)) {
      state = `city2`
    }
  }


  city2() {
    background(100);
    arrow.displayTop();
    arrow.displayLeft();

    characters.cityRight();


    d = dist(mouseX, mouseY, arrow.mid, arrow.min);
    if ((d < arrow.size / 2 + hilda.size) / 2 && (mouseIsPressed)) {
      state = `outskirt2`
    }

    d2 = dist(mouseX, mouseY, arrow.min, arrow.mid);
    if ((d2 < arrow.size / 2 + hilda.size) / 2 && (mouseIsPressed)) {
      state = `city1`
    }

  }




}
