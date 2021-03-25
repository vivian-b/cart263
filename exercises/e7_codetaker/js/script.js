"use strict";

/**
FOOD TAKER
Vivian Bui

Feed the black box with the appropriate words (food).
Dialogue box appears once the word is dragged into the box.
*/

"use strict";

//pop up when the correct word(food) is dragged into the box
$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    ":D": function() {
      $(this).dialog(`close`);
    }
  }
});

//pop up when the wrong word(non-eddible) is dragged into the box
$(`#wrong-dialog`).dialog({
  autoOpen: false,
  buttons: {
    ":c": function() {
      $(this).dialog(`close`);
    }
  }
});

//hint appears once
//green glow for food
$(`.good`).one(`mouseover`, function(event) {
  $(this).addClass(`want`, 500); //css class gives green color
  $(this).draggable()
});
//red glow for non-eddible object
$(`.bad`).one(`mouseover`, function(event) {
  $(this).addClass(`reject`, 500); //css class gives red color
  $(this).draggable()

});

//hint fade out
//hint disappears
$(`.good`).one(`mouseout`, function(event) {
  $(this).removeClass(`want`, 500);
});
//hint disappears
$(`.bad`).one(`mouseout`, function(event) {
  $(this).removeClass(`reject`, 500);
});


//interaction between the word(answer) and the box
$(`#answer`).droppable({
  drop: function(event, ui) {
    let word = ui.draggable.text();
    $(this).append(word); //answer area adds current word that is being interacted with
    ui.draggable.draggable(`disable`); //disable drag once inside
    ui.draggable.removeClass(`found`); //remove highlight
    // Check if word dragged is food
    if (($(this).text() === `apples`)||($(this).text() === `pears`)||($(this).text() === `grapes`)||($(this).text() === `peaches`)){
      $(`#solved-dialog`).dialog(`open`);
      $(this).text(``); //answer area
    }

    // Check if word dragged is non-eddible object
    if (($(this).text() === `shoe`)||($(this).text() === `poop`)||($(this).text() === `poison`)){
      $(`#wrong-dialog`).dialog(`open`);
      $(this).text(``); //answer area
    }
  }
});
