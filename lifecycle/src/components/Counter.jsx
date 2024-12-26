import React from 'react'
import {useState, useEffect} from "react";

function Counter() {

  const number1 = 0;
  const [number, setNumber] = useState(number1);


  useEffect (() => {
    console.log("Number State Güncellendi");
  }, [number])

  useEffect(()=> {
    console.log("Component mount edildi.");
    setInterval(() => {
      setNumber((n) => n+1);
    }, 1000)
    return () => clearInterval(setInterval);
  }, [])//bağımlılık arrayi içi boşsa component mount edildiği anı yakalarsın demek


  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Number Change</button>
      <hr />
      <br />
    </div>
  )
}

export default Counter