import React  from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Api = () => {
     const[data,setData]=useState([]);
     const[err,setErr]=useState(null);
     useEffect(()=>{
      axios.get("https://fakestoreapi.com/users")
      .then((result) => {
        setData(result.data)
      }).catch((err) => {
        setErr(err.message)
      });
     },[])
     if(err) return <p>error :{err}</p>

  return (
    <div>
       {
        data.map((e)=>{
            return(
                <div key={e.id}>
                    <p><b>username:</b>{e.username}</p>
                </div>
            )
        })
       }
    </div>
  )
}

export default Api