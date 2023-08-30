let playerWins = 0
let computerWins = 0
let results
let playerSelection;
let computerSelection;

function getComputerChoice() {
   let rng = Math.floor(Math.random() * 3)
   switch (rng) {
    case 0:
        return "rock";
        break;
    case 1:
        return "paper";
        break;
    case 2:
        return "scissors";
        break;
   }
}

//
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection)
    return ["It's a draw", "draw"]

  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper"))
      return ["Player won, " + playerSelection + " beats " + computerSelection + ".", "player"]

  if ((playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock"))
      return ["Computer won, " + computerSelection + " beats " + playerSelection + ".", "computer"]

}

function playGame() {
    playerWins = 0
    computerWins = 0
    for (let i=0; i<5; i++) {
        playerSelection = prompt("Rock, paper, scissors, type your selection", "Rock, paper, scissors").toLowerCase();
        computerSelection = getComputerChoice();
        results = playRound(playerSelection, computerSelection)
        switch(results[1]){
            case "draw":
                console.log("Round: " + (i+1));
                break;
            case "player":
                console.log("Round: " + (i+1));
                playerWins++;
                break;
            case "computer":
                console.log("Round: " + (i+1));
                computerWins++;
                break;
        }
        console.log(results[0]);

    }
    if (playerWins>computerWins){
        return ("Player won, final score: " + playerWins + "-" + computerWins);
    } else if (playerWins<computerWins){
        return ("Computer won, final score: " + playerWins + "-" + computerWins);
    } else {
        return ("Draw, final score: " + playerWins + "-" + computerWins);
    }
    }