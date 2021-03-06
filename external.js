
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const results = document.getElementById('round-results');
const tallyC = document.getElementById('tally-comp');
const tallyP = document.getElementById('tally-play');
const bestOf = document.getElementById('bestOf')

let computerScore = 0;
let playerScore = 0;

window.onload=function() {

    //button event listeners
rock.addEventListener('click', ()=>  {
    playRound('rock');
 });
paper.addEventListener('click', ()=>  {
    playRound('paper');
});
scissors.addEventListener('click', ()=>  {
    playRound('scissors');
});

//create a function that checks if computer or play has scored 5 & announce winner

function checkScore() {
    if (computerScore === 5) {
        bestOf.textContent = "Computer wins first to 5! Reload the page to play again.";
    } else if (playerScore === 5) {
        bestOf.textContent = "Player wins first to 5! Reload the page to play again.";
    }

}

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

function playRound(variable) {
    let playerSelectionLowerCase = variable.toLowerCase();
    let computerSelectionLowerCase = computerPlay().toLowerCase();

    if ((playerSelectionLowerCase == "rock") && (computerSelectionLowerCase == "paper")) {
        results.textContent = "You lose! Paper beats rock!", tallyC.textContent += "I", computerScore += 1;
    } else if ((playerSelectionLowerCase == "rock") && (computerSelectionLowerCase == "rock")) {
        results.textContent = "A draw! Try again!";
    } else if ((playerSelectionLowerCase == "rock") && (computerSelectionLowerCase == "scissors")) {
        results.textContent = "You win! Rock beats Scissors!", tallyP.textContent += "I", playerScore += 1;
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "paper")) {
        results.textContent = "A draw! Try again!"
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "rock")) {
        results.textContent = "You win! Paper beats rock!", tallyP.textContent += "I", playerScore += 1;
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "scissors")) {
        results.textContent = "You lose! Scissors beat paper!", tallyC.textContent += "I", computerScore += 1;
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "paper")) {
        results.textContent = "You win! Scissors beat paper!", tallyP.textContent += "I", playerScore += 1;
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "rock")) {
        results.textContent = "You lose! Rock beats scissors!", tallyC.textContent += "I", computerScore += 1;
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "scissors")) {
        results.textContent = "A draw! Try again.";
    } else {return results.textContent = "Not a valid input! Parameter values must be rock, paper, or scissors.";}

    checkScore();

}



}

//function fiveRoundGame() {
    //for (i=0; i<5; i++) {
    //    console.log(playRound());
    //}
//}

//3. Write a new function called game(). Call the payRound function inside of game()
    //to play a 5 round game that keeps score and reports a winner or loser at the end.
    //Hint: loops can help make the game 5 rounds.//





