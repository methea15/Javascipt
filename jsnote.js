//computer choice
function compChoose(){
    const picked=["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random()*picked.length);
    return picked[randomChoice];
}
//pick who will win
let playScore = 0;
let compScore = 0;
function findWinner(playChoice, compChoice){
    if(playChoice === compChoice){
        return '🦊🦊It\'s a tie🦊🦊';
    }
    if((playChoice === 'scissor' && compChoice === 'paper') || (playChoice === 'paper' && compChoice === 'scissor') || (playChoice === 'rock' && compChoice === 'scissor')){
        playScore++;
        return '😁😁You win😁😁';
    } else{
        compScore++;
        return '😭😭You loose😭😭';
    }
}
//game rounmd 
const resultOut = document.getElementById('result');
const scoreOut = document.getElementById('score');
function YourMove(playChoice){
    const compChoice= compChoose();
   
    resultOut.textContent='';
    const reText= document.createTextNode(findWinner(playChoice,compChoice));
    resultOut.appendChild(reText);
    scoreOut.textContent = `Your Score: ${playScore} | Computer Score: ${compScore}`;
}
function reset(){
    playScore = 0;
    compScore = 0;
    resultOut.textContent= 'Let\'s play!';
    scoreOut.textContent = `Your Score: ${playScore} | Computer Score: ${compScore}`;
}


