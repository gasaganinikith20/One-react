import React, { useState } from "react";

function Click(){
    const[count,setCount]= useState(0)
return(
    <div className="Increase">
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>ClickIncrease</button>
    <button onClick={()=>setCount(count-1)}> ClickDecrease</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </div>
)
}
export default Click;