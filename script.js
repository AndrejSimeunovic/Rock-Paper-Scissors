// TESTING branch
let playerScore = document.getElementsByClassName("score")[0];
let computerScore = document.getElementsByClassName("score")[1];

let playerWins = false;
let round = 0;
let choices = ["Rock", "Paper", "Scissor"];
const selection = { rock: "👊", paper: "✋", scissor: "✌️" };

let buttons = document
  .getElementsByClassName("selections")[0]
  .getElementsByClassName("selection");

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", getChoice);
}

function getChoice(event) {
  let icon = event.target.innerText;
  let playerChoice = Object.keys(selection).filter(
    (e) => selection[e] === icon
  )[0];
  let computerChoice = computerPlay();
  playRound(playerChoice, computerChoice);
}

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        playerWins = false;
        updateScore(playerWins);
        printSelection(playerSelection, computerSelection);
        getWinner();
      } else if (computerSelection === "scissor") {
        playerWins = true;
        updateScore(playerWins);
        printSelection(playerSelection, computerSelection);
        getWinner();
      } else {
        printSelection(playerSelection, computerSelection);
        getWinner();
      }

      break;

    case "scissor":
      if (computerSelection === "rock") {
        playerWins = false;
        updateScore(playerWins);
        printSelection(playerSelection, computerSelection);
        getWinner();
      } else if (computerSelection === "paper") {
        playerWins = true;
        updateScore(playerWins);
        printSelection(playerSelection, computerSelection);
        getWinner();
      } else {
        printSelection(playerSelection, computerSelection);
        getWinner();
      }

      break;

    case "paper":
      if (computerSelection === "scissor") {
        playerWins = false;
        updateScore(playerWins);
        printSelection(playerSelection, computerSelection);
        getWinner();
      } else if (computerSelection === "rock") {
        playerWins = true;
        updateScore(playerWins);
        printSelection(playerSelection, computerSelection);
        getWinner();
      } else {
        printSelection(playerSelection, computerSelection);
        getWinner();
      }

      break;

    default:
      break;
  }
}

function updateScore(playerWins) {
  if (playerWins) {
    playerScore.innerText = parseInt(playerScore.innerText) + 1;
  } else {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  }
}

function printSelection(player, computer) {
  let div = document.createElement("div");
  div.classList.add("round");
  div.classList.add("display-container");
  let content = `
  <span>${selection[player]}</span>
  <span>${selection[computer]}</span>
  `;
  div.innerHTML = content;
  document.getElementsByClassName("round-container")[0].appendChild(div);
}

// function printResult() {
//   console.log("player: " + playerScore + "\ncomputer: " + computerScore);
// }

// function game() {
//   let playerSelection = prompt("Choose rock, paper or scissor");

//   if (playerSelection !== null) {
//     while (validateInput(playerSelection)) {
//       playerSelection = prompt(
//         "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
//       );
//       if (playerSelection === null) {
//         return alert("Thanks for playing!");
//       }
//     }
//     let computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   } else {
//     return alert("Thanks for playing!");
//   }

//   getWinner();
// }

function getWinner() {
  round++;
  let p = document.createElement("p");
  if (round === 5) {
    let playerFinalResult = parseInt(playerScore.innerText);
    let computerFinalResult = parseInt(computerScore.innerText);
    if (playerFinalResult > computerFinalResult) {
      p.innerText = "Congratulations! You have won";
    } else if (playerFinalResult < computerFinalResult) {
      p.innerText = "You have lost to the computer!";
    } else {
      p.innerText = "It is a draw!";
    }

    let refresh = document.createElement('p')
    refresh.innerText = "Please refresh the page to start over"

    document.getElementsByClassName("winner")[0].appendChild(p);
    document.getElementsByClassName("winner")[0].appendChild(refresh);
    
    deleteIcons()
    
    
    // let btn = document.createElement('button')
    // btn.classList.add('btn')
    // btn.innerText = "Restart"
       
    // document.getElementsByClassName('winner')[0].appendChild(btn);

    //btn.addEventListener('click',restart)

  }
}


function deleteIcons() {
  let parent = document.getElementsByClassName('selections')[0]
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild)
    
  }

}

// function validateInput(input) {
//   input = input.toLowerCase();
//   let list = choices.map((e) => e.toLowerCase());
//   if (input == false || list.includes(input) == false) {
//     return true;
//   }
// }
//game();
