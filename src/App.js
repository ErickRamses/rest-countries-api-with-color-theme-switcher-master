import logo from './logo.svg';
import './App.css';
import { Navbar } from './componets/Navbar';
import { Body } from './componets/Body';
import { useEffect, useState } from 'react';

function App() {
  const [data,setdata] =useState(null);
      useEffect(()=>{
       //  https://api.nationalize.io/?name=
        // https://restcountries.com/v3.1/all
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data =>{   
          //console.log(data)
          //console.log(data[0])
          //console.log(data[0].name.common)
          setdata([...data])
        })
      },[])

  return (
    //map every name
    <div className="App">
      
        <Navbar/>
        <Body/>
          
          {
          // data && data.map((value)=>{
          //  return <div>{value.name.common}</div>})
          }
    </div>
  );
}

export default App;
