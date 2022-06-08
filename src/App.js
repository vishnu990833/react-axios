import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'

 const App = () => {
   const[data,setData]=useState([]);
   useEffect(() => {
     axios.get("https://restcountries.com/v2/all").then(
       response => setData(response.data)
     )
   },[])
  return (
    <div>
    {data.map(item=> 
      <li key={item.id}>{item.name}</li>)
     
    }
    </div>
  )
}
export default App;