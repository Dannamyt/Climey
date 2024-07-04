function SearchBar({city,setCity,getWeather}){
    return(
        <>
        <input type="text" value={city} placeholder="Type in your preferred location"
         onChange={(e) => setCity(e.target.value)} />
        </>
    )
    }
    export default SearchBar