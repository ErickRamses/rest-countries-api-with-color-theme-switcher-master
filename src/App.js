import logo from './logo.svg';
import './App.css';
import { Navbar } from './componets/Navbar';
import { Body } from './componets/Body';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
let pusher=[]
let regio="";
let prev={"current":{"value":""}};
function App() {
  const [data,setdata] =useState(null);
  const [data0,setdata0] =useState(null);
  let navigate =useNavigate();
  
  useEffect(()=>{

        
       //  https://api.nationalize.io/?name=
        // https://restcountries.com/v3.1/all
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data =>{   
          //console.log(data)
          //console.log(data[0])
          //console.log(data[0].name.common)
          data.sort(function(a, b){
            if(a.name.common.toLowerCase() < b.name.common.toLowerCase()) { return -1; }
            if(a.name.common.toLowerCase() > b.name.common.toLowerCase()) { return 1; }
            return 0;
        })
        

          setdata([...data])
          setdata0([...data])
        })
      },[])

  function searh(input){
    prev=input
    
    pusher=[]
    for(let x of data0){
      

    //   carray.forEach(element => {
    //     if(element.indexOf(name)==0){
    //         result = element.substring(name.length+1);
    //     }
    // } )
     
      if(x.name.common.toLowerCase().indexOf(input.current.value.toLowerCase())==0){
        //console.log(x.name.common)

        //then other if depending of  comto
        //wtf
             
              if(regio==""){
                pusher.push(x)
                
              }else{
                if(x.region.indexOf(regio)==0){
                  pusher.push(x)
                }
                
              }

      }
    }
    setdata(pusher)
    
    //setdata()
  }

  function filtrareg(filtr){
    regio=filtr.current.value
   console.log(regio)
    searh(prev)
  }
  function cliked(data){
    
    navigate(`/country/${data}`)
    //<Link to="/expenses">Expenses</Link>

  }
  
  return (


    //2 set datas??

    //stop at 1440px

    // pass data them map every name yhen sise imagenlazy cartinfo? shadow formater navbar searcherdetectachange 2datas flitrar improveflags alfabrt fix and improve nav icons filtrador
    //filtrador bro  makeimg smalaer to fit x2 fixnavar addicons?? animation new
    //make flag to go to linl
    //stile and done ? i hope jsjajdajdsajsdjsajw
    <div className="App" style={{background:"hsl(207, 26%, 17%)",color:"white"}}>
          
        <Navbar searh={searh} filtrareg={filtrareg}/>
        <Body data={data} cliked={cliked}/>
          
          {
          // data && data.map((value)=>{
          //  return <div>{value.name.common}</div>})
          }
    </div>
  );
}

export default App;
