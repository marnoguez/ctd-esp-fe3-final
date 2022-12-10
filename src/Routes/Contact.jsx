import React from 'react'
import Form from '../Components/Form'



const Contact = () => {
  return (
    <div style={{display: "flex", textAlign:"center", flexDirection:"column", alignItems:"center", padding:"25px", position: 'relative',}}>
      <div style={{padding:"25px"}}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
      <Form/>
    </div>
  )
}

export default Contact