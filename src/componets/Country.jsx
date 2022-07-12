import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Country = () => {
    const {name}=useParams() 
    const [aray,setaray] =useState(null);
    let navigate = useNavigate();

    useEffect(()=>{


    
     fetch(`https://restcountries.com/v3.1/name/${name}`)
     .then(res=>res.json())
     .then(data =>{   
        setaray(data)
        console.log(aray)        
        
    })
   },[])


  return (
    <div style={{color:"white",display:"flex",justifyContent:"center"}}>
       {aray  &&   
       <div style={{maxWidth:"1440px"}}>
            <button onClick={()=>{navigate(`/`);}}>back</button>
            
            {aray[0].name.common}
            <br></br>
            //make ir a background imafen lol zzz que pro xd god
            <div>
                <img src={aray[0].flags.svg} style={{width:"100%"}}></img>

            </div>
       
       
       
       
      
       
       </div>}
        
    </div>
  )
}

export default Country