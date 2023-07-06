function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 2) {
        return "Jab";
    } else if (randomChoice == 1){
        return "Kick";
    } else {
        return "Parry";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if (playerSelection === computerSelection){
        return("Tie. You're lucky.");
    }
    else if (playerSelection === "Jab" && computerSelection === "Parry"
            || playerSelection === "Parry" && computerSelection === "Kick"
            || playerSelection === "Kick" && computerSelection === "Jab"
    ){
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "Jab" && playerSelection === "Parry"
            || computerSelection === "Parry" && playerSelection === "Kick"
            || computerSelection === "Kick" && playerSelection === "Jab")
    {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}

const buttons = document.querySelectorAll('.gameButtons');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const roundWinner = document.querySelector('div#roundWinner');
        const userScoreSelector = document.querySelector('#userScore');
        const compScoreSelector = document.querySelector('#compScore');
        let winner = playRound(button.id, getComputerChoice());
        let userScore = parseInt(userScoreSelector.textContent.slice(12));
        let compScore = parseInt(compScoreSelector.textContent.slice(13));
        if (userScore < 5 && compScore < 5) {
            roundWinner.textContent = winner;
            // check string to see if user won or if computer won and change score
            if (winner.slice(0, 5) == 'You w') {
                userScore += 1;
            } else if (winner.slice(0, 5) == 'You l') {
                compScore += 1;
            }
            userScoreSelector.textContent = `Your Score: ${userScore}`;
            compScoreSelector.textContent = `Enemy Score: ${compScore}`;
            const gameWinner = document.querySelector('#winner');
            if (userScore === 5) {
                gameWinner.textContent = 'You win. Humanity is saved.';
            } else if (compScore === 5) {
                gameWinner.textContent = 'You lose. The end of humanity is near.';
            }
        }
    });
});

const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', () => {
    const userScoreSelector = document.querySelector('#userScore');
    const compScoreSelector = document.querySelector('#compScore');
    userScoreSelector.textContent = 'Your Score: 0';
    compScoreSelector.textContent = 'Enemy Score: 0';
})