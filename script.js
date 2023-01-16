let playerScore = 0;
let computerScore = 0;
let announcer = document.getElementById('announcer');
let pScore = document.getElementById('pScore');
let cScore = document.getElementById('cScore');
pScore.textContent = "Player: ";
cScore.textContent = "Computer: ";




function getComputerChoice() {
    let computerSelection

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerSelection = "rock";
            break;
        case 1: computerSelection = "paper";
            break;
        case 2: computerSelection = "scissors";
            break;
        default: window.alert("check engine");
    }
    announcer.textContent = `Computer throws: ${computerSelection}`;
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    if(playerSelection == 'rock' && computerSelection == 'scissors' ||
       playerSelection == 'paper' && computerSelection == 'rock' ||
       playerSelection == 'scissors' && computerSelection == 'paper'){
            playerScore++;
            pScore.textContent = `Player: ${playerScore}`;
            announcer.textContent = `The Player throws ${playerSelection} and the AI throws ${computerSelection}. \nThe player wins!`;
        } else if(playerSelection == 'rock' && computerSelection == 'paper' ||
                  playerSelection == 'paper' && computerSelection == 'scissors' ||
                  playerSelection == 'scissors' && computerSelection == 'rock'){
                      computerScore++;
                      cScore.textContent = `Computer: ${computerScore}`;
                      announcer.textContent = `The Player throws ${playerSelection} but the AI throws ${computerSelection}. \nThe AI wins!`;
        } else {
            announcer.textContent = `The Player throws ${playerSelection} and the AI throws ${computerSelection} too. \nIt's a draw!`;
        }
    if(playerScore === 5 || computerScore === 5){gameOver();}
}

function gameOver() {
    if(playerScore > computerScore){window.alert('You win the tournament! Man is greater than machine!!');}
    else if(computerScore > playerScore){window.alert('You loooooose! AI is superior to puny human minds!!');}
    window.alert('New game!');
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
}
