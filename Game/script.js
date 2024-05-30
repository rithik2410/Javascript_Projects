let playGame = confirm("Shall we play Game?");
if(playGame){
    let playerChoice = prompt("Please Enter rock,paper,or scissor");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase()
        if(
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissor"
        ){
            let computerChoice = Math.floor(Math.random()*3);
            let computer =
               computerChoice === 1 
               ? "rock"
               : computerChoice === 2
               ? "paper" 
               : "scissor";

            let result =
            playerOne === computerChoice
            ? "Tie Game!"
            :playerOne === "rock" && computer === "paper"
            ?  `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            :playerOne === "paper" && computer === "scissor"
            ?  `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            :playerOne === "scissor" && computer === "rock"
            ?  `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            :  `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
        alert(result);
          let playAgain = confirm("Play Again?");
          playAgain ? location.reload(playerChoice): alert("Ok, Thanks for playing!");
        }
        else{
            alert("You didn't enter anything, Please enter.")
        }
    }
    else{
        alert("I guess you changed your mind. Maybe next time.")
    }
}
else{
    alert("Ok, Maybe next time.");
}