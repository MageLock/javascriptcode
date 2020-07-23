let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*9);
  
}
function compareGuesses(humanGuessInput,computerGuessDisplay,target){
  if(humanGuessInput === computerGuessDisplay){
    return true;
}
  if(Math.abs(target - humanGuessInput) < Math.abs(target - computerGuessDisplay)){
  return true;
}else if(Math.abs(target - humanGuessInput) > Math.abs(target - computerGuessDisplay)){
  return false;
}else if(Math.abs(target - humanGuessInput) > Math.abs(target - computerGuessDisplay)){
    return true;
}
}

function updateScore(winner) {
  if(compareGuesses){
    humanScore += 1;
  }else{
    computerScore +=1;
  }
}
function advanceRound (){
  currentRoundNumber +=1;
}


