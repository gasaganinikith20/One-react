import React from "react";
import { useState } from "react";


function Practise(){
const[dataa,Setdataa]= useState("")

const btn = ()=>{
   Setdataa("We are Inside")
}
return(
    <>
    <h1>{dataa}</h1>
    <button onClick={btn}>ClickMe</button>

    </>
)
}
export default Practise