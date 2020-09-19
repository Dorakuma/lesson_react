import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function clickAlert() {
    alert('unt!');
  }
  return (
    <button onClick={()=>{clickAlert()}}>ほたん</button>
  );
}


export default App;
