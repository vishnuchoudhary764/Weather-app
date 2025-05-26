import React from 'react'
import { useState } from 'react'
import "./Container.css"
import { useEffect } from 'react'
import sun from "../assets/sun.png"





const Container = (props) => {
    
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    async function getWeather() {
        const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=6e7ba83dc86f4780b06102401252402&q=${city}&aqi=yes`)
        const data = await responce.json()
        console.log(data)
        setWeather(data)
    }
    useEffect(() => {
         document.getElementById ('container').className = props.theme ? 'dark' : 'light';
      }, [props.theme]);
   
    return (
        <div id="container">

             <div id="inputc">
                <div className='head'>
                <img src={sun} alt="sun"/>
               <h1 className='app-name'>Weather App</h1>
             <img src={sun} alt="sun"/>
               </div> 
                   
                <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)} placeholder=" Enter your city..." />
                  <button  id="con-btn" onClick={getWeather}>Search</button>
             </div>
            
            
                  {weather && weather.current && (
            <div id="outputc">
                    <p>Your city : <b>{weather.location.name}</b> </p>
                    <p>Temperature: {weather.current.temp_c}°C</p>
                    <p>Pressure: {weather.current. pressure_in}</p>
                    <p>Wind : {weather.current.wind_mph} km/h</p>
                    <p>humidity: {weather.current.humidity } %</p>
                    <p>Condition: {weather.current.condition.text}</p>
            </div>
            )}
       
        </div>


    )
}

export default Container
