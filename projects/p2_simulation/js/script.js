/**
Vivian Bui

Virtual Pet
Small and simple, straightforward virutal pet game.
User can interact with their pet with food and other items and slightly customize it.
Simulation based/inspired by jQueryUI (https://jqueryui.com/)
*/

"use strict";

$(function() {
  //General Audio for the simulation

  var sfx1 = document.createElement('audio');
  sfx1.setAttribute('src', "assets/sounds/pan14.wav");
  // source: Freesound -> https://freesound.org/people/pan14/sounds/263133/
  $('.itemButtonP').click(function() {
    sfx1.play();
  });

  var sfx2 = document.createElement('audio');
  sfx2.setAttribute('src', "assets/sounds/dland.wav");
  // source: Freesound -> https://freesound.org/people/dland/sounds/320181/
  $('.itemButtonN').click(function() {
    sfx2.play();
  });

  var sfx4 = document.createElement('audio');
  sfx4.setAttribute('src', "assets/sounds/junggle.mp3");
  // source: Freesound -> https://freesound.org/people/junggle/sounds/26777/
  $('.buttonSound').click(function() {
    sfx4.play();
  });
  //Target each bar's value
  var v1 = document.getElementById('progressbar').value; // hunger (1)
  var v2 = document.getElementById('progressbar2').value; // mood (2)
  var v3 = document.getElementById('progressbar3').value; // health (3)

  // Organize UI tabs
  $("#tabs").tabs();

  //open reset button
  let button = document.getElementById(`btnReset`);
  button.addEventListener(`click`, function(event) {
    $(".dialog").dialog("open");
  });

  // change look of the pet depending on the chosen options
  // answer taken online -> https://stackoverflow.com/questions/36666334/jquery-change-image-when-select-changes
  // change pet's look (figure)
  $("#petType").change(function() {
    $("img[name=image-swap]").attr("src", $(this).val());
  });

  // change pet's mouths
  $("#petMouth").change(function() {
    $("img[name=mouth-swap]").attr("src", $(this).val());
  });

  // change pet's accessory
  $("#petAcc").change(function() {
    $("img[name=accessory-swap]").attr("src", $(this).val());
  });


  //Button to alternate pet image colors
  // answer taken online -> https://codepen.io/rvsanches/pen/djydEj
  $("#toggleColor").click(function() {
    if ($("#toggleColor").val() == "Dark") {
      $("#toggleColor").val("Light");
    } else {
      $("#toggleColor").val("Dark");
    }
    $(".invertedColor").toggleClass("filter");

  });

  //Message notifying when user changes pet's name
  //answer taken online -> https://www.sanwebe.com/snippet/simple-done-typing-jquery-function
  var timer = null;
  $("#nameInput").keydown(function() {
    clearTimeout(timer);
    timer = setTimeout(renamedPet, 1000) // 1 second wait
  });

  function renamedPet() {
    let namedPet = $("#nameInput").val();
    //message appear in log window
    $("#log").append("You renamed your pet to " + namedPet + "<br>");
    updateScroll();
  }

  // Cooldowns (disable button for a certain amount of time) after click
  //standard Cooldown for most interactions (8 seconds)
  $('.cooldown').click(function() {
    var btn = $(this);
    btn.prop('disabled', true);

    setTimeout(function() {
      btn.prop('disabled', false);
    }, 8000); //8 seconds
  });

  //longer Cooldown for some interactions (30 seconds)
  $('.cooldown2').click(function() {
    var btn = $(this);
    btn.prop('disabled', true);

    setTimeout(function() {
      btn.prop('disabled', false);
    }, 30000); //30 seconds


    $("input").checkboxradio({
      icon: false
    });
  });

  //Dialog Box pop up
  //source: jquery -> https://jqueryui.com/dialog/

  //reset button dialog box
  //Choices: reset (simulation restart) or cancel (close dialog)
  $(".dialog").dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      Reset: function() { //reset (simulation restart)
        $(this).dialog("close");
        sfx2.play();
        restart();
      },
      Cancel: function() { // (close dialog)
        $(this).dialog("close");
        sfx4.play();
      }
    }
  });

  //forced introduction dialog box
  $(".dialogIntro").dialog({
    autoOpen: true,
    resizable: false,
    height: 400,
    width: 600,
    modal: true,
    buttons: {
      x: function() { // (close dialog)
        $(this).dialog("close");
        sfx4.play();

      }
    }
  });

  updateBackground(); //backgroundColor update depending on time of the day

  //Color Picker slider (Line 113 -153)
  //source: jquery -> https://jqueryui.com/slider/#colorpicker

  // Create color for room based on sliders
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString(16),
      g.toString(16),
      b.toString(16)
    ];
    $.each(hex, function(nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }

  //Customized Room color
  // Updated color (live) based on sliders
  function refreshSwatch() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $("#swatch").css("background-color", "#" + hex);
  }

  //Customized Room color sliders
  //Linking the color sliders to DIV room
  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });

  //Default sliders value
  $("#red, #green, #blue").slider("value", 230);

  // $(".drag").draggable({
  //   revert: "invalid",
  //
  // });
  // $("#droppable").droppable({
  //   drop: function(event, ui) {
  //     $(this)
  //       .find("p")
  //     $("#test").hide();
  //   }
  // });

  //Pet customization slider
  //Change pet image size depending on the slider value
  $("#slider").slider({
    range: "min",
    value: 205,
    min: 150,
    max: 255,
    slide: function(event, ui) {
      $("#amount").val(ui.value);
      document.getElementById("pet").width = ui.value;
      document.getElementById("pet").height = ui.value;

      document.getElementById("eyes").width = ui.value;
      document.getElementById("eyes").height = ui.value;

      document.getElementById("equip").width = ui.value;
      document.getElementById("equip").height = ui.value;

      document.getElementById("mouth").width = ui.value;
      document.getElementById("mouth").height = ui.value;
    }
  });
  $("#amount").val($("#slider").slider("value"));

  //Tooltip pop up in the entire document
  $(document).tooltip({
    track: true
  });

  //change cursor when mouse is on pet image
  document.getElementById("eyes").style.cursor = "pointer";

});
//
//

