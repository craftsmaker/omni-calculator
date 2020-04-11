import React from 'react';
import './style.css'

function App(){
  return (
    <div className="container">
      <div className="child-container">

        <div id="screen">
          <div className="teste">
            <div id="answer">Text</div>
          </div>
        </div>

        <Handlers/>          
      </div>
    </div>
  )
}

function Handlers() {
  return (
    <div id="buttons">
        <div className="teste">
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </div>

        <div className="teste">
            <p>4</p>
            <p>5</p>
            <p>6</p>
        </div>

        <div className="teste">
            <p>7</p>
            <p>8</p>
            <p>9</p>
        </div>

        <div id="send" className="teste">
            <p>=</p>
        </div>
    </div>
  );
}



export default App;