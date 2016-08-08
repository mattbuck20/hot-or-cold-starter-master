var answer;
var userGuess = 0;
var counter = 0;
var winner = false;

$(document).ready(function(){
  
  $("#form").submit(function() {
    event.preventDefault();
    guessClick();
  });

  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    if (answer === undefined) {
      newGame();
    }

    $(".new").click(function() {
      newGame();

    });

    var guessClick = function(){

      userGuess = $("#userGuess").val();
      var newGuess = $("<li></li>").text(userGuess);
      if (userGuess % 1 !== 0 || userGuess <= 0 || userGuess > 100) {
      $("#feedback").text("Please enter a number between 1 and 100!")
      } 

      else if (winner == true) {
          $("#feedback").text("Click NEW GAME to play again!");
      }
      else {
        feedback(userGuess);
        counter++;
        $("#guessList").append(newGuess);
        $("#count").text(counter);
      }
      //remove guess from field
      $("#userGuess").val("")

      if (winner == false) {
      $("#userGuess").attr("placeholder", "Try again!")
      } else {
        $("#userGuess").attr("placeholder", "WINNER!");
      };
    }; //Guess button function end

}); 
    var randomNumber = function() {
      answer = 1 + Math.floor(Math.random()*100);
    }


    /*--- New game function ---*/
    var newGame = function() {
      winner = false;
      randomNumber();
      counter = 0;
      $("#count").text(counter);
      $("#feedback").text("Make your guess!");
      $("#userGuess").val("");
      $("#userGuess").attr("placeholder", "Enter your Guess!");
      $("#guessList li").remove();
      console.log("answer: "+ sanswer);
     }; 

     var text;
     var feedback = function() {

        userGuess = $("#userGuess").val();

        if ((userGuess > (answer - 5)) && (userGuess < (answer + 5))) {
            text = "smokin' hot";
            if (userGuess == answer){
              text = "You got it!";
              winner = true;
            };
          } 
        else if ((userGuess > (answer - 15)) && (userGuess < (answer + 15))){
            text = "warm";
          }
        else if ((userGuess > (answer - 50)) && (userGuess < (answer + 50))){
          text = "cold";
          }
        else if ((userGuess > (answer - 75)) && (userGuess < (answer + 75))){
          text = "ice cold, baby!";
          }
  
        $("#feedback").text(text);
     };