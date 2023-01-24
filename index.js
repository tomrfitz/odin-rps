function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound() {
  var userChoice = prompt("rock, paper, or scissors?").toLowerCase();
  var computerChoice = getComputerChoice();
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

function game() {
  let userWin = 0;
  let computerWin = 0;
  let tie = 0;
  for (let i = 0; i < 5; i++) {
    result = playRound();
    console.log(result);
    if (result === "User wins!") {
      userWin++;
    } else if (result === "Computer wins!") {
      computerWin++;
    } else {
      tie++;
    }
  }
  console.log("User wins: " + userWin);
  console.log("Computer wins: " + computerWin);
  console.log("Ties: " + tie);
}

game();
