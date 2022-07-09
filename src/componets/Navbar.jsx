import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'


export const Navbar = () => {
  
  const input =useRef()

  
  //useEffect(()=>{console.log("d")},input.current.value)

  //make it in app
  return (
    <div>
      <input ref={input} onChange={()=>{console.log(input.current.value)}} type="text"/>
    </div>
  )
}
