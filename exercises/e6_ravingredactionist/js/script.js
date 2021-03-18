'use strict';

/**
Title of Project
Vivian

This is a template. You must fill in the title,
author, and this description to match your project!
*/

'use strict';

$(`.top-secret`).on(`click`, redact);
setInterval(revelation, 200);


function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

setInterval(attemptReveal, 20);

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
    $('.revealed').removeClass(`important`);
  }
}

function blinking() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}
setInterval(blinking, 2200);

setInterval(emphasize, 300);

function emphasize() {
  let r = Math.random();
  if (r < 0.2) {
    $('.important').fadeIn(500);
    $('.revealed').addClass(`important`);
  }
}

$(`.important`).on(`click`, change);

function change() {
  $(this).text('Ipsum');
}

$('button').click(function() {
  $('p').css('color', 'black');
  $('body').css('background-color', 'white');
  $('p').text('[erased]');
  $('button').remove();
  $('.blink').removeClass(`blink`);

});
