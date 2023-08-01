import React from 'react'
import { useState } from 'react';
import { Another } from '../IMPORTEXPORT/Export';
import ImportExpport from '../IMPORTEXPORT/ImportExpport';
function Usestate() {
    const [change,setChange]=useState('hello');
    const [count,setCount]=useState(0);
  return (
    <div>
         <div>
            <p> hi{change}</p>
            <button className="count-btn" onClick={()=>setChange('welcome')}>click</button>
        </div>
        <div className='count-container'>
            <p> count of {count}  count</p>
            <button className="count-btn" onClick={() =>setCount(count +1)}>increse</button>
            <button onClick={()=>setCount(count - 1)}>decrese</button>
            <button onClick={()=>setCount(0)}>reset</button>
            <Another/>
            <ImportExpport/>
        </div>
    </div>
  )
}

export default Usestate