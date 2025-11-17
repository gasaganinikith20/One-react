import React  from "react";
import { useState } from "react";
function Events(){
  const[Give,SetGive]=useState()
  
    function Handle(){
      alert("Double Click To Continue")
       
    }
    function Double(){
        alert("🍽️! Let’s see the Dinner Menu!");
        window.open( "https://www.indianhealthyrecipes.com/indian-dinner-recipes","_blank")

    }

  return(
    <div>
        <button onClick={Handle}>Click Once</button>

        <button onDoubleClick={Double}>Double(Menu)</button>

        <button onMouseOver={()=>SetGive(true)} onMouseOut={()=>SetGive(false)}>Over or Out</button>
        {Give && <h1>your giving moouseover</h1>}

    </div>
  )

}
export default Events