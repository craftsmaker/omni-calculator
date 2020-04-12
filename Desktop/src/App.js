import React, {useState} from 'react';
import './style.css'

function App(){
  const [val,setVal] = useState('');

  function handleClick(e,value){
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
              <p onClick={() => setVal("1")}>1</p>
              <p onClick={() => setVal("2")}>2</p>
              <p onClick={() => setVal("3")}>3</p>
              <p onClick={() => setVal("+")}>+</p>
          </div>

          <div className="teste">
              <p onClick={() => setVal("4")}>4</p>
              <p onClick={() => setVal("5")}>5</p>
              <p onClick={() => setVal("6")}>6</p>
              <p onClick={() => setVal("-")}>-</p>
          </div>

          <div className="teste">
              <p onClick={() => setVal("7")}>7</p>
              <p onClick={() => setVal("8")}>8</p>
              <p onClick={() => setVal("9")}>9</p>
              <p onClick={() => setVal("/")}>/</p>
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