function WeatherDisplay({weatherInfo, setWeatherInfo}){
    return(
        <div className="weather-display">
            <div className="weather-display-info">
                <div className="name">
                    <p>Weather Forecast in {weatherInfo.location.name}, <span className="country">{weatherInfo.location.country}</span></p>
                </div>
                <div className="temperature">
                    <p> 100°</p>
                </div>
                <div className="weather-info-img">
               <img src={weatherInfo.current.condition.icon}/> 
               </div>
                <div className="condition">
                    <p> {weatherInfo.current.condition?.text}<span></span></p>
                </div>
                <div className="feels-like">
                    <p>Feels like {weatherInfo.current.feelslike_c}°</p>
                </div>
                <div className="humidity">
                    <p>Humidity: {weatherInfo.current.humidity}</p>
                </div>
                
          
                <div className="windspeed">
                    <p><span><img src="./assets/" alt=""  /></span>{weatherInfo.current.wind_kph}k/h</p>
                </div>
                <div className="wind-direction">
                    <p>Wind Direction: {weatherInfo.current.wind_degree}deg</p>
                </div>
            </div>
          
        </div>
    )
}
export default WeatherDisplay