import './search.css'

function SearchBar({city,setCity,getWeather}){
    return(
        <div className='search'>
        <input type="text" value={city} placeholder="Type in your preferred location"
         onChange={(e) => setCity(e.target.value)} />
        </div>
    )
    }
    export default SearchBar