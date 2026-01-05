import React, { useEffect, useState } from 'react'

const Lifecycle = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        // const timer = setInterval(()=>{
        //   console.log(counter)
        // },2000)

    }, [counter])
  return (
    <div>
      <h1>React Lifecycle</h1>
      <button onClick={()=>setCounter(prev => prev + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={()=>setCounter(prev => prev-1)}>-</button>
    </div>
  )
}

export default Lifecycle
