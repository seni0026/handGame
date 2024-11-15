// create a function that accepts an arguement, compare it with computerMove and store the result in a variable
function playGame(playerMove) {
    const computerMove = pickComputerMove();
// create a variable to store the result
    let result = '';
// compare computerMove with playerMove
    if(playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if(computerMove === 'scissors') {
            result = 'You win.';
        }

    } else if(playerMove === 'paper') {
        if(computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'rock') {
            result = 'You win.';
        } else if(computerMove === 'scissors') {
            result = 'You lose.';
        }
        
    } else if(playerMove === 'scissors') {
        if(computerMove === 'scissors') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if(computerMove === 'rock') {
            result = 'You lose.';
        }
    }

    // display result as alert
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}

//the variable computerMove declared here is different from the one declared within the function scope. This variable save the return value from the function
const computerMove = pickComputerMove();

function pickComputerMove() {
    // generate a random number for the computer
    const randomNumber = Math.random();

// create a variable to store the computer move
    let computerMove = '';

// use the logical operator && to check both conditions
    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}