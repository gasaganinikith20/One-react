import React from "react";
import Main from "./maindetail";

function Details(){
    const details = {name:"Samosa" ,price:25 }
   

return(
    <>
    
     <Main name = {details.name} price = {details.price} />
     </>
)
}
export default Details