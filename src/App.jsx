import { useEffect, useState } from "react";
import "./App.css";
import "./Weather.css";
import "./search.css";
import SearchBar from './SearchBar'
import WeatherDisplay from './WeatherDisplay'
import ForeCast from "./ForeCast";
import emoji from './assets/icons8-four-seasons-48.png'
import videoc from './assets/weather3.mp4'
function App() {

  const [city,setCity]=useState('')
  const [weatherInfo,setWeatherInfo]=useState(null)
  // const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
 
  useEffect(()=>{
    const deBounce = setTimeout(()=>{
        if(city){
          getWeather(city)
        }
    },2000)
    return ()=>clearTimeout(deBounce)
  },[city])
  
  
  
  async function getWeather(city){
  //  setLoading(true)
   setWeatherInfo(null)
   setError(null)
// console.log(setSuggestions)
   
   try{
    const encodedCity = encodeURIComponent(city)
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=5e7f987153f14cb380e231025242706&q=${encodedCity}&days=7&aqi=no&alerts=no`)
   
    if(!response.ok){
    throw new Error('City not found')
   }
   
   const data = await response.json()
    setWeatherInfo(data)
    console.log(data)
  } 
   catch(error){
    setError(error.Message)
   }
  //  finally{
  //   setLoading(false)
  //  }
  }

  return (
    <div className="app">
      <video className="vid-bg" src={videoc} autoPlay muted loop></video>
     <h1 className="title">CLIMEY <span><img src={emoji} alt="" /></span> </h1>

{  !weatherInfo && <SearchBar city={city} setCity={setCity} getWeather={getWeather}/>   
}    
      <div className="sub-app">
        { weatherInfo && <WeatherDisplay weatherInfo={weatherInfo} setWeatherInfo={setWeatherInfo}/>
        }    
        {    weatherInfo && <ForeCast weatherInfo={weatherInfo} setWeatherInfo={setWeatherInfo}/>
        }
      </div> </div>
  );
}




export default App;
 















  // fetch('https://api.weatherapi.com/v1/current.json?key=5e7f987153f14cb380e231025242706&q=Otun&aqi=no')

// fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=371c7a2a11038ee477c3f51840e21bd5')

{/* https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=4de0313f8347da5b3b85ee98a1d9f916         */}
