let userScore=0;
let computerScore=0;
while (userScore<5 && computerScore<5){
let userInput
let u=prompt("rock paper scissor?")
function getHumanChoice(){
    if(u.toLowerCase()== 'rock'){
        userInput = 0; 
    }
    else if(u.toLowerCase()== 'paper'){
        userInput = 1; 
    }
    else if(u.toLowerCase()== 'scissor'){
        userInput = 2; 
    }
    else {
        console.log("Invalid Input!!!")
    }
}
getHumanChoice();
let computer = Math.floor(Math.random() * 3)
console.log(computer)
if (userInput == computer){
    console.log("Draw")
}
else if(userInput+1 == computer || computer+2 ==userInput){
    console.log("Computer Won")
    computerScore++;
}
else{
    console.log("You Won")
    userScore++;
}
}
console.log('You '+userScore+':'+computerScore+' Computer');