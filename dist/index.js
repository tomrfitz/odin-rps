var userWin = 0;
var computerWin = 0;
var tie = 0;
var gameNumber = 1; // user would count from 1, also keeps header stationary at row 0
var buttons = document.querySelectorAll("button");
function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function playRound(playerSelection) {
    // this function contains the logic for a single round of Rock Paper Scissors
    // the function should take one parameter - the playerSelection
    // and then returns a result and displays the selections of both players
    if (!playerSelection) {
        var userChoice = prompt("rock, paper, or scissors?").toLowerCase();
    }
    else {
        var userChoice = playerSelection.toLowerCase();
    }
    var computerChoice = getComputerChoice();
    var playerPlay = document.getElementById("playerChoice");
    var computerPlay = document.getElementById("computerChoice");
    playerPlay.textContent = "Player played: " + userChoice;
    computerPlay.textContent = "Computer played: " + computerChoice;
    console.log("User: " + userChoice);
    console.log("Computer: " + computerChoice);
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins!";
        }
        else {
            return "User wins!";
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins!";
        }
        else {
            return "User wins!";
        }
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        }
        else {
            return "User wins!";
        }
    }
    else {
        console.log("Error!");
    }
}
function game(id) {
    // this function contains the logic for playing RPS and recording scores
    // this function takes the id of the button, Rock, Paper, or Scissors, and passes it to playRound
    result = playRound(id); // plays one round of RPS
    console.log(result);
    // this section updates the score table
    var scoretable = document.getElementById("scoretable");
    var row = scoretable.insertRow(gameNumber); // inserts new row at bottom of table
    var gameCell = row.insertCell(0); // inserts a cell for the game number, ie 8th game played
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
    }
    else if (result === "Computer wins!") {
        computerWin++;
        winnerCell.innerHTML = "Computer";
        recentWinner.innerHTML = "Computer wins! :(";
    }
    else {
        tie++;
        winnerCell.innerHTML = "Tie";
        recentWinner.innerHTML = "Tie! :O";
    }
    userCell.innerHTML = userWin;
    computerCell.innerHTML = computerWin;
    tieCell.innerHTML = tie;
    console.log("Game number: " + gameNumber);
    console.log("User wins: " + userWin);
    console.log("Computer wins: " + computerWin);
    console.log("Ties: " + tie);
    gameNumber++;
}
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        game(button.id);
    });
});