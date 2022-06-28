function computerPlay() {
  let choices = ["Rock", "Paper", "Scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  let message = "";
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log('player: ' + playerSelection + ' ' + 'computer: ' + computerSelection)
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        message = "You Lose! Paper beats Rock";
      } else if (computerSelection === "scissor") {
        message = "You Win! Rock beats Scissor";
      } else {
        message = "It's a tie!";
      }

      break;

    case "scissor":
      if (computerSelection === "rock") {
        message = "You Lose! Rock beats Scissor";
      } else if (computerSelection === "paper") {
        message = "You Win! Scissor beats  Paper";
      } else {
        message = "It's a tie!";
      }

      break;

    case "paper":
      if (computerSelection === "scissor") {
        message = "You Lose! Scissor beats Paper";
      } else if (computerSelection === "rock") {
        message = "You Win! Paper beats Rock";
      } else {
        message = "It's a tie!";
      }

      break;

    default:
        message = 'de nada'
      break;
  }
  return message;
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


