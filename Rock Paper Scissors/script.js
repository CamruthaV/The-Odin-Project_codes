function getComputer() {
    var computer = Math.floor(Math.random() * 3);
    return computer;
}

function getHuman() {
    var human = prompt("Rock, Paper, or Scissors?\n");
    human = human.toLowerCase();
    return human;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === 0) {
        console.log("You win! Rock beats Scissors!\n");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === 1) {
        console.log("You win! Paper beats Rock!\n");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === 2) {
        console.log("You win! Scissors beats Paper!\n");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === 1) {
        console.log("You lose! Paper beats Rock!\n");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === 2) {
        console.log("You lose! Scissors beats Paper!\n");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === 0) {
        console.log("You lose! Rock beats Scissors!\n");
        computerScore++;
    } else {
        console.log("It's a tie!\n");
    }
}

function game() {
    var rounds = 5; // Number of rounds to play
    for (var i = 0; i < rounds; i++) {
        var humanChoice = getHuman();
        var computerChoice = getComputer();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Scores:");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
game();
