import windSpeed from './assets/icons8-wind-speed-43-47-50.png'
import windDirection from './assets/icons8-wind-direction-50.png'
import humidity from './assets/icons8-humidity-50.png'
import ForeCast from './ForeCast'



function WeatherDisplay({weatherInfo, setWeatherInfo}){

    
    function getCurrentDay(dateStr){
        
        const newDay = new Date(dateStr)
        
        const options = {
            weekday:'long',
            year:'numeric',
            month: 'long',
            day:'numeric',
            
        }
        return newDay.toLocaleDateString('en-us',options)
    }
    
    return(
        <>
            <div className="weather-display">
                <div className="weather-display-info">
                    <div className="name">
                        <p>{getCurrentDay(weatherInfo.current.last_updated)}</p>
                        <p>Weather Forecast in {weatherInfo.location.name}, <span className="country">{weatherInfo.location.country}</span></p>
                    </div>
                    <div className="temperature">
                        <p> {weatherInfo.current.temp_c}°</p>
                    </div>
                    <div className="weather-info-img">
                   <img src={weatherInfo.current.condition.icon}/>
                   </div>
                    <div className="condition">
                        <p> {weatherInfo.current.condition?.text}<span></span></p>
                    </div>
                    <div className="feels-like">
                        <p>Feels like {Math.round(weatherInfo.current.feelslike_c)}°C</p>
                    </div>
                    <div className="humidity">
                    <img src={humidity} alt="humidity"  />
                        <p>{weatherInfo.current.humidity}%</p>
                    </div>
                    <div className="windspeed">
                        <img src={windSpeed} alt="wind-speed"  />
                        <p>{weatherInfo.current.wind_kph}k/h</p>
                    </div>
                    <div className="wind-direction">
                      <img src={windDirection} alt="wind-direction"  />
                        <p> {weatherInfo.current.wind_degree}°</p>
                    </div>
                </div>
            </div>
            <h2>Weather Forecast for the Next 7days</h2>
            <ForeCast weatherInfo={weatherInfo} setWeatherInfo={setWeatherInfo}/>
            </>
    )
}
export default WeatherDisplay