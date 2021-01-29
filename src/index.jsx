import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room() {
  const [value, setValue] = useState(true)
  var brightness = (value === true) ? "bright" : "dark"
  function change() {
    setValue(previousValue => {
      return !previousValue
    })
  }
  return (
    <div className={`room ${brightness}`}>
      <div>the room is {brightness}</div>
      <button onClick={change}>Change</button>
    </div>
  );
}

function Counter() {
  const [value, setValue] = useState(0)

  function increment() {
    setValue(count => {
      return count+1
    })
  }
  function decrement() {
    setValue(count => {
      return count-1
    })
  }
  return (
    <div>
      <button onClick={increment} style={{width : 100, height : 50}}>+</button>
      <h1>{value}</h1>
      <button onClick={decrement} style={{width : 100, height : 50}}>-</button>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Room />
    <Counter />
  </div>
  ,
  document.getElementById('root'));

