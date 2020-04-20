import React, {useState,useEffect,useRef} from 'react';
import './style.css'

function App(){
  const [val,setVal] = useState('');
  const [keyValue, setKeyValue] = useState("");
  let div = useRef(null);

  useEffect(() => {
    
    div.current.focus()
  })

  function handleChange(value){
    setVal(value);
    setKeyValue("");
  }

  function handleKeyPressed(e){
    const key = e.key;

    if (isValided(key)){
      if (key === "Enter")
      {
        setKeyValue("Enter");
      }
      else{
        setVal(val + key);
      }
    }
  }

  function isValided(key){
    return ["0","1","2","3","4","5","6","7","8","9"].some(value => value === key)
       || ["/","+","-","*","Enter"].some(value => value === key) ? true : false
  }

  return (
    <div className="container" onKeyDown={handleKeyPressed} tabIndex="0" ref={div}>
      <div className="child-container">

        <div id="screen">
          <div className="teste">
            <div id="answer">{val}</div>
          </div>
        </div>

        <Buttons keyValue={keyValue} value={val} onChange={handleChange}/>
      </div>
    </div>
  )
}

function Buttons(props){
  let val = props.value;
  let keyValue = props.keyValue;

  let index = -1;
  const OPERATORS = ["+","-","/","*","Enter"]
  const numbers = ["0","1","2","3","4","5","6","7","8","9"]

  useEffect(()=>{if (keyValue) {handleClick(keyValue)}});

  function handleClick(value){
    const checking = OPERATORS.some(item => item === value);

    if (checking || numbers.some(item => item === value)){
      const evaluation = isEvaluate();

      if(checking && !evaluation){
        if (value === "Enter"){
          props.onChange(handleResult());
        }
        else {
          props.onChange(val);
        }
      }
      else{
        props.onChange(val + value);
      }  
    }
  }

  function handleResult(){
    let value = val;

    let p1 = parseInt(value.substring(0,index));
    let p2 = parseInt(value.substring(index + 1,val.length));
    let operator = value.substring(index, index + 1);

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
      
      return result.toString();
  }

  function handleClean(){
    props.onChange("");
  }

  function handleBack(){

    if (val.length !== 0)
    {
      let i = val.length;
      props.onChange(val.replace(val[i - 1],""));
    }
  }

  function isEvaluate(){
    let arrayValue = val.split("");
    console.log(index);
    return !(
      arrayValue.some((value,i) => {
        const checking = OPERATORS.some(item => value === item);
        if (checking){
          index = i;
        }
        return checking;
      })
    );
  }

  return (
    <div id="buttons" >
          <div className="teste">
              <p onClick={() => handleClick(numbers[1])}>{numbers[1]}</p>
              <p onClick={() => handleClick(numbers[2])}>{numbers[2]}</p>
              <p onClick={() => handleClick(numbers[3])}>{numbers[3]}</p>
              <p onClick={() => handleClick(OPERATORS[0])}>{OPERATORS[0]}</p>
          </div>

          <div className="teste">
              <p onClick={() => handleClick(numbers[4])}>{numbers[4]}</p>
              <p onClick={() => handleClick(numbers[5])}>{numbers[5]}</p>
              <p onClick={() => handleClick(numbers[6])}>{numbers[6]}</p>
              <p onClick={() => handleClick(OPERATORS[1])}>{OPERATORS[1]}</p>
          </div>

          <div className="teste">
              <p onClick={() => handleClick(numbers[7])}>{numbers[7]}</p>
              <p onClick={() => handleClick(numbers[8])}>{numbers[8]}</p>
              <p onClick={() => handleClick(numbers[9])}>{numbers[9]}</p>
              <p onClick={() => handleClick(OPERATORS[2])}>{OPERATORS[2]}</p>
          </div>

          <div className="teste">
              <p onClick={handleBack}>BACK</p>
              <p onClick={() => handleClean("C")}>C</p>
              <p>,</p>
              <p onClick={() => handleClick(OPERATORS[3])}>{OPERATORS[3]}</p>
          </div>

          <div id="send" className="teste">
              <p onClick={() => handleClick(OPERATORS[4])}>=</p>
          </div>
        </div>   
  )    
}
export default App;