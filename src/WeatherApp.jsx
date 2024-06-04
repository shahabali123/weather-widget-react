import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

import React, { useState } from 'react'

function WeatherApp() {
    const [weatherInfo, setWeatherInfo]= useState({
        cityName: "Mansehra",
        clouds: "Clouds",
        cloudsInfo: "broken clouds",
        humidity: 44,
        maxTemp: 20.41,
        minTemp: 20.41,
        temp: 20.41,
        windSpeed: 3.6,
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }

  return (
    <>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </>
  )
}

export default WeatherApp