import "./App.css";
import {useState, useEffect} from "react";

export default function GuessNumberGame(){
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [misteryNumber, setMisteryNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [misteryGuess, setMisteryGuess] = useState("?");
  const [youWon, setYouWon] = useState(false);

  //console input
  useEffect(() => {
    console.log(misteryNumber);
  },[]);

  //increase & decrease
  const decreeseGuess = () => {
    let currentGuess = parseInt(guess);
    if(currentGuess > 1){
      setGuess((currentGuess - 1).toString());
    }
    else{
      setGuess("1");
    }
  }
  const increaseGuess = () => {
    let currentGuess = parseInt(guess) || 0;
    if(currentGuess < 20){
      setGuess((currentGuess + 1).toString());
    }
    else{
      setGuess("20");
    }
  }
  if(guess < -1){
    setGuess(1)
  }
  else if(guess > 20){
    setGuess(20);
  }

  //reset
  const resetGame = () => {
    setScore(20);
    setGuess("");
    setMisteryNumber(Math.floor(Math.random() * 20) + 1);
    setMessage("Start guessing...");
    setYouWon(false);
    setMisteryGuess("?")
  }

  //checkGuess
  const checkGuess = () => { 
    let currentGuess = parseInt(guess) || 1; 
    if(!currentGuess || currentGuess < 1 || currentGuess > 20){ 
      setMessage("⛔ Enter a number between 1 and 20!"); 
    } 
    if(currentGuess === misteryNumber && score > 0){
      setMisteryGuess(misteryNumber); 
      if(score > highscore){ 
        setHighscore(score); 
      } 
      setMessage("🎉 Congratulations!"); 
      setYouWon(true); 
    } 
    else if(currentGuess != misteryNumber){ 
      if(score > 0){ 
        setMessage((guess < misteryNumber) ? "📉 Too low!" : "📈 Too high!"); 
        setScore(score - 1);
      } 
      else{ 
        setMessage("You Lost the Game!"); 
      } 
    } 
    if(score === 1){
      setMessage("You Lost the Game!"); 
    }
    if(!guess) setGuess("1");
  }

  return(
  <div className="main" style={{backgroundColor: youWon && "green"}}>
    <div className="row row1">
      <button className="btnAgain" onClick={resetGame}>Again</button>
      <p>Between (1 and 20)</p>
    </div>
    <h1>Guess My Number!</h1>
    <div className="row row2">
      <hr className="guessLine"></hr>
      <div className="guessBox" style={{width: youWon && "400px"}}><p>{misteryGuess}</p></div>
      <hr className="guessLine"></hr>
    </div>
    <div className="row row3">
      <div className="column column1">
        <div className="inputBox">
          <button className="inputBtn inputBtnReduce" onClick={decreeseGuess}>-</button>
          <input className="inputGuess" type="number" min="1" max="20" placeholder="Insert..." onChange={(item) => {setGuess(item.target.value)}} value={guess}></input>
          <button className="inputBtn inputBtnAdd" onClick={increaseGuess}>+</button>
        </div>
        <button className="btnCheck" onClick={checkGuess}>Check</button>
      </div>
      <div className="column column2">
        <p className="message">{message}</p>
        <div className="scoresBox">
          <p className="score">💯 Score: {score}</p>
          <p className="highScore">🏆 Highscore: {highscore}</p>
        </div>
      </div>
    </div>
  </div>
  )
}