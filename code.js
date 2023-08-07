function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0){
        return "rock";
    } else if(rand === 1){
        return "paper";
    } else if(rand === 2){
        return "scissors";
    }
}

function round(playerSelection, computerSelection){
    let playerSelect = playerSelection.toLowerCase();
    if(playerSelect === computerSelection){
        return "tie";
    } else if((playerSelect === 'rock' && computerSelection === 'paper') || (playerSelect === 'scissors' && computerSelection === 'rock') || (playerSelect === 'paper' && computerSelection === 'scissors')){
        return "C win";
    } else {
        return "Player win";
    }
}

function game(){
    let compScore = 0;
    let playScore = 0;
    for(let i = 0; i < 5; i++){
        let compChoice = getComputerChoice();
        let playerChoice = prompt("Make your choice!");
        let roundResult = round(playerChoice, compChoice);

        if(roundResult === "Player win"){
            console.log(`You win! ${playerChoice} beats ${compChoice}!`);
            playScore++;
        } else if(roundResult === "C win"){
            console.log(`You lose! ${compChoice} beats ${playerChoice}!`);
            compScore++;
        } else if(roundResult === "tie"){
            console.log("It's a tie!");
        }
        console.log(`Current score: ${playScore} | ${compScore}`);
    }
    if (playScore > compScore){
        console.log("Player wins!");
    } else if(compScore > playScore){
        console.log("Computer wins!");
    } else if(compScore === playScore){
        console.log("It's a tie!");
    }
}

game();
