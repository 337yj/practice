import React, { useState } from 'react';
import "./XY.css"

export default function XY() {
  const [pointer, setPointer] = useState({x:0, y:0})
  const [num, setNum] = useState(0)

  const handleClick = () =>{
    setNum(num+1)
    console.log('click🎉')
  }
  
  return (
    <div className='container' onPointerMove={(e)=>{
      setPointer({x: e.clientX, y: e.clientY})
    }}>
      <div className='pointer'
      style={{transform: `translate(${pointer.x}px, ${pointer.y}px)`}}/>
      <button onClick={handleClick}>click</button>
      <span>num : {num}</span>
    </div>
  );
}

