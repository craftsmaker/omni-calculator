import React, {useState} from 'react';
import './style.css'

function App(){
  const [val,setVal] = useState('');

  function handleClick(value){
    setVal(value);
  }
  
  return (
    <div className="container">
      <div className="child-container">

        <div id="screen">
          <div className="teste">
            <div id="answer">{val}</div>
          </div>
        </div>

        <div id="buttons">
          <div className="teste">
              <p onClick={() => handleClick("1")}>1</p>
              <p onClick={() => handleClick("2")}>2</p>
              <p onClick={() => handleClick("3")}>3</p>
              <p onClick={() => handleClick("+")}>+</p>
          </div>

          <div className="teste">
              <p onClick={() => handleClick("4")}>4</p>
              <p onClick={() => handleClick("5")}>5</p>
              <p onClick={() => handleClick("6")}>6</p>
              <p onClick={() => handleClick("-")}>-</p>
          </div>

          <div className="teste">
              <p onClick={() => handleClick("7")}>7</p>
              <p onClick={() => handleClick("8")}>8</p>
              <p onClick={() => handleClick("9")}>9</p>
              <p onClick={() => handleClick("/")}>/</p>
          </div>

          <div id="send" className="teste">
              <p>=</p>
          </div>
        </div>        
      </div>
    </div>
  )
}


export default App;