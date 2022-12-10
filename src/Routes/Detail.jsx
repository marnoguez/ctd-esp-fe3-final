import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Detail = () => {

  

  let {id} = useParams()

  const [odontologoDetalle, setOdontologoDetalle] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setOdontologoDetalle(res.data))
    }, []);

  return (
    <>
      <div style= {{minHeight: '68vh',}}>
      <h1>Detail Dentist id </h1>
      
      
      <main style={{display:"flex", flexWrap:"wrap", border:"solid black 2px"}}>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Name</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Email</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Phone</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Website</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.name}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.email}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.phone}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.website}</div>


      </main>
      </div>
      
    </>
  )
}

export default Detail