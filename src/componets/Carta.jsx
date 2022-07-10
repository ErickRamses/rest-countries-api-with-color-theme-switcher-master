import React from 'react'

export const Carta = ({cliked,name,imagen,pop,reg,cap}) => {
 

  const stilo={
    
   
    marginBottom:"0px",
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow:"4px 4px 4px 3px rgba(0,0,0,0.19)",
    
  }
  
  //border: 5px solid #1C6EA4,
  return (
    //population region capital
    //if nepal make height
    
    //make an unsterched version maybe in the furtuer
    <div style={stilo} className="animation" onClick={()=>{cliked(name)}}>
      
      <b>{name}</b>
       
        
        <div style={{paddingBottom:"10px"}}>
          
          <img src={imagen} loading={"lazy"} style={{width:"288px",height:"192px"}}/>
        </div>
      
      <div style={{textAlign:"left",paddingLeft:"10px",paddingBottom:"20px"}}>
        Population: <span style={{color:"rgb(194, 194, 194)"}}>{pop.toLocaleString('en-US')}</span>
        <br/>
        Region: <span style={{color:"rgb(194, 194, 194)"}}>{reg}</span>
        <br/>
        Capital: <span style={{color:"rgb(194, 194, 194)"}}>{cap}</span>
        
        
        
      </div>
    </div>
  )
}
