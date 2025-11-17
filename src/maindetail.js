import React, { useState } from "react";
import { useEffect } from "react";

const Main = ({ name, price }) => {
  const [Data, setData] = useState({ name: "",price: ""});

  const maindata = () => {
    setData({ name, price });
  };
  useEffect(()=>{
    console.log("Nikki")
  },[])


  return (
    <div>
      <button onClick={maindata}>Show Items</button>

      <h3>Show Items</h3>
      <h1>Name: {Data.name}</h1>
      <h1>Price: {Data.price}</h1>
    </div>
  );
};

export default Main;
