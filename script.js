let playerScore = 0;
let computerScore = 0;
let playerWins = false;
let round = 1;
let choices = ["Rock", "Paper", "Scissor"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  console.log("Round: " + round + "\n");
  round++;
  let message = "";
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(
    "players choice: " +
      playerSelection +
      "\n" +
      "computers choice: " +
      computerSelection
  );
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        message = "You Lose! Paper beats Rock";
        playerWins = false;
        updateScore(playerWins);
        printResult();
      } else if (computerSelection === "scissor") {
        message = "You Win! Rock beats Scissor";
        playerWins = true;
        updateScore(playerWins);
        printResult();
      } else {
        message = "It's a tie!";
        printResult();
      }

      break;

    case "scissor":
      if (computerSelection === "rock") {
        message = "You Lose! Rock beats Scissor";
        playerWins = false;
        updateScore(playerWins);
        printResult();
      } else if (computerSelection === "paper") {
        message = "You Win! Scissor beats  Paper";
        playerWins = true;
        updateScore(playerWins);
        printResult();
      } else {
        message = "It's a tie!";
        printResult();
      }

      break;

    case "paper":
      if (computerSelection === "scissor") {
        message = "You Lose! Scissor beats Paper";
        playerWins = false;
        updateScore(playerWins);
        printResult();
      } else if (computerSelection === "rock") {
        message = "You Win! Paper beats Rock";
        playerWins = true;
        updateScore(playerWins);
        printResult();
      } else {
        message = "It's a tie!";
        printResult();
      }

      break;

    default:
      break;
  }
  return message + "\n------------------------------\n";
}

function updateScore(playerWins) {
  if (playerWins) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function printResult() {
  console.log("player: " + playerScore + "\ncomputer: " + computerScore);
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper or scissor");

    if (playerSelection !== null) {
      while (validateInput(playerSelection)) {
        playerSelection = prompt(
          "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
        );
        if (playerSelection === null) {
          return alert("Thanks for playing!");
        }
      }
      let computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
    } else {
      return alert("Thanks for playing!");
      
    }
  }
  getWinner();
}

function getWinner() {
  if (playerScore > computerScore) {
    alert("Congratulations! You have won");
  } else if (playerScore < computerScore) {
    alert("You have lost to the computer!");
  } else {
    alert("It is a draw!");
  }
  playerScore = 0;
  computerScore = 0;
}

function validateInput(input) {
  input = input.toLowerCase();
  let list = choices.map((e) => e.toLowerCase());
  if (input == false || list.includes(input) == false) {
    return true;
  }
}
game();
