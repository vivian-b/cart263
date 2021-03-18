'use strict';

/**
E6: Raving Redactionist
Vivian

Reveal some text and erase the content

> added blinking
> added erase button (change text content and css)
> stylize through css
*/

'use strict';


$(`.top-secret`).on(`click`, redact);
setInterval(revelation, 800);


function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

//Random reveal/hide of some text
function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) { //randomized repeated action
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
    $('.revealed').removeClass(`important`);
  }
}

//title and decoration slowly flickering
function blinking() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}
setInterval(blinking, 2000); //timer


//hidden text randomly flickering red
function emphasize() {
  let r = Math.random();
  if (r < 0.2) { //randomized repeated action
    $('.important').fadeIn(500);
    $('.revealed').addClass(`important`);
  }
}
setInterval(emphasize, 100); //timer

//interacting with the written text changes the content
$(`.important`).on(`click`, change);
function change() {
  $(this).text('Ipsum'); //change text to "ipsum"
}

//interactions when pressing on the "erase" button
$('button').click(function() {
  $('p').css('color', 'black'); //change text to black
  $('body').css('background-color', 'white'); //change background to white
  $('p').text('[erased]'); //change text content to [erased]
  $('button').remove(); //delete the button
  $('.blink').removeClass(`blink`); //stop blinking effect

});
