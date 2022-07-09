import React from 'react'
import { Carta } from './Carta'

export const Body = ({data}) => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,320px)",gap:"2rem",justifyContent:"center"}}>
        
        {data && data.map((value)=>{
          if(value.name.common=="Nepal"){
            return <Carta name={value.name.common} pop={value.population} reg={value.region} cap={value.capital} imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg/320px-Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg.png"}/>  
            
          }else{
            return <Carta name={value.name.common} pop={value.population} reg={value.region} cap={value.capital} imagen={value.flags.png}/>  
            
          }
          })}
    </div>
  )
}
