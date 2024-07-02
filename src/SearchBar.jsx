function SearchBar({city,setCity,getWeather}){
    return(
        <>
        <input type="text" value={city} placeholder="Type in your preferred location"
         onChange={(e) => setCity(e.target.value)} />
        {/* <button onClick={getWeather}>Search</button> */}
        </>
    )
    }
    export default SearchBar