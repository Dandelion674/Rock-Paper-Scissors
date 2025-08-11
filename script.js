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