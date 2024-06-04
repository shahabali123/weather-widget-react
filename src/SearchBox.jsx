import { TextField } from "@mui/material"
import Button from '@mui/material/Button';
import { Search } from "@mui/icons-material";
import { useState } from "react";





export default function SearchBox({updateInfo}){

    let apiKey = "943973801a2ca764057382325bc4f3d8"
    let uri = `https://api.openweathermap.org/data/2.5/weather?`

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${uri}q=${city}&appid=${apiKey}&units=metric`);
        
            let jsonResponse = await response.json();
    
            let results = {
                temp: jsonResponse.main.temp,
                minTemp: jsonResponse.main.temp_min,
                maxTemp: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                windSpeed: jsonResponse.wind.speed,
                cityName: jsonResponse.name,
                clouds: jsonResponse.weather[0].main,
                cloudsInfo: jsonResponse.weather[0].description,
    
            }
            return results;
        }catch(err){
            throw err;
        }
        
    }
    

    let handleFormSubmit = async(event)=>{
        try{
            event.preventDefault();
            setCity("");
            let info = await getWeatherInfo()
    
            updateInfo(info);
        }catch(err){
            setError(true);
        }
        
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    return(
        <>
        <div className="searchBox">
            <h1>Search for Weather!</h1>
            <form action="" onSubmit={handleFormSubmit} >
                <TextField
                id="city"
                name="city"
                label="Search weather"
                variant="outlined"
                required
                value={city}
                onChange={handleChange}/>
                &nbsp;
                <Button size="large" 
                variant="contained"
                type="submit">Search &nbsp;<Search/></Button>
            </form>
            <br />
            {error && <p style={{color: "red"}}>No Such Place Found!,  Showing Results of my location.</p>}
            </div>
        </>
    )
}