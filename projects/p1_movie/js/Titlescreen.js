let instruction1 = `explore the outskirts and the city !\nInteract with creatures and people by clicking on them. `
let instruction2 = `" press A" to go on an adventure with Alfur\nor "press T" to go with Twig !`

class Titlescreen {
  constructor() {

    this.bg = {
      r: 73,
      g: 189,
      b: 155,
    }
    this.fill = {
      r: 250,
      g: 191,
      b: 59,
      w: 255,
    }
    this.size = {
      large: 140,
      small: 30,

    }
    this.shift = 105;
  }

  display() {
    push();
    textAlign(CENTER);

    background(this.bg.r, this.bg.g, this.bg.b);
    fill(this.fill.r, this.fill.g, this.fill.b);
    textSize(this.size.large);

    text(`exploring\nTrolberg`, width / 2, (height / 2 - 45));

    fill(this.fill.w);

    textSize(this.size.small);
    text(instruction1, width / 2, height - shift);
    text(instruction2, width / 2, shift);
    pop();
  }


}
