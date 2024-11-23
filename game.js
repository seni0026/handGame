// load the score from local storage and set a default value
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// display the score on the website by calling the updateScoreElement function
updateScoreElement();

// create a function to play the game automatically
// use the fuction setInterval() to run the function for a specified time
// setInterval() takes 2 arguments, the first is the function and the other is the 
// specified time which is in milliseconds (1000ms = 1s)

// create a variable to check is the game is auto playing
let isAutoPlaying = false;

// create a variable to store the ID from the setInterval function that
// will be used to stop the auto play
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        // store the setInterval() into ineteralId
        intervalId = setInterval(function() {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);

        isAutoPlaying = true;

    } else {
        // use clearInterval to stop auto play and pass the ID of setInterval as
        // its parameter
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
}

// create a function that accepts an arguement, compare it with computerMove and store the result in a variable
function playGame(playerMove) {
    const computerMove = pickComputerMove();

// create a variable to store the result
    let result = '';

// compare computerMove with playerMove
    if(playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'Tie!';

        } else if (computerMove === 'paper') {
            result = 'You lose!';
            
        } else if(computerMove === 'scissors') {
            result = 'You win!';
        }

    } else if(playerMove === 'paper') {
        if(computerMove === 'paper') {
            result = 'Tie!';
        } else if (computerMove === 'rock') {
            result = 'You win!';
        } else if(computerMove === 'scissors') {
            result = 'You lose!';
        }
        
    } else if(playerMove === 'scissors') {
        if(computerMove === 'scissors') {
            result = 'Tie!';
        } else if (computerMove === 'paper') {
            result = 'You win!';
        } else if(computerMove === 'rock') {
            result = 'You lose!';
        }
    }

    // update the score based on the result
    if (result === 'You win!') {
        score.wins +=1;

    } else if (result === 'You lose!') {
        score.losses +=1;

    } else if (result === 'Tie!') {
        score.ties +=1;
    } 

    // store the score in local storage
    localStorage.setItem('score', JSON.stringify(score));

    // display the score on the website by calling the updateScoreElement function
    updateScoreElement();

    // display the result, player move and computer move
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `You 
            <img src="image/${playerMove}-emoji.png" class="game-icon" alt="Image showing player and computer move">
            <img src="image/${computerMove}-emoji.png" class="game-icon" alt="Image showing player and computer move">
            Computer`;
}

// create a function to update the score on the website
function updateScoreElement() {
    // update the score on the website
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// create a function to reset the score 
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    // reset the score in local storage
    localStorage.removeItem('score');

    updateScoreElement();
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