// Update hunger bar(1), for each interaction
//varying amounts listed in the HTML
function addHunger(amount) {
  var v1 = document.getElementById('progressbar').value;
  document.getElementById("progressbar").value = v1 + amount;
}

// Update mood bar(2), for each interaction
//varying amounts listed in the HTML
function addMood(amount) {
  var v2 = document.getElementById('progressbar2').value;
  document.getElementById("progressbar2").value = v2 + amount;
}

// Update health bar(3), for each interaction
//varying amounts listed in the HTML
function addHealth(amount) {
  var v3 = document.getElementById('progressbar3').value;
  document.getElementById("progressbar3").value = v3 + amount;
}



//Update when user interacts with pet directly
//Mouse click on the pet image
function updatePetting() {
  //Increase the mood bar(2) each click
  var v2 = document.getElementById('progressbar2').value;
  document.getElementById("progressbar2").value = v2 + 0.1;

  // Text message in log: pet name + getting pated
  let namedPet = $("#nameInput").val();
  $("#log").append("You pat " + namedPet + "!<br>");
  updateScroll();

  // Sound played when petting
  var sfx = document.createElement('audio');
  sfx.setAttribute('src', "assets/sounds/kianda.wav");
  //source: Freesound -> https://freesound.org/people/kianda/sounds/328120/
  sfx.play();

}

// Update text in the log depending on food interacted with
function updateText(item) {
  let namedPet = $("#nameInput").val();

  //Text message in log: interacted food + pet name mentionned
  $("#log").append("You gave " + namedPet + " " + item.value + "<br>");
  updateScroll();

  // When hunger bar(1) is high [bad] + mood bar(2) is high [good]
  // warning text for hunger bar(1)
  if ((v1 >= 0) && (v2 >= 1)) {
    $("#log").append(namedPet + " is full! <br>");
    decreaseMood(2);
    updateScroll();
  }
  updateBar(); //check if pet is gone
}

// Update text in the log depending on item interacted with
function updateTextItem(item) {
  let namedPet = $("#nameInput").val();

  //Text message in log: interacted item +  pet name mentionned
  $("#log").append("You gave " + namedPet + " a " + item.value + "<br>");
  updateScroll();

  // When hunger bar(1) is low [good] + mood bar(2) is low [bad]
  // warning text for mood bar(2)
  if ((v1 <= 1) && (v2 <= 0)) {
    $("#log").append(namedPet + " is upset... <br>");
    updateScroll();
  }

  // Play sound on click
  sfx1.play();

}

// Change pet eyes: happy
function positiveReact(item) {
  let namedPet = $("#nameInput").val();

  // happy face
  document.getElementById("eyes").src = "assets/images/eye1.png";
  //Return to neutral eyes after a second
  setTimeout(function() {
    document.getElementById("eyes").src = "assets/images/eye0.png";
  }, 1000); //1 seconds

  // update text log (happy)
  $("#log").append(namedPet + " liked the " + item.value + "!<br>");
  updateScroll();

}

// Change pet eyes: angry
function negativeReact(item) {
  let namedPet = $("#nameInput").val();

  // angry face
  document.getElementById("eyes").src = "assets/images/eye2.png";

  //Return to neutral eyes after a second
  setTimeout(function() {
    document.getElementById("eyes").src = "assets/images/eye0.png";
  }, 1000); //1 seconds

  // update text log (unhappy)
  $("#log").append(namedPet + " did not like the " + item.value + " ...<br>");
  updateScroll();
}

// function petReaction(item){
//   let namedPet = $("#nameInput").val();
//   if(item.value ="apple"){
//   $("#log").append(namedPet +": nom! <br><br>");
// }else {
//   $("#log").append(namedPet +": grr! <br><br>");
//
// }
//   updateScroll();
// }


