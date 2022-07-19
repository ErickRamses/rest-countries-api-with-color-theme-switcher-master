import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Country = () => {
    const {name}=useParams() 
    const [aray,setaray] =useState(null);
    let navigate = useNavigate();

    // i could use the local storage instead but... nah

    useEffect(()=>{
        //if name is 3 long fect from https://restcountries.com/v3.1/alpha/GRC

        //setaray(JSON.parse(localStorage.getItem("datos")))         
     if(name.length==3){
        fetch(`https://restcountries.com/v3.1/alpha/${name}`)
     .then(res=>res.json())
     .then(data =>{   
        setaray(data)
              
        
    })
     }else{
        fetch(`https://restcountries.com/v3.1/name/${name}`)
     .then(res=>res.json())
     .then(data =>{   
        setaray(data)
              
        
    })

     }   
    
     
   },[])


  return (
    <div style={{color:"white"}}>
       <div style={{maxWidth:"1440px",marginLeft:"auto",marginRight:"auto"}}>

       
       
            <div style={{paddingRight:"auto",paddingLeft:"10px",paddingTop:"10px"}}>
                <button className='button' onClick={()=>{navigate(`/`);}}>back</button>
            </div>
            <br></br>
       {aray  &&   
       <div style={{maxWidth:"1440px",display:"flex",flexWrap:"wrap",alignItems:"center",textAlign:"left",marginLeft:"auto",marginRight:"auto",marginTop:"1%"}}>
            
           
            
            <div style={{width:"100px",minWidth:"320px",flexGrow:"1",paddingLeft:"10px",paddingRight:"10px"}}>
                <img src={aray[0].flags.svg} style={{width:"100%"}}></img>

            </div>
        {aray[0].languages ==undefined ||aray[0].currencies ==undefined   ? 
        
        <div style={{width:"50%",minWidth:"350px",fontSize:"1.2em",marginLeft:"10px"}}>
            Common name: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].name.common}</span>
        <br/>
        Population: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].population.toLocaleString('en-US')}</span>
        <br/>
        Region: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].region}</span>
        <br/>    

        </div>
        
        
        :
        
            
            <div style={{width:"50%",minWidth:"350px",fontSize:"1.2em",marginLeft:"10px"}}>

       

          
        
        Native name: <span style={{color:"rgb(194, 194, 194)"}}>{eval(`aray[0].name.nativeName.${Object.keys(aray[0].languages)[0]}.official`) }</span>    
        <br/>     
           
        Official name: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].name.official}</span>    
        <br/>
        Common name: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].name.common}</span>
        <br/>
        Population: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].population.toLocaleString('en-US')}</span>
        <br/>
        Region: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].region}</span>
        <br/>
        Sub region: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].subregion}</span>    
        <br/>
        Capital: <span style={{color:"rgb(194, 194, 194)"}}>{aray[0].capital}</span>
        <br></br>
        Currency: <span style={{color:"rgb(194, 194, 194)"}}>{eval(`aray[0].currencies.${Object.keys(aray[0].currencies)[0]}.symbol`) } {eval(`aray[0].currencies.${Object.keys(aray[0].currencies)[0]}.name`) }</span>
        <br></br>
        Languajes: <span style={{color:"rgb(194, 194, 194)"}}>{eval(`aray[0].languages.${Object.keys(aray[0].languages)[0]}`)} {eval(`aray[0].languages.${Object.keys(aray[0].languages)[1]}`)} {eval(`aray[0].languages.${Object.keys(aray[0].languages)[2]}`)} {eval(`aray[0].languages.${Object.keys(aray[0].languages)[3]}`)} {eval(`aray[0].languages.${Object.keys(aray[0].languages)[4]}`)}</span>
        <br></br>
        Coat of arms: <div style={{}}>
        <img src= {aray[0].coatOfArms?.svg} alt="" width="120px" />
            </div>
                
        Bordering Countries: {aray[0].borders?.map((value)=>{
            return <button key={value} className='button' style={{marginLeft:"3px",marginTop:"3px"}} onClick={()=>{navigate(`/country/${value}`) 
            window.location.reload();
        }}>{value}</button>

        })} 
        <br></br>
            
            </div>
            
            
            
            
            
            
            }
            
       
       
      
       
       </div>}
        </div>
    </div>
  )
}

export default Country