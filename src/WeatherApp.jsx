import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './WeatherApp.css'

export default function WeatherApp() {
      const [weatherInfo, setWeatherInfo] = useState({})
      let updateInfo = (newInfo) => {
            setWeatherInfo(newInfo);
      }
      return (
            <div className="WeatherApp" >
                  <h1 style={{fontFamily: "serif"}}>Weather App</h1>
                  <SearchBox updateInfo={updateInfo}></SearchBox>
                  <InfoBox info={weatherInfo}></InfoBox>
            </div>
      )
}