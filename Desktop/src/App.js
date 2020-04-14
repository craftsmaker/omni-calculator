import React, {useState} from 'react';
import './style.css'

function App(){
  const [val,setVal] = useState('');

  function handleClick(value){
    let real = val + value;
    const OPERATORS = ["+","-","/","*"];
    // console.log(isEvaluate(real));
    const evaluation = isEvaluate();
    if(OPERATORS.some(item => item === value) && evaluation){
      setVal(val);
    }
    else{
      setVal(val + value);
    }
  }

  function handleResult(){
    let values = val.split("");

    if (isEvaluate(val)) {

    }
  }

  function handleClean(){
    setVal("");
  }

  function handleBack(){

    if (val.length !== 0)
    {
      let i = val.length;
      setVal(val.replace(val[i - 1],""));
    }
  }

  function getOperator(real) {
    const OPERATORS = ["+","-","/","*"]
    let screen_values = real.split("");
    let operator_index = -1;

    console.log(screen_values);

    console.log(`Screen Values: ${screen_values}`)
    const operator = screen_values.some((value,index) => {
       if(OPERATORS.some(item =>  value === item)){
        operator_index = index
        return true;
       }
    });

    return operator_index;
  }

  function isEvaluate(){
    let operator = getOperator(val);
    console.log(operator);
    let evaluation = operator !== -1 ? true : false

    console.log(evaluation);
    return evaluation
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

          <div className="teste">
              <p onClick={() => handleClick("*")}>*</p>
              <p onClick={() => handleClean("C")}>C</p>
              <p onClick={handleBack}>BACK</p>
          </div>

          <div id="send" className="teste">
              <p onClick={() => handleResult()}>=</p>
          </div>
        </div>        
      </div>
    </div>
  )
}


export default App;