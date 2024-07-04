

function WeatherDisplay({weatherInfo, setWeatherInfo}){

    
    function getCurrentDay(dateStr){
        
        const newDay = new Date(dateStr)
        const options = {
            weekday:'long',
            hour: '2-digit',
            minute:'2-digit'
        }
        return newDay.toLocaleDateString('en-us',options)
    }
    
    return(
        <div className='weather'>
            <div className="weather-display">
                <div className="weather-display-info">
                    
                    <div className="half-page">
                        <div className="weather-info-img">
                            <img src={weatherInfo.current.condition.icon}/>
                        </div>
                        <div className="temperature">
                            <p> {weatherInfo.current.temp_c}°</p>
                        </div>
                        <div className="condition">
                            <p> {weatherInfo.current.condition?.text}<span></span></p>
                        </div>
                        <div className="day">
                            <p>{getCurrentDay(weatherInfo.current.last_updated)}</p>
                        </div>
                       
                        <div className="chance">
                            <p>Chance of Rainfall :{weatherInfo.forecast.forecastday[0].hour[0].chance_of_rain}%</p>
                        </div>
                        <div className="location">
                            <p>{weatherInfo.location.name}, <span className="country">{weatherInfo.location.country}</span></p>
                        </div>
                    </div>
                    
                    {/* <div className="feels-like">
                        <p>Feels like {Math.round(weatherInfo.current.feelslike_c)}°C</p>
                    </div> */}
                    
                </div>
            </div>
     
            </div>
    )
}
export default WeatherDisplay