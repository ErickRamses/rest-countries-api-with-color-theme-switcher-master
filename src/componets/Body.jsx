import React from 'react'
import { Carta } from './Carta'

export const Body = ({data}) => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,320px)",gap:"2rem",justifyContent:"center"}}>
        
        {data && data.map((value)=>{return <Carta name={value.name.common} pop={value.population} reg={value.region} cap={value.capital} imagen={value.flags.png}/>  })}
    </div>
  )
}
