// Back End Logic

var beep = new Audio('media/bleep_01.wav');
var boop = new Audio('media/bleep_05.wav');
var sorry = new Audio('media/cantdo.wav');

var memoryBanks = [];

function totalScreen() {
  var total = 0;
  memoryBanks.forEach(function(value, index) {
   var num = parseInt(value);

   if (num === num) {
     total = total + num;

   } else {
     memoryBanks.splice(index, 1);
   }
 });
 return total;
}

var numCheck = function(number) {
  var numberArray = [];

  for (var j=0; j <= number; j++) {
    numberArray.push(j);

    if ((numberArray[j] === 0) || (numberArray[j]%3 === 0)) {
      numberArray[j] = "I'm sorry, Dave.";

    } else if (/1.*/.test(numberArray[j])) {
      numberArray[j] = "BOOP";

    } else if (/0.*/.test(numberArray[j])) {
      numberArray[j] = "BEEP";
    }
  }

  var newReturn = numberArray.join(" ");
  return newReturn;
}

var reverseString = function(str) {
  var reversedString = str.split("");
  reversedString = reversedString.reverse();
  reversedString = reversedString.join("");
  return reversedString;
}

// Interface Logic

$(function () {
  $("form#beep-form").submit(function(event) {
    event.preventDefault();
    $("#output").html("");

    var output = "";
    var animator = 0;
    var speed = 20;
    var userInput = parseInt($("input#userInput").val());
    memoryBanks.push(userInput);

    if (userInput === 0 || userInput%3 === 0) {
      sorry.play();

    } else if (/1.*/.test(userInput)) {
      $("#title").addClass("shake-horizontal");
      setTimeout(function() {
        $("#title").removeClass("shake-horizontal");
      }, 350);
      boop.play();

    } else if (/0.*/.test(userInput)) {
      $("#title").addClass("shake-horizontal");
      setTimeout(function() {
        $("#title").removeClass("shake-horizontal");
      }, 350);
      beep.play();
    }
    // wasn't able to move this outside of submit because of scope issues with the input trying to be passed from the submit function to another function outside it
    function printOut() {
      if (animator < output.length) {
        $("#output").append(output.charAt(animator));
        animator++;
        setTimeout(printOut, speed);
      }
    }

    if ($("#reverse-box").prop("checked") == true) {
      output = numCheck(userInput);
      output = reverseString(output);
      printOut(output);
    } else {
      output = numCheck(userInput);
      printOut(output);
    }
  });

  $("button#full-print").click(function() {
    var total = totalScreen();

    $("#output").html("<p>" + memoryBanks.join(" ") + "</p>");
    $("#output").append("<p> Total: " + total.toString() + "</p>");
  });

  $("#attr-btn").click(function() {
   $('#attr-toggle').toggle();
 });
});
