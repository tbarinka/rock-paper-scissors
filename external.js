
//ensures eventListener access fully loaded DOM
window.onload=function() {
    //button variables
    var rock = document.querySelector('#rock');
    var paper = document.querySelector('#paper');
    var scissors = document.querySelector('#scissors');
    
    //button event listeners
    rock.addEventListener('click', ()=>  {
        playRound('rock');
    });
    paper.addEventListener('click', ()=>  {
       playRound('paper');
    });
    scissors.addEventListener('click', ()=>  {
        playRound('scissor');
    });
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
        return  console.log("You lose! Paper beats rock!");
    } else if ((playerSelectionLowerCase == "rock") && (computerSelectionLowerCase == "rock")) {
        return console.log("A draw! Try again!");
    } else if ((playerSelectionLowerCase == "rock") && (computerSelectionLowerCase == "scissors")) {
        return console.log("You win! Rock beats Scissors!");
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "paper")) {
       return  console.log("A draw! Try again!")
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "rock")) {
        return console.log("You win! Paper beats rock!")
    } else if ((playerSelectionLowerCase == "paper") && (computerSelectionLowerCase == "scissors")) {
        return console.log("You lose! Scissors beat paper!")
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "paper")) {
        return console.log("You win! Scissors beat paper!")
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "rock")) {
        return console.log("You lose! Rock beats scissors!")
    } else if ((playerSelectionLowerCase == "scissors") && (computerSelectionLowerCase == "scissors")) {
        return console.log("A draw! Try again")
    } else {return console.log("Not a valid input! Parameter values must be rock, paper, or scissors.")}

}



//const paper = document.querySelector('#paper');
//paper.addEventListener('click', playRound("paper"));
//const scissors = document.querySelector('#scissors');
//scissors.addEventListener('click', playRound("scissors"));

//function fiveRoundGame() {
    //for (i=0; i<5; i++) {
    //    console.log(playRound());
    //}
//}

//3. Write a new function called game(). Call the payRound function inside of game()
    //to play a 5 round game that keeps score and reports a winner or loser at the end.
    //Hint: loops can help make the game 5 rounds.//





