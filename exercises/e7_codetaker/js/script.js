"use strict";

/**
FOOD TAKER
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    ":D": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`#wrong-dialog`).dialog({
  autoOpen: false,
  buttons: {
    ":c": function() {
      $(this).dialog(`close`);
    }
  }
});

//hint appears once
$(`.good`).one(`mouseover`, function(event) {
  $(this).addClass(`want`, 500);
  $(this).draggable()
});

//hint disappears
$(`.good`).one(`mouseout`, function(event) {
  $(this).removeClass(`want`, 500);
});

//hint appears once
$(`.bad`).one(`mouseover`, function(event) {
  $(this).addClass(`reject`, 500);
  $(this).draggable()

});

//hint disappears
$(`.bad`).one(`mouseout`, function(event) {
  $(this).removeClass(`reject`, 500);
});


$(`#answer`).droppable({
  drop: function(event, ui) {
    let word = ui.draggable.text();
    $(this).append(word); //answer area
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`); //remove highlight
    // Check if they got it
    if (($(this).text() === `apples`)||($(this).text() === `pears`)||($(this).text() === `grapes`)||($(this).text() === `peaches`)){
      $(`#solved-dialog`).dialog(`open`);
      $(this).text(``); //answer area
    }


    if (($(this).text() === `shoe`)||($(this).text() === `poop`)||($(this).text() === `poison`)){
      $(`#wrong-dialog`).dialog(`open`);
      $(this).text(``); //answer area
    }
  }
});
