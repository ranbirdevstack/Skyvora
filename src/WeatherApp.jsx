import Searchbox from "./Searchbox";
import InfoBox from "./InfoBox";
import './WeatherApp.css'
import { useState } from "react";
export default function WeatherApp()
{
 const [weatherinfo,setWeatherInfo]=useState({
        city: 'delhi',
    feelslike: 24.84,
    temp: 25.05,
    TempMin: 25.05,
    TempMax: 25.05,
    humidity: 47,
    weather: 'haze'
 });
 let updateinfo=(result)=>{
     setWeatherInfo(result);
 }
    return(
     <div className="weather"> 
        <h2>Skyvora Weather</h2>
        <Searchbox updateinfo={updateinfo}/>
        <InfoBox info={weatherinfo}/>
     </div>
    );
}