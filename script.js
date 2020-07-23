let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*9);
  
}
function compareGuesses(currentHumanGuess,computerGuess,target){
  if(Math.abs(target - currentHumanGuess) < Math.abs(target - computerGuess)){
  return true;

}else if(Math.abs(target - currentHumanGuess) > Math.abs(target - computerGuess)){
  return false;

}else{
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


