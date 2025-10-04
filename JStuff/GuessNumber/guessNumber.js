"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    if (!guess && score > 0){
        displayMessage("⛔ Not A Valid Guess");
    }
    else{
        if(guess === secretNumber){
        displayMessage("🎉 Correct number!");
        document.querySelector(".number").textContent = secretNumber;
        if(score > highScore){
            highScore = score;
        }
        document.querySelector(".highScore").textContent = highScore;
        document.querySelector("body").style.backgroundColor = "green"; 
        document.querySelector(".number").style.width = "200px";
        return;
        }
        else{
            if(score > 1){
                displayMessage(guess < secretNumber ? "📉 Too low!" : "📈 Too high!");
                score--;
                document.querySelector(".score").textContent = score;
            }
            else{
                displayMessage("You Lost The Game!");
                document.querySelector(".score").textContent = 0;
            }
        }
    }
})
document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "rgb(27, 27, 27)"; 
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "100px";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
})
