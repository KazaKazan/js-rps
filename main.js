const choiceList = ["rock", "paper", "scissors"];

function playerSelection() {
    let selection = -1;
    let template = "What will you play?";

    while (selection = -1) {
        var input = prompt(template).toLocaleLowerCase("en-US");
        selection = choiceList.indexOf(input);
        template = "What will you play?\nMake a valid choice!"
        if (selection != -1) break;
    };
    
    return selection
}

function gameRound() {
    
    let playerMove = playerSelection();
    let computerMove = Math.floor(Math.random()*3);

    if (playerMove == computerMove) {
        console.log("Tie!")
        return 0
    }
    else if (playerMove-computerMove == 1 || playerMove-computerMove == -2) {
        console.log(`You win the round! ${choiceList[playerMove]} beats ${choiceList[computerMove]}!`)
        return 1
    }
    else {
        console.log(`You lose the round! ${choiceList[computerMove]} beats ${choiceList[playerMove]}!`)
        return 2
    }

}

function gameMain() {
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;

    while (round <= 5) {
        console.log(`Round ${round} start!`)
        let winner = gameRound();
        switch (winner) {
            case 1:
                playerScore += 1
                break
            case 2:
                computerScore += 1
                break
            default:
                break
        }
        round++
    }

    if (playerScore > computerScore) {
        console.log("You win the game!")
    }

    else if (playerScore < computerScore) {
        console.log("You lose the game!")
    }

    else {
        console.log("It's a tie!")
    }

}

gameMain()