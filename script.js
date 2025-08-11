//Computer Choice
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if(random === 0){
        return "rock";
    }else if(random === 1){
        return "paper";
    }else{
        return "scissors"
    }
}

//Human Choice
function getHumanChoice(){
    let human = prompt("Pick Rock | Paper | Scissors").toLowerCase().trim();
    switch(human){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors"
    }
}

//Play the game for a total of 5 rounds
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return `It's a tie, computer: ${computerChoice} -- ${humanChoice}` ;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}. Human score: ${humanScore}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}. Computer score: ${computerScore}`;
    }
    }
    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i}`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score: Human ${humanScore} - Computer ${computerScore} `);
    }
}

playGame(); 