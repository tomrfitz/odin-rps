function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection) {
  if (!playerSelection) {
    var userChoice = prompt("rock, paper, or scissors?").toLowerCase();
  } else {
    var userChoice = playerSelection.toLowerCase();
  }
  var computerChoice = getComputerChoice();
  var playerPlay = document.getElementById("playerChoice");
  var computerPlay = document.getElementById("computerChoice");

  playerPlay.textContent = userChoice;
  computerPlay.textContent = computerChoice;
  console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  } else {
    console.log("Error!");
  }
}

function game(id) {
  result = playRound(id);
  console.log(result);
  var scoretable = document.getElementById("scoretable");
  var row = scoretable.insertRow(gameNumber);
  var gameCell = row.insertCell(0);
  gameCell.innerHTML = gameNumber;
  var winnerCell = row.insertCell(1);
  var userCell = row.insertCell(2);
  var computerCell = row.insertCell(3);
  var tieCell = row.insertCell(4);
  var recentWinner = document.getElementById("recentWinner");
  if (result === "User wins!") {
    userWin++;
    winnerCell.innerHTML = "User";
    recentWinner.innerHTML = "User wins! :D";
  } else if (result === "Computer wins!") {
    computerWin++;
    winnerCell.innerHTML = "Computer";
    recentWinner.innerHTML = "Computer wins! :(";
  } else {
    tie++;
    winnerCell.innerHTML = "Tie";
    recentWinner.innerHTML = "Tie! :O";
  }
  userCell.innerHTML = userWin;
  computerCell.innerHTML = computerWin;
  tieCell.innerHTML = tie;

  gameNumber++;
  console.log("Game number: " + gameNumber);
  console.log("User wins: " + userWin);
  console.log("Computer wins: " + computerWin);
  console.log("Ties: " + tie);
}

let userWin = 0;
let computerWin = 0;
let tie = 0;
let gameNumber = 1;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    game(button.id);
  });
});
