import React, {useState} from 'react';
import './style.css'

function App(){
  const [val,setVal] = useState('');
  const [index,setIndex] = useState(-1);
  const OPERATORS = ["+","-","/","*"]
  const numbers = [1,2,3,4,5,6,7,8,9]
  let n =  0;

  function handleClick(value){
    
    if (OPERATORS.some(item => item === value) || numbers.some(item => item.toString() === value)){
      const evaluation = isEvaluate();
      if(OPERATORS.some(item => item === value) && !evaluation){
        setVal(val);
      }
      else{
        setVal(val + value);
      }  
    }
  }

  function handleResult(){

    let first = val.substring(0,index);
    let second = val.substring(index + 1,val.length);
    let operator = val.substring(index, index + 1);
      
    let p1 = parseInt(first);
    let p2 = parseInt(second);

    let result = 0;

    switch(operator){
      case "+":
        result = p1 + p2;
        break;
      case "-":
        result = p1 - p2;
        break;
      case "*":
        result = p1 * p2;
        break;
      case "/":
        result = p1 / p2;
        break;
      default:
        console.log("No operator:",operator)
      }

        result = result.toString();
        setVal(result);
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

  function isEvaluate(){
    let arrayValue = val.split("");

    return !(
      arrayValue.some((value,index) => {
        if (OPERATORS.some(item => value === item)){
          setIndex(index);
        }
        return OPERATORS.some(item => value === item);
      })
    );
  }
  
  return (
    <div className="container">
      <div className="child-container">

        <div id="screen">
          <div className="teste">
            <div id="answer">{val}</div>
          </div>
        </div>

        <div id="buttons" >
          <div className="teste">
              <p onClick={() => handleClick(numbers[0])}>{numbers[0]}</p>
              <p onClick={() => handleClick(numbers[1])}>{numbers[1]}</p>
              <p onClick={() => handleClick(numbers[2])}>{numbers[2]}</p>
              <p onClick={() => handleClick(OPERATORS[0])}>{OPERATORS[0]}</p>
          </div>

          <div className="teste">
              <p onClick={() => handleClick(numbers[3])}>{numbers[3]}</p>
              <p onClick={() => handleClick(numbers[4])}>{numbers[4]}</p>
              <p onClick={() => handleClick(numbers[5])}>{numbers[5]}</p>
              <p onClick={() => handleClick(OPERATORS[1])}>{OPERATORS[1]}</p>
          </div>

          <div className="teste">
              <p onClick={() => handleClick(numbers[6])}>{numbers[6]}</p>
              <p onClick={() => handleClick(numbers[7])}>{numbers[7]}</p>
              <p onClick={() => handleClick(numbers[8])}>{numbers[8]}</p>
              <p onClick={() => handleClick(OPERATORS[2])}>{OPERATORS[2]}</p>
          </div>

          <div className="teste">
              <p onClick={() => handleClick(OPERATORS[3])}>{OPERATORS[3]}</p>
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