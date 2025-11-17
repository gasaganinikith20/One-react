import React,{useState} from "react";


const Key = () => {
    const[Key,SetKey]= useState("")
function onkeyupclick(){
    SetKey("KeyUp")
}
function onkeydowndownclick(){
    SetKey("KeyDown")
}
  return (
    <div>
        <h3>{Key}</h3>
        <input type="password" onKeyUp={onkeyupclick} onKeyDown={onkeydowndownclick}/>
    </div>
  )
}

export default Key