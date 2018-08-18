$(function () {
  var memoryBanks = [];
  var beep = new Audio('media/bleep_01.wav');
  var boop = new Audio('media/bleep_05.wav');
  var sorry = new Audio('media/cantdo.wav');

  var numCheck = function(number) {
    // var returnedValue = "";
    var numberArray = [];
    for (var i = 0; i < number+1; i++) {
      numberArray.push(i);
    }
    for (var j=0; j < numberArray.length; j++) {
      if ((numberArray[j] === 0) || (numberArray[j]%3 === 0)) {
        numberArray[j] = "I'm sorry, Dave.";
      } else if (/1.*/.test(numberArray[j])) {
        numberArray[j] = "BOOP";
      } else if (/0.*/.test(numberArray[j])) {
        numberArray[j] = "BEEP";
      }
    }
    console.log(numberArray);
    if (number === 0) {
      sorry.play();
      // returnedValue = "I'm sorry, Dave. I'm afraid I can't do that. You cannot divide the infinite nothing.";
    } else if (number%3 === 0){
      sorry.play();
      // returnedValue = "I'm sorry, Dave. I'm afraid I can't do that. I have not been programmed to process multiples of three.";

    } else if (/1.*/.test(number)) {
      $("#title").addClass("shake-horizontal");
      setTimeout(function() {
        $("#title").removeClass("shake-horizontal");
      }, 350);
      boop.play();
      // returnedValue = "BOOP";

    } else if (/0.*/.test(number)) {
      $("#title").addClass("shake-horizontal");
      setTimeout(function() {
        $("#title").removeClass("shake-horizontal");
      }, 350);
      beep.play();
      // returnedValue = "BEEP";

    } else {
     console.log("No catches.");
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

  $("form#beep-form").submit(function(event) {
    event.preventDefault();
    $("#output").html("");

    var output = "";
    var animator = 0;
    var speed = 20;
    var userInput = parseInt($("input#userInput").val());

    memoryBanks.push(userInput);


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
    var total= 0;

    memoryBanks.forEach(function(value, index) {
      var num = parseInt(value);
      if (num === num) {
      console.log(num);
      total = total + num;
    } else {
      memoryBanks.splice(index, 1);
      console.log(num);
    }
    });

    var printMemory = memoryBanks.join(" ");

    $("#output").html("<p>" + printMemory + "</p>");
    $("#output").append("<p> Total: " + total.toString() + "</p>");
  });

  $("#attr-btn").click(function() {
   $('#attr-toggle').toggle();
 });
});
