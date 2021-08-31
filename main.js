/* ==VARIABLES== */

/*Document elements */
const aboutButton = document.getElementsByClassName("button about")[0];
const aboutCard = document.getElementsByClassName("blocker info")[0];

/* Game elements */
const rockButton = document.getElementsByClassName("button rock")[0];
const paperButton = document.getElementsByClassName("button paper")[0];
const scissorsButton = document.getElementsByClassName("button scissors")[0];
const replayButton = document.getElementsByClassName("button replay")[0];
const gameText = document.getElementsByClassName("game-text")[0];
const rounds = document.getElementsByClassName("rounds")[0].children;
const endCard = document.getElementsByClassName("blocker end")[0];
const endTitle = document.getElementsByClassName("end-title")[0];
const endText = document.getElementsByClassName("end-text")[0];

/* ==DOCUMENT FUNCTIONS== */

aboutButton.onclick = function () {
    aboutCard.classList.toggle("hide")
}

/* ==GAME FUNCTIONS== */
const gameObject = {
    round: 0,
    playerScore: 0,
    computerScore: 0,
};

function makeMove(playerMove) {
    
    const moves = ["rock","paper","scissors"];
    let computerMove = Math.floor(Math.random()*3);

    if (playerMove == computerMove) {
        advanceRound("tie",moves[computerMove]);
    }
    else if (playerMove-computerMove == 1 || playerMove-computerMove == -2) {
        advanceRound("player",moves[computerMove]);
    }
    else {
        advanceRound("computer",moves[computerMove]);
    }
};

function advanceRound(winner,computer) {
    switch (winner) {
        case "player":
            gameObject.playerScore += 1;
            rounds[gameObject.round].src = "assets/win.svg";
            gameText.textContent = `Computer plays ${computer}. Round Won!`;
            break
        case "computer":
            gameObject.computerScore += 1;
            rounds[gameObject.round].src = "assets/lose.svg";
            gameText.textContent = `Computer plays ${computer}. Round Lost!`;
            break
        default:
            rounds[gameObject.round].src = "assets/tie.svg";
            gameText.textContent = `Computer plays ${computer}. It's a tie!`;
            break
    }
    
    gameObject.round++

    if (gameObject.round == 5) {
        endGame()
    }
};

function endGame() {
    if (gameObject.playerScore > gameObject.computerScore) {
        endTitle.textContent = "Game Won :)"
    }
    else if (gameObject.playerScore < gameObject.computerScore) {
        endTitle.textContent = "Game Lost :("
    }
    else {
        endTitle.textContent = "It's a Tie :|"
    }
    endText.textContent = `Your Score: ${gameObject.playerScore} Computer's Score: ${gameObject.computerScore}`;
    endCard.classList.toggle("hide")
};

function reset() {
    gameObject.round = 0;
    gameObject.playerScore = 0;
    gameObject.computerScore = 0;
    for (let i = 0; i < rounds.length; i++) {
        rounds[i].src = "assets/empty.svg"
    };
    gameText.textContent = "ROCK, PAPER, SCISSORS!"
}

rockButton.onclick = function () {
    makeMove(0)
};
paperButton.onclick = function () {
    makeMove(1)
};
scissorsButton.onclick = function () {
    makeMove(2)
};
replayButton.onclick = function () {
    reset()
    endCard.classList.toggle("hide");
};