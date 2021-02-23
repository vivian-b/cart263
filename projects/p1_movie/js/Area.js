let d;

class Area {
  constructor() {

}

city1(){
  background(50);
  arrow.display();

  d = dist(mouseX, mouseY, arrow.x, arrow.y);
    if ((d < arrow.size / 2 + hilda.size) / 2 && (mouseIsPressed)) {
      state = `city2`
}
}



city2(){
  background(100);
  arrow.display();
  d = dist(mouseX, mouseY, arrow.x, arrow.y);
    if ((d < arrow.size / 2 + hilda.size) / 2 && (mouseIsPressed)) {
      state = `city1`
}

}

outskirt1(){
  background(150);
  arrow.display();

  d = dist(mouseX, mouseY, arrow.x, arrow.y);
    if ((d < arrow.size / 2 + hilda.size) / 2 && (mouseIsPressed)) {
      state = `outskirt2`
}
}

outskirt2(){
  background(200);
  arrow.display();

  d = dist(mouseX, mouseY, arrow.x, arrow.y);
    if ((d < arrow.size / 2 + hilda.size) / 2 && (mouseIsPressed)) {
      state = `outskirt1`
}
}

}
