//1. Begin with a function ComputerPlay that randomly returns one of Rock, Paper, or Scissors//
//2. Write a function that plays a single round of rock paper scissors
    //two parameters: playerSelection and computerSelection
    //make playerSelection case-insensiive
    //return string declaring winner ("You Lose! Paper beats rock!" etc)
function computerPlay() {
    let r = (Math.random()*100)
    if (r <=32) {
        return "Rock"
    } else if (r <=65) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound() {
    let playerSelectionLowerCase = prompt().toLowerCase();
    let computerSelectionLowerCase = computerPlay().toLowerCase();
    
    if ((playerSelectionLowerCase == "rock") && (computerSelectionLowerCase == "paper")) {
        return "You lose! Paper beats rock!";
    } else if ((playerSelectionLowerCase == "rock") && (computerSelectionLowerCase == "rock")) {
        return "A draw! Try again!";
    } else if ((playerSelectionLowerCase == "rock") && (computerSelectionLowerCase == "scissors")) {
        return "You win! Rock beats Scissors!";
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "paper")) {
        return "A draw! Try again!"
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "rock")) {
        return "You win! Paper beats rock!"
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "scissors")) {
        return "You lose! Scissors beat paper!"
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "paper")) {
        return "You win! Scissors beat paper!"
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "rock")) {
        return "You lose! Rock beats scissors!"
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "scissors")) {
        return "A draw! Try again"
    } else {return "Not a valid input! Parameter values must be rock, paper, or scissors."}

}

function game() {
    for (i=0; i<5; i++) {
        console.log(playRound());
    }
}

//3. Write a new function called game(). Call the payRound function inside of game()
    //to play a 5 round game that keeps score and reports a winner or loser at the end.
    //Hint: loops can help make the game 5 rounds.//





