import './App.css'
import {useState} from "react";

export default function modalWindow(){
  const [showWindow, setShowWindow] = useState(false);

  const showWindowFunc = function(){
    setShowWindow(true);
  }

return(
    <>
      <div className="buttonsBox">
        <button className="button1" onClick={showWindowFunc}>Bla Bla Bla</button>
        <button className="button2" onClick={showWindowFunc}>Ble Ble Ble</button>
        <button className="button3" onClick={showWindowFunc}>Bli Bli Bli</button>
      </div>
      <div className={`modalWindowBox ${showWindow ? "show" : ""}`}>
        <button className="exitBtn">x</button>
        <h1 className="modalTitle">El salsa la pikante</h1>
        <p className="modalText">Lingaguli guli guli lingangu lingangu, 
            Lingaguli guli guli lingangu lingangu, 
            Lingaguli guli guli lingangu lingangu, 
            Lingaguli guli guli lingangu lingangu</p>
      </div>
      <div className={`overlay ${showWindow ? "show" : ""}`}></div>
    </>
)
}