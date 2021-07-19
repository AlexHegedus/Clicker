import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  function increase(){
    setCount(prev => prev + 1)
  }
  function decrase(){
    setCount(prev => prev - 1)
  }
  function reset(){
    setCount(0)
  }
  return (
    <div className="App">
      <button onClick = {increase}>+</button>
      <h2>{count}</h2>
      <button onClick = {decrase}>-</button>
      <br/>
      <button onClick = {reset}>Reset</button>
    </div>
  );
}

export default App;
