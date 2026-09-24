import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { cloneElement } from 'react';
import './InfoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({ info }) {
      const HOT_URL = import.meta.env.VITE_HOT_URL;
      const COLD_URL = import.meta.env.VITE_COLD_URL;
      const RAIN_URL = import.meta.env.VITE_RAIN_URL;

      return (
            <>
                  {Object.keys(info).length ?
                        <div className="InfoBox">
                              <div className='cardContainer'>
                                    <Card className='weather-card'>
                                          <CardMedia className='weather-img'
                                                image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                                                title="green iguana"
                                          />
                                          <CardContent className='weather-content'>
                                                <Typography className='weather-title' gutterBottom variant="h5" component="div">
                                                      {info.location}&nbsp;
                                                      {info.humidity > 70 ? <ThunderstormIcon></ThunderstormIcon> : (info.temp > 15 ? <WbSunnyIcon style={{ color: "yellow" }}></WbSunnyIcon> : <AcUnitIcon></AcUnitIcon>)}
                                                </Typography>
                                                <Typography className='weather-details' variant="body2" component={"span"}>
                                                      <p>Temperature = {info.temp}&deg;C</p>
                                                      <p>Humidity = {info.humidity}%</p>
                                                      <p>
                                                            <span>Wind speed = {info.wind}m/s</span>&nbsp; &nbsp; &nbsp;
                                                            <span>Pressure = {info.pressure}hPa</span>
                                                      </p>
                                                      <p>Min temp = {info.tempMin}&deg;C</p>
                                                      <p>Max temp = {info.tempMax}&deg;C</p>
                                                      <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C</p>

                                                </Typography>
                                          </CardContent>
                                    </Card>
                              </div>
                        </div> : null
                  }
            </>
      )
}