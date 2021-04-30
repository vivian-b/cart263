/**
Virtual Blob
Vivian Bui

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

$(document).ready(function() {


  var v1 = document.getElementById('progressbar').value;
  var v2 = document.getElementById('progressbar2').value;
  var v3 = document.getElementById('progressbar3').value;

  updateBackground();
// storage();
  $("#tabs").tabs();

  let button = document.getElementById(`btnReset`);

  button.addEventListener(`click`, function(event) {
    $(".dialog").dialog("open");
  });

  $(".dialog").dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      Reset: function() {
        $(this).dialog("close");
        restart();
      },
      Cancel: function() {
        $(this).dialog("close");
      }
    }
  });


  $("#petType").change(function() {
    $("img[name=image-swap]").attr("src", $(this).val());

  });

  $("#toggleColor").click(function() {

    if ($("#toggleColor").val() == "Light") {
      $("#toggleColor").val("Dark");
    } else {
      $("#toggleColor").val("Light");
    }
    $("img").toggleClass("filter");

  });

  var timer = null;
  $("#nameInput").keydown(function() {
    clearTimeout(timer);
    timer = setTimeout(doStuff, 1000)
  });

  function doStuff() {
    let namedPet = $("#nameInput").val();
    $("#log").append("You renamed your pet to " + namedPet + "<br>");
    updateScroll();
  }

  $('.cooldown').click(function() {
    var btn = $(this);
    btn.prop('disabled', true);

    setTimeout(function() {
      btn.prop('disabled', false);
    }, 8000); //8 seconds
  });

  $('.cooldown2').click(function() {
    var btn = $(this);
    btn.prop('disabled', true);

    setTimeout(function() {
      btn.prop('disabled', false);
    }, 30000); //30 seconds
  });

});


function addHunger(amount) {
  var v1 = document.getElementById('progressbar').value;
  document.getElementById("progressbar").value = v1 + amount;
  positiveReact();
}

function addMood(amount) {
  var v2 = document.getElementById('progressbar2').value;
  document.getElementById("progressbar2").value = v2 + amount;
  positiveReact();
}

function decreaseMood(amount) {
  var v2 = document.getElementById('progressbar2').value;
  document.getElementById("progressbar2").value = v2 - amount;
  negativeReact();
}

function addHealth(amount) {
  var v3 = document.getElementById('progressbar3').value;
  document.getElementById("progressbar3").value = v3 + amount;
}

function positiveReact() {
  // document.getElementById("pet").src = "assets/images/animal1.png";
}

function negativeReact() {
  // document.getElementById("pet").src = "assets/images/animal0.png";
}

$(function() {
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

  function refreshSwatch() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $("#swatch").css("background-color", "#" + hex);
  }

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });

  $("#red, #green, #blue").slider("value",255);

});

$(function() {
  $("#slider").slider({
    range: "min",
    value: 250,
    min: 150,
    max: 300,
    slide: function(event, ui) {
      $("#amount").val(ui.value);
      document.getElementById("pet").width = ui.value;
      document.getElementById("pet").height = ui.value;
    }
  });
  $("#amount").val($("#slider").slider("value"));
});

$(function() {
  $(".drag").draggable({
    revert: "invalid",

  });
  $("#droppable").droppable({
    drop: function(event, ui) {
      $(this)
        .find("p")
      $("#poo").hide();
    }

  });
});

function updatePetting() {
  document.getElementById("pet").animate({
    left: "-=30px"
  }, 9000);
  document.getElementById("pet").style.cursor = "pointer";

  var v2 = document.getElementById('progressbar2').value;
  document.getElementById("progressbar2").value = v2 + 0.1;

  let namedPet = $("#nameInput").val();

  $("#log").append("You pat " + namedPet + "!<br>");
  updateScroll();

}

function updateText(item) {
  let namedPet = $("#nameInput").val();

  $("#log").append("You gave " + namedPet + " " + item.value + "<br>");
  updateScroll();

  if ((v1 <= 0) && (v2 >= 1)) {
    $("#log").append(namedPet + " is full! <br>");
    decreaseMood(2);
    updateScroll();
  }
  updateBar();
}

function updateTextItem(item) {
  let namedPet = $("#nameInput").val();

  $("#log").append("You gave " + namedPet + " a " + item.value + "<br>");
  updateScroll();

  if ((v1 >= 1) && (v2 <= 0)) {
    $("#log").append(namedPet + " is upset... <br>");
    updateScroll();
  }

  updateBar();

}


function updateBar() {
  let namedPet = $("#nameInput").val();

  if ((v1 <= 0) && (v2 <= 0)) {
    $("#log").append(namedPet + "  is full and upset... <br>");
    updateScroll();
  }
  if (v3 <= 0) {
    $("#log").append(namedPet + " is gone... <br>");
    updateScroll();
  }

}

var myVar = setInterval(losePoints, 3000);

function losePoints() {

  var v1 = document.getElementById('progressbar').value;
  var v2 = document.getElementById('progressbar2').value;
  var v3 = document.getElementById('progressbar3').value;

  document.getElementById("progressbar").value = v1 + 0.5;

  document.getElementById("progressbar2").value = v2 - 0.2;

  document.getElementById("progressbar3").value = v3 - 0.01;

  if (v1 <= 0) {
    document.getElementById("progressbar3").value = v3 - 0.5;
    document.getElementById("progressbar2").value = v2 - 2;
  }

  if ((v1 >= 90) && (v2 <= 0)) {
    document.getElementById("progressbar3").value = v3 - 3;
  }

  if (v2 <= 0) {
    document.getElementById("progressbar3").value = v3 - 1;

  }

  if (v3 <= 0) {

    document.getElementById("progressbar").value = 0;
    document.getElementById("progressbar2").value = 0;

    freeze();
  }
}

function freeze() {
  $("#toggleColor").val("Dark");
  document.getElementById("pet").src = "assets/images/animal2.png";

  $(".dialogForced").dialog({
    autoOpen: true,
    resizable: false,
    closeOnEscape: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      OK: function() {
        $(this).dialog("close");
        restart();
      },
    }
  });
}

function updateScroll() {
  // Scroll to the bottom of the recap div
  let textBox = document.getElementById("log");
  textBox.scrollTop = textBox.scrollHeight;
}

$(function() {
  $(document).tooltip({
    track: true
  });
});

function updateBackground() {
  var d = new Date();
  var n = d.getHours();

  if (n < 6) {
    document.body.style.backgroundColor = "#47a3f5";
  } else if (n < 12) {
    document.body.style.backgroundColor = "#198ff7";
  } else if (n < 18) {
    document.body.style.backgroundColor = "#3d89cc";
  } else {
    document.body.style.backgroundColor = "#123099";
  }
}

function restart() {
  document.getElementById('progressbar').value = 50,
  document.getElementById('progressbar2').value = 50,
  document.getElementById('progressbar3').value = 50,

  $("#red").slider("value", 255);
  $("#green").slider("value", 255);
  $("#blue").slider("value", 255);

  $("#log").text("");
  $("#nameInput").val("")
}



// function storage() {
//
//   let namedPet = $("#nameInput").val();
//   localStorage.setItem('name', JSON.stringify(namedPet));
//   document.getElementById("#nameInput").innerHTML = localStorage.getItem("name");
//   // let namedPet = JSON.parse(localStorage.getItem('name'));
//
//   // localStorage.setItem('type', JSON.stringify(petName));
//   // document.getElementById("#nameInput").innerHTML = localStorage.getItem("name");
// }



// //Save the values to Localstorage
// localStorage.setItem('first','firstvalue');
// localStorage.setItem('second','secondvalue');
//
// //Retrieve the values from localstorage
// localStorage.getItem('first')
// //"firstvalue"
// localStorage.getItem('second')
// //"secondvalue"
