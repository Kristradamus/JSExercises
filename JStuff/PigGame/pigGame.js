"use strict"
//shortcuts
const currentScoreP1 = document.querySelector(".currentScore.player0");
const currentScoreP2 = document.querySelector(".currentScore.player1");

const savedScoreP1 = document.querySelector(".savedScore.player0");
const savedScoreP2 = document.querySelector(".savedScore.player1");

const overlay = document.querySelector(".overlay");
const winnerBox = document.querySelector(".winnerBox");
const winnerTitle = document.querySelector(".winnerTitle");

//classlist elements
const diceImage = document.querySelector(".diceImage");
const playerBox1 = document.querySelector(".playerBox.player0");
const playerBox2 = document.querySelector(".playerBox.player1");

//btns
const btnNewGame = document.querySelector(".newGame");
const btnNewGameSecond = document.querySelector(".newGameSecond");

const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");

//variables
const points = [0, 0];
let activePlayer, currPoints, playing, winner;

const reset = function(){
    currentScoreP1.textContent = 0;
    currentScoreP2.textContent = 0;
    savedScoreP1.textContent = 0;
    savedScoreP2.textContent = 0;
    currPoints = points[0] = points[1] = 0;
    activePlayer = 0;
    winner = "";
    playing = true;
    overlay.classList.add("hidden");
    winnerBox.classList.add("hidden");
    diceImage.classList.add("hidden");
    playerBox1.classList.add("active");
    playerBox2.classList.remove("active");
}
reset();

btnNewGame.addEventListener("click", reset);
btnNewGameSecond.addEventListener("click", reset);

btnRoll.addEventListener("click", function(){
if(playing){
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove("hidden");
    diceImage.src = `./imgs/dice${diceNumber}.png`;
    if(diceNumber !== 1){
        currPoints += diceNumber;
        document.querySelector(`.currentScore.player${activePlayer}`).textContent = currPoints;
    }
    else{
        currPoints = 0;
        document.querySelector(`.currentScore.player${activePlayer}`).textContent = 0;
        playerBox1.classList.toggle("active");
        playerBox2.classList.toggle("active");
        activePlayer = activePlayer === 0 ? 1 : 0;
    }  
}})

btnHold.addEventListener("click", function(){
if(playing){
    document.querySelector(`.currentScore.player${activePlayer}`).textContent = 0;
    points[activePlayer] += currPoints;
    document.querySelector(`.savedScore.player${activePlayer}`).textContent = points[activePlayer];
    winner = points[activePlayer] >= 50 ? `player${activePlayer}` : "";
    if(winner){
        playing=false;
        winner = "Player " + `${activePlayer + 1}`;
        overlay.classList.remove("hidden");
        winnerBox.classList.remove("hidden");
        winnerTitle.textContent = `${winner} Wins!`;
    }
    else{
        playerBox1.classList.toggle("active");
        playerBox2.classList.toggle("active");
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
    currPoints = 0;
}})
