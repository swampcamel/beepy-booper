$(function () {

  var numCheck = function(number) {
    var returnedValue = "";
    if (number%3 === 0){
      return = "I'm sorry, Dave, "
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
    var userInput = parseInt($("input#userInput").val());
    output = numCheck(userInput);

    $("#output").text(output);

  });

});
