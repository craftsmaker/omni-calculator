import React from 'react';
import './style.css'

function App(){
  return (
    <div className="container">
        <div className="child-container">
          <div id="screen">
            <div>
              <div id="answer">Text</div>
            </div>
          </div>

          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>

          <div>
            <p>4</p>
            <p>5</p>
            <p>6</p>
          </div>

          <div>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>

          <div id="enviar">
            <p>Enviar</p>
          </div>
        </div>
      </div>
  )
}

export default App;