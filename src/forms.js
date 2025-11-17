import React,{useState} from "react";

function Form(){
 const[data,Setdata]= useState("")

 function onfocusclick(){
    Setdata("onFocus")
 }
 function onblurclick(){
    Setdata("onBlur")
 }
return(
    <form>

        <h2>{data}</h2>
        <input type="text" onFocus={onfocusclick} onBlur={onblurclick}/>


    </form>
)
}
export default Form