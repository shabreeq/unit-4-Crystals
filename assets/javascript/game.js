// Create a random number for the computer 

// Each crystal will be a button that generates a random number

// If your sum equals the computers random number you will, if not you lose.

var computerChoice = Math.floor(Math.random() * 101 + 19);
$("#randomNumber").text(computerChoice);

  console.log(computerChoice);

  var Wins = "userWins";
  var Losses = "userLosses";
  var Score = "totalScore";

var userChoice = document.getElementById("score");

  var crystal1 = "crystal1";
  var crystal2 = "crystal2";
  var crystal3 = "crystal3";
  var crystal4 = "crystal4";

var arrayCrystals = ["../images/crystal 1.jpg","../images/crystal 2.jpg","../images/crystal 3.jpg","../images/crystal 4.jpg"];