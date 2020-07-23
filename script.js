let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let matchHuman = 0;
let matchPc = 0;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*9);
  
}
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    matchHuman++;
    if (matchHuman === 3){
      humanScore++;
      matchHuman = 0;
    } 
  } else if (winner === 'computer') {
    matchPc++;
    if(matchPc === 3){
      computerScore++;
      matchPc = 0;
    }
  }
}
function advanceRound (){
  currentRoundNumber +=1;
}


