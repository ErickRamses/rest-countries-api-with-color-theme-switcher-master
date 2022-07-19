import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'


export const Navbar = ({searh,filtrareg}) => {
  
  const input =useRef()
  const filtr =useRef()
  
  //useEffect(()=>{console.log("d")},input.current.value)

  //make it in app
  return (
  
  <div style={{borderBottom:"1px solid Black",position:"sticky",top:"0px",background:"hsl(209, 23%, 22%)",marginBottom:"10px",zIndex:"1"}}>
      
      <div style={{padding:"10px",position:"sticky",top:"0px",background:"hsl(209, 23%, 22%)",display:"flex",alignItems:"baseline",maxWidth:"1248px",textAlign:"center",marginLeft:"auto",marginRight:"auto"}}>

        
            <input placeholder='🔎' style={{width:"100%",maxWidth:"400px",borderRadius: "8px",boxShadow:"6px 2px 4px .1px rgba(0,0,0,0.19)",backgroundColor:"hsl(209, 33%, 22%)",color:"white",fontSize:"17px"}} ref={input} onChange={()=>{searh(input)}} type="text"/>

       
            
        <div style={{marginLeft:"auto"}}>
            <label style={{fontSize:"17px"}}>Filter by region:   


              <select name="region" ref={filtr} style={{borderRadius: "8px",marginLeft:"3px",backgroundColor:"hsl(209, 33%, 22%)",color:"white",fontSize:"17px"}} onChange={()=>{filtrareg(filtr)}}>
              <option value="">none</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="Antarctic">Antarctic</option>
            </select>
            </label>
          
        </div>  
      </div>

    </div>
  )
}
