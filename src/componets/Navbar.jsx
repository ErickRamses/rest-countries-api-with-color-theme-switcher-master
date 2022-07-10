import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'


export const Navbar = ({searh,filtrareg}) => {
  
  const input =useRef()
  const filtr =useRef()
  
  //useEffect(()=>{console.log("d")},input.current.value)

  //make it in app
  return (
  
  <div style={{position:"sticky",top:"0px",background:"hsl(209, 23%, 22%)",marginBottom:"10px"}}>
      
      <div style={{padding:"10px",position:"sticky",top:"0px",background:"hsl(209, 23%, 22%)",display:"flex",alignItems:"baseline",maxWidth:"1245px",textAlign:"center",marginLeft:"auto",marginRight:"auto"}}>

        <div >
            <input style={{width:"100%"}} ref={input} onChange={()=>{searh(input)}} type="text"/>

        </div>
            
        <div style={{marginLeft:"auto"}}>
            <label>Filtered by region: 


              <select name="region" ref={filtr} onChange={()=>{filtrareg(filtr)}}>
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
