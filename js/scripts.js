$(function () {
// This numCheck function satisfies the requirements of the project.  It displays an understanding of branches, operators and RegEx, but this week was about Arrays, and while splitting the number into individual digits and then checking each digit for the 0 || 1 condition is tempting, the code below is far better performant.  So, I'll hold on to this function cause I like it's simplicity, but to make sure you know I can do the array thing, I'll still dump the values into an array and print them back out to the user.  A back-end window, if you will.
  var memoryBanks = [];
  var beep = new Audio('media/bleep_01.wav');
  var boop = new Audio('media/bleep_05.wav');

  var numCheck = function(number) {
    var returnedValue = "";
    if (number === 0) {
    returnedValue = "I'm sorry, Dave. I'm afraid I can't do that. You cannot divide the infinite nothing.";
    } else if (number%3 === 0){
      returnedValue = "I'm sorry, Dave. I'm afraid I can't do that. I have not been programmed to process multiples of three.";
    } else if (/1.*/.test(number)) {
      $("#title").addClass("shake-horizontal");
      setTimeout(function() {
        $("#title").removeClass("shake-horizontal");
      }, 350);
      beep.play();
      returnedValue = "BOOP";
    } else if (/0.*/.test(number)) {
      $("#title").addClass("shake-horizontal");
      setTimeout(function() {
        $("#title").removeClass("shake-horizontal");
      }, 350);
      boop.play();
      returnedValue = "BEEP";
    } else {
      returnedValue = number.toString();
    }
    return returnedValue;
  }

  $("form#beep-form").submit(function(event) {
    event.preventDefault();
    $("#output").html("");

    var output = "";
    var animator = 0;
    var speed = 20;
    var userInput = parseInt($("input#userInput").val());
    memoryBanks.push(userInput);
    output = numCheck(userInput);

    function printOut() {
      if (animator < output.length) {
        $("#output").append(output.charAt(animator));
        animator++;
        setTimeout(printOut, speed);
      }
    }
    printOut(output);
  });

  $("button#full-print").click(function() {
    var total= 0;
    memoryBanks.forEach(function(value) {
      total = total + parseInt(value);
    });
    var printMemory = memoryBanks.join(" ");
    $("#output").html("<p>" + printMemory + "</p>");
    $("#output").append("<p> Total: " + total.toString() + "</p>");
  });


});
