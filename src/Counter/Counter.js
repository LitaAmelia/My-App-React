import {useEffect, useState} from 'react'

function Counter() {
//   let counter = 0;
  
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(function(){
    console.log("Komponen Dirender")
    // return () => {
    //   console.log("Komponen Dihilangkan")
    // }
  }, [counter])

  const increment = () => {
    setCounter2((prev) => {
        return prev+1
    });
  }

  const decrement = () => {
    setCounter2(counter2-1)
  }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>{counter2}</h1>
        <div style={{textAlign: 'center'}}>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    </div>
  )
}

export default function Switch() {
  const [visible, setVisible] = useState('true')
  function switchHandler() {
    setVisible(!visible)
  }
  return(
    <>
      <div style={{ textAlign: 'center' }}>
        <button onClick={switchHandler}>Visible</button>
      </div>
      {visible && <Counter/>}
    </>
  )
}

// export default Counter;