// Check if pet is gone (health bar at 0)
function updateBar() {
  let namedPet = $("#nameInput").val();

  //Final message when health bar reaches 0 (death of pet)
  if (v3 <= 0) {
    $("#log").append(namedPet + " is gone... <br>");
    updateScroll();
  }
}

// 3s Interval in decrease/increase bars
var myVar = setInterval(losePoints, 3000);

function losePoints() {
  //Recall bars from the HTML
  var v1 = document.getElementById('progressbar').value;
  var v2 = document.getElementById('progressbar2').value;
  var v3 = document.getElementById('progressbar3').value;

  // Decrease/Increase of the bars on intervals
  document.getElementById("progressbar").value = v1 + 0.5;
  document.getElementById("progressbar2").value = v2 - 0.2;
  document.getElementById("progressbar3").value = v3 - 0.01;

  //if hunger bar (1) is at 0
  //faster decrease on mood bar (2) && health bar (3)
  if (v1 <= 0) {
    document.getElementById("progressbar3").value = v3 - 0.5;
    document.getElementById("progressbar2").value = v2 - 2;
  }

  //if hunger bar (1) is nearing 100 && mood bar (2) is at 0
  //faster decrease on health bar (3)
  if ((v1 >= 90) && (v2 <= 0)) {
    document.getElementById("progressbar3").value = v3 - 3;
  }

  //if mood bar (2) is at 0
  //faster decrease on health bar (3)
  if (v2 <= 0) {
    document.getElementById("progressbar3").value = v3 - 1;
  }

  //if health bar (3) is at 0
  // other two health bars appears as 0 (hunger + mood)
  if (v3 <= 0) {
    document.getElementById("progressbar").value = 0;
    document.getElementById("progressbar2").value = 0;

    freeze(); //Force user in dialog box
  }
}

//Force user into dialog box after pet's disappearance
//Forced simulation reset
function freeze() {
  document.getElementById("pet").src = "assets/images/gone.png"; //pet image replaced
  document.getElementById("eyes").src = "assets/images/gone.png"; //pet image replaced

  $(".dialogForced").dialog({ //forced dialog pop up
    autoOpen: true, //auto appears
    resizable: false,
    closeOnEscape: false, //cannot exit
    width: 400,
    modal: true,
    buttons: {
      OK: function() {
        $(this).dialog("close");
        restart(); //resets the program on click
      },
    }
  });
}

// Shifts focus onto the newest line of text
// code taken from previous student's project:
// (Computational Wizard Duel by Anne Boutet -> https://purplunicorn25.github.io/CART263/00-Projects/Project_3/index.html)
function updateScroll() {
  let textBox = document.getElementById("log");
  textBox.scrollTop = textBox.scrollHeight; //defaul scroll to the bottom of the text
}

//Changes background color based on the hour / time of the day
function updateBackground() {
  var d = new Date(); //day
  var n = d.getHours(); //time in the day

  if (n < 6) { //under 6
    document.body.style.backgroundColor = "#47a3f5"; //light blue color
  } else if (n < 12) { //between 6-12
    document.body.style.backgroundColor = "#198ff7"; //cyan blue color
  } else if (n < 18) { //between 12-18
    document.body.style.backgroundColor = "#3d89cc"; //blue color
  } else { //between 18-6
    document.body.style.backgroundColor = "#123099"; //dark blue color
  }
}

// From Reset Button dialog confirmation:
// Resets the simulation (pet, progress bars, customization, logs)
function restart() {

  //Reset Pet Image
  document.getElementById("pet").src = "assets/images/type0.png"; //appearance reset
  document.getElementById("eyes").src = "assets/images/eye0.png"; //eyes reset
  document.getElementById("mouth").src = "assets/images/accessory0.png"; //mouth reset
  document.getElementById("equip").src = "assets/images/accessory0.png"; //accessories reset

  //Reset Pet Color
  document.getElementById("toggleColor").val = "Dark"; //reset to light mode
  if ($("#toggleColor").val() == "Dark") {
    $(".invertedColor").toggleClass("filter");
  }

  // Resets Progress Bar's values back to original value (50)
  document.getElementById('progressbar').value = 50, //hunger bar
    document.getElementById('progressbar2').value = 50, //mood bar
    document.getElementById('progressbar3').value = 50, //health bar

    //Resets all sliders back to original value (255)
    $("#red").slider("value", 230);
  $("#green").slider("value", 230);
  $("#blue").slider("value", 230);

  //Resets Text Log history
  $("#log").text("");
  //Resets Pet's name
  $("#nameInput").val("?")
}

//failed tests

// function storage() {
//
//   // let namedPet = $("#nameInput").val();
//   localStorage.setItem('name', JSON.stringify(namedPet));
//   document.getElementById("#nameInput").innerHTML = localStorage.getItem("name");
//   let namedPet = JSON.parse(localStorage.getItem('name'));

// localStorage.setItem('type', JSON.stringify(petName));
// document.getElementById("#nameInput").innerHTML = localStorage.getItem("name");
// }
