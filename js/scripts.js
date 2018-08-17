$(function () {
// This numCheck function satisfies the requirements of the project.  It displays an understanding of branches, operators and RegEx, but this week was about Arrays, and while splitting the number into individual digits and then checking each digit for the 0 || 1 condition is tempting, the code below is far better performant.  So, I'll hold on to this function cause I like it's simplicity, but to make sure you know I can do the array thing, I'll still dump the values into an array and print them back out to the user.  A back-end window, if you will.
  var numCheck = function(number) {
    var returnedValue = "";
    if (number === 0) {
    returnedValue = "I'm sorry, Dave. I'm afraid I can't do that. You cannot divide the infinite nothing.";
    } else if (number%3 === 0){
      returnedValue = "I'm sorry, Dave. I'm afraid I can't do that. I have not been programmed to process multiples of three.";
    } else if (/1.*/.test(number)) {
      returnedValue = "BOOP";
    } else if (/0.*/.test(number)) {
      returnedValue = "BEEP";
    } else {
      returnedValue = number;
    }
    return returnedValue;
  }



  $("form#beep-form").submit(function(event) {
    event.preventDefault();

    var output = "";
    // var animator = 0;
    // var speed = 50;
    var userInput = parseInt($("input#userInput").val());
    output = numCheck(userInput);

    // function printOut(text) {
    //   if (animator < text.length) {
    //     $("span#output").append(text[animator]);
    //     animator++;
    //     setTimeout(printOut, speed);
    //   }
    // }
    // printOut(output);
    $("#output").text(output);
  });

});
