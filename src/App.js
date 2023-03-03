import './App.css';
import React from 'react'
import Card from './Card';

function App() {
  const clickHello = () => {
    console.log('Hello')
  }

  return (
    <Tombol teksHello={clickHello}/>
  );
}

function Tombol(props) {
  return (
    <button onClick={props.teksHello}>Tombol</button>
  )
}


export default App;
