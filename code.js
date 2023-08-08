const btn = document.querySelectorAll('.btn');
const btnContainer = document.querySelector('.button-container');
const player = document.querySelector('#player-score');
const playerTxt = document.querySelector('#player-choice');
const computer = document.querySelector('#comp-score');
const computerTxt = document.querySelector('#comp-choice');
const roundRes = document.querySelector('#round-results');
const finalRes = document.querySelector('#final-result');

let playerScore = 0;
let computerScore = 0;

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerSelect = e.target.id;
        playerTxt.textContent = `You chose ${playerSelect}`;
        let compChoice = getComputerChoice();
        computerTxt.textContent = `Computer chose ${compChoice}`;
        round(playerSelect, compChoice);
        gameEnd();
    });
});

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
        roundRes.textContent = "It's a tie!";
    } else if((playerSelect === 'rock' && computerSelection === 'paper') || (playerSelect === 'scissors' && computerSelection === 'rock') || (playerSelect === 'paper' && computerSelection === 'scissors')){
        roundRes.textContent = "Computer wins!";
        computerScore++;
        computer.textContent = `Computer: ${computerScore}`;
    } else {
        roundRes.textContent = "Player wins!";
        playerScore++;
        player.textContent = `Player: ${playerScore}`;
    }
}
function gameEnd(){
    if(playerScore === 5){
        finalRes.textContent = "Player wins the game!";
        btnContainer.style.display = "none";
    }
    if(computerScore === 5){
        finalRes.textContent = "Computer wins the game!";
        btnContainer.style.display = "none";
    }
}