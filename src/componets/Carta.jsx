import React from 'react'

export const Carta = ({name,imagen,pop,reg,cap}) => {

  const stilo={
    background:"hsl(209, 23%, 22%)",
    boxShadow:"20px,20px",
    marginBottom:"35px"

  }
  return (
    //population region capital
    //if nepal make height
    <div style={stilo}>
      
      <b>{name}</b>
       
      

        <img src={imagen} loading={"lazy"} style={{width:"320px"}}/>
      
      <div style={{textAlign:"left",paddingLeft:"5px"}}>
        Population: {pop}
        <br/>
        Region: {reg}
        <br/>
        Capital: {cap}


      </div>
    </div>
  )
}
