import { useState } from 'react'
import './App.css'

function App(){
  const [count,setCount]=useState(0)

  return(
    <div className="outer-box">
      <div className="inner-box">{count}</div>
      <div className="inner-box clickable" onClick={()=>setCount(count+1)}>+</div>
      <div className="inner-box clickable" onClick={()=>setCount(count-1)}>-</div>
    </div>
  )
}

export default App
