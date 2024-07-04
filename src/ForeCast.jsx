import  './Weather.css'
import windSpeed from './assets/icons8-wind-speed-43-47-50.png'
import windDirection from './assets/icons8-wind-direction-50.png'
import humidity from './assets/icons8-humidity-50.png'

function ForeCast({weatherInfo, setWeatherInfo}){
    function getDayOfWeek(dateString){
        const date = new Date(dateString)
        return date.toLocaleDateString('en-us',{weekday: 'short'})
    }
    return(
    <>
       <div className='container'>
            <p>Weather Forecast for the Next 6 days</p>
            <div className='overall'>
                {
                    weatherInfo?.forecast?.forecastday.slice(1).map((day) =>
                    <div  key={day.date}>
                        <div className="forecast" >
                            {/* <div key={day.date}>
                                    <p className='time'>00:00AM</p>
                                    <p>Chances of rainfall: {day.hour[0].chance_of_rain}%</p>
                                    <div>
                                        <img src={day.hour[0].condition.icon} alt="" />
                                        <p>{day.hour[0].condition.text}</p>
                                    </div>
                                    <p>{day.hour[0].temp_c}°</p>
                                </div> */}
                            <div key={day.date} className='data-container'>
                            <p>{getDayOfWeek(day.date)}</p>
                            <div>
                                        <img src={day.hour[15].condition.icon} alt="" />
                                        <p className='forecast-condition'>{day.hour[6].condition.text}</p>
                                    </div>
                                    <p className='forecast-temp'>{day.hour[6].temp_c}°</p>
                                </div>
                            {/* <div key={day.date} className='per-time'>
                                    <p className='time'>12:00NOON</p>
                                    <p>Chances of rainfall: {day.hour[12].chance_of_rain}%</p>
                                    <div>
                                        <img src={day.hour[12].condition.icon} alt="" />
                                        <p>{day.hour[12].condition.text}</p>
                                    </div>
                                    <p>{day.hour[12].temp_c}°</p>
                                </div> */}
                            {/* <div key={day.date}>
                                    <p  className='time'>06:00PM</p>
                                    <p>Chances of rainfall: {day.hour[18].chance_of_rain}%</p>
                                    <div>
                                        <img src={day.hour[18].condition.icon} alt="" />
                                        <p>{day.hour[18].condition.text}</p>
                                    </div>
                                    <p>{day.hour[18].temp_c}°</p>
                                </div> */}
                        </div>
                    </div>
                
                    )
                }
            </div>
             <div className='highlight' >
             <p>Today's Highlights</p>

                <div className="measurements">
                    <div className="humidity">
                        <p>Humidity</p>
                            <img src={humidity} alt="humidity"  />
                                <p className='value'>{weatherInfo.current.humidity}%</p>
                        </div>
                            <div className="windspeed">
                                <p>Wind Sped</p>
                                <img src={windSpeed} alt="wind-speed"  />
                                <p className='value'>{weatherInfo.current.wind_kph}k/h</p>
                            </div>
                            <div className="wind-direction">
                                <p>Wind Direction</p>
                              <img src={windDirection} alt="wind-direction"  />
                                <p className='value'> {weatherInfo.current.wind_degree}°</p>
                            </div>
                </div>
            </div>
       </div>
                
        </>
    )
}
export default ForeCast