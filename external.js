//1. Begin with a function ComputerPlay that randomly returns one of Rock, Paper, or Scissors//

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

//2. Write a function that plays a single round of rock paper scissors
    //two parameters: playerSelection and computerSelection
    //make playerSelection case-insensiive
    //return string declaring winner ("You Lose! Paper beats rock!" etc)

function playRound(playerSelection, computerSelection) {
    //render parameters case insensitive//
    
    if ((playerSelection = "rock") && (computerSelection = "paper")) {
        return "You Lose! Paper beats rock!"
    } else if ((playerSelection = "rock") && (computerSelection = "rock")) {
        return "A Draw! Try again!"
    } else if ((playerSelection = "rock") && (computerSelection = "scissors")) {
        return "You Win! Rock beats Scissors!"
    }

}

//3. Write a new function called game(). Call the payRound function inside of game()
    //to play a 5 round game that keeps score and reports a winner or loser at the end.
    //Hint: loops can help make the game 5 rounds.//







