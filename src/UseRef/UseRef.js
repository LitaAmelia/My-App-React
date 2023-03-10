import React, {useState, useRef} from 'react'

const UseRef = () => {
  const [state, setState] = useState(0);
  const btnRef = useRef(0);

  function handlerState() {
    // setState(state+1)
    // counterRef.current += 1
    console.log(btnRef.current);
    btnRef.current.style.backgroundColor = 'blue'
  }

  console.log('Komponen dirender')

  return <button onClick={handlerState} ref={btnRef}>Hellow</button>
   
}

export default UseRef