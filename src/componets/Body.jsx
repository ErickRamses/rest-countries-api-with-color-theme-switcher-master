import React from 'react'
import { Carta } from './Carta'

export const Body = () => {
  return (
    <div style={{display:"grid",background:"red",gridTemplateColumns:"repeat(auto-fit,300px)",gap:"1rem",justifyContent:"center"}}>
        <Carta/>
        <Carta/><Carta/><Carta/><Carta/><Carta/><Carta/><Carta/><Carta/><Carta/><Carta/><Carta/><Carta/>
    </div>
  )
}
