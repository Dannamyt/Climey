import  './Weather.css'

function ForeCast({weatherInfo, setWeatherInfo}){
    
    function getDayOfWeek(dateString){
        const date = new Date(dateString)
        return date.toLocaleDateString('en-us',{weekday: 'long'})
    }
    
    return(
        <>
       <div>
        {
            weatherInfo?.forecast?.forecastday.map((day) =>
              <div key={day.date}>
                 <p>{getDayOfWeek(day.date)}</p>
                  <div className="forecast" >
                      <div key={day.date}>
                            <p>00:00AM</p>
                            <p>{day.hour[0].chance_of_rain}%</p>
                            <div>
                                <img src={day.hour[0].condition.icon} alt="" />
                                <p>{day.hour[0].condition.text}</p>
                            </div>
                            <p>{day.hour[0].temp_c}</p>
                        </div>
                      <div key={day.date}>
                            <p>06:00AM</p>
                            <p>{day.hour[0].chance_of_rain}%</p>
                            <div>
                                <img src={day.hour[6].condition.icon} alt="" />
                                <p>{day.hour[6].condition.text}</p>
                            </div>
                            <p>{day.hour[6].temp_c}</p>
                        </div>
                      <div key={day.date}>
                            <p>12:00NOON</p>
                            <p>{day.hour[12].chance_of_rain}%</p>
                            <div>
                                <img src={day.hour[12].condition.icon} alt="" />
                                <p>{day.hour[12].condition.text}</p>
                            </div>
                            <p>{day.hour[12].temp_c}</p>
                        </div>
                      <div key={day.date}>
                            <p>06:00PM</p>
                            <p>{day.hour[18].chance_of_rain}%</p>
                            <div>
                                <img src={day.hour[18].condition.icon} alt="" />
                                <p>{day.hour[18].condition.text}</p>
                            </div>
                            <p>{day.hour[18].temp_c}</p>
                        </div>
                  </div>
              </div>
            
            )
        }
       </div>
        </>
    )
}
export default ForeCast