const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock'){
        return userInput;
    } else if(userInput === 'paper'){
        return userInput;
    } else if(userInput === 'scissors'){
        return userInput;
    }
    else{
        if(userInput === 'bomb'){
            return userInput;
        } else {
            console.log('Error');
        }
    }
    return userInput;
}

// getUserChoice('stone');
// console.log(getUserChoice('ROCK'));

const getComputerChoice = () => {
    let inp = Math.floor(Math.random() * 3);
    if(inp === 0){
        return "rock";
    } else if(inp === 1){
        return "paper";
    } else if(inp === 2){
        return "scissors";
    }
}

console.log(getUserChoice(getComputerChoice()));

const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
        return 'Tie';
    } else {
        if(userChoice === 'rock'){
            if(computerChoice === 'paper'){
                return "Computer Win";
            }else{
                return "You Win";
            }
        }
        if(userChoice === 'paper'){
            if(computerChoice === 'scissors'){
                return "Computer Win";
            }else{
                return "You Win";
            }
        }
        if(userChoice === 'scissors'){
            if(computerChoice === 'rock'){
                return "Computer Win";
            }else{
                return "You Win";
            }
        }
        if(userChoice === 'bomb'){
            return "YOU WIN !";
        }

    }
}

console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}

playGame();