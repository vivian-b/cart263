
let instruction1 = `explore the outskirts and the city !\nInteract with creatures and people by clicking on them. `
let instruction2 =  `" press A" to go on an adventure with Alfur\nor "press T" to go with Twig!`
class Titlescreen {
  constructor() {

  }

display(){
  push();
background(73, 189, 155);
fill(254,191,59);
textAlign(CENTER);
textSize(100);
text(`exploring\nTrolberg`, width/2, (height/2-45 ));
fill(250);

textSize(30);
text(instruction1, width/2, height-100);
text(instruction2, width/2, 95 );
pop();
}


}
