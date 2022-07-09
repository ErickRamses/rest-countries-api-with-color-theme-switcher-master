import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'


export const Navbar = ({searh}) => {
  
  const input =useRef()

  
  //useEffect(()=>{console.log("d")},input.current.value)

  //make it in app
  return (
  
  <div style={{padding:"10px",position:"sticky",top:"0px",background:"red",display:"flex",}}>
      <input style={{}} ref={input} onChange={()=>{searh(input)}} type="text"/>
      <input />
    </div>
  )
}
