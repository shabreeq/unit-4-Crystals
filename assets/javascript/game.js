// Create a random number for the computer 

// Each crystal will be a button that generates a random number

// If your sum equals the computers random number you will, if not you lose.

var computerChoice = document.getElementById("randomNumber").innerHTML = Math.floor((Math.random));
  console.log(computerChoice);

  var Wins = "userWins";
  var Losses = "userLosses";
  var Score = "totalScore";

var userChoice = document.getElementById("score")