import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import React,{useEffect,useState} from 'react';
import { response } from 'express';

function App() {
  const[backendData,setBackendData]=useState([{}])
  useEffect(()=>{
    fetch("/api").then(
      respone=>response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  },[])
  return (<Home/>
   
  );
}

export default App;
