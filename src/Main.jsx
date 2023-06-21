import React, { useEffect } from 'react'
import './Main.css';
import { useState } from 'react'

function Main() {
  const [input, setInput] = useState('Allahabad');
  const [temp, setTemp] = useState('')
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7348430ee1msh0c4c2080227d37cp103d08jsncd53573b7d37",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const handleOnChange =(e)=>{
    setInput(e.target.value)
  }
  useEffect(()=>{

    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input}`,
      options
    )
    .then((res)=> res.json())
    .then((res)=>setTemp(res.temp))
  },[input])

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date();
  const todaydate = date.getDate();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const Month = months[month];
  const Week = weeks[day];


  return (
    
        <div className="main_container">
           <div className="child">
            <input type="text"  onChange={handleOnChange} placeholder='Search...'/>     
            <h1 className='center_text'>{input}</h1>
            <h3 className='center_text'>{`${Week} ${todaydate} ${Month} ${year}`}</h3>
            <div className="temp_box">
              <h1 id='center_temp'>{temp || "Loading..."}&deg;C </h1>
            </div>
            <h1 className='center_text'>Clouds</h1>
           
           </div>
        </div>
    
  )
}

export default Main