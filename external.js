//1. Begin with a function ComputerPlay that randomly returns one of Rock, Paper, or Scissors//

function ComputerPlay() {
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
//3. Write a new function called game(). Call the payRound function inside of game()
    //to play a 5 round game that keeps score and reports a winner or loser at the end.
    //Hint: loops can help make the game 5 rounds.//







