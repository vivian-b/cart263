/**
Titlescreen:
Bacground and text display for start of simulation
*/

// instruction text stringes
let instruction1 = `Explore the outskirts and the city !\nInteract with creatures and people by clicking on them. `
let instruction2 = `"press A" to go on an adventure with Alfur\nor "press T" to go with Twig !`

class Titlescreen {
  constructor() {
    // background color
    this.bg = {
      r: 73,
      g: 189,
      b: 155,
    }
    //text color
    this.fill = {
      r: 250,
      g: 191,
      b: 59,
      //white
      w: 255,
    }
    //text size
    this.size = {
      large: 140, //title
      small: 30, //instruction
    }
    //text positioning
    this.position = 95;

    //title positioning (shift from the center)
    this.shift = 45
  }

  //title card display with simple background and centered text
  display() {
    push();
    textAlign(CENTER);

    // color management
    background(this.bg.r, this.bg.g, this.bg.b); //turquoise background color
    fill(this.fill.r, this.fill.g, this.fill.b); //yellow text color

    //title text: center, yellow, large
    textSize(this.size.large); //title size
    text(`exploring\nTrolberg`, width / 2, (height / 2 - this.shift)); //title position

    //instruction text: top and bottom from title, white, small
    fill(this.fill.w);
    textSize(this.size.small);
    text(instruction1, width / 2, height - this.position); // first instruction at the top
    text(instruction2, width / 2, this.position); // seccond instruction at the bottom
    pop();
  }
}
