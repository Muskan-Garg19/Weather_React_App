import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
      const [location, setLocation] = useState("");
      const [error, setError] = useState(false);
      const API_URL = import.meta.env.VITE_API_URL
      const API_KEY = import.meta.env.VITE_API_KEY;

      let getWeatherInfo = async () => {
            try {
                  let response = await fetch(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`);
                  let jsonResponse = await response.json();
                  let result = {
                        location: location,
                        temp: jsonResponse.main.temp,
                        tempMin: jsonResponse.main.temp_min,
                        tempMax: jsonResponse.main.temp_max,
                        humidity: jsonResponse.main.humidity,
                        feelsLike: jsonResponse.main.feels_like,
                        pressure: jsonResponse.main.pressure,
                        weather: jsonResponse.weather[0].description,
                        wind: jsonResponse.wind.speed,
                  }
                  console.log(result);
                  return result;
            }
            catch (err) {
                  throw err;
            }
      }

      let handleChange = (event) => {
            setLocation(event.target.value);
      }
      let handleSubmit = async (event) => {
            try {
                  setError(false);
                  event.preventDefault();
                  setLocation("");
                  let newInfo = await getWeatherInfo();
                  updateInfo(newInfo);
            }
            catch (error) {
                  setError(true);
                  updateInfo({});
            }
      }
      return (
            <>
                  <div className='SearchBox'>
                        <form onSubmit={handleSubmit}>
                              <TextField
                                    id="location"
                                    label="Location Name"
                                    variant="outlined"
                                    value={location}
                                    onChange={handleChange}
                                    required
                              />
                              <br /><br />
                              <Button
                                    variant="contained"
                                    endIcon={<SearchIcon />}
                                    type="submit"
                              >Search
                              </Button>
                              <br /><br />
                              {error && <Alert severity="error" style={{width: "500px", margin: "0 auto"}}>Error! No such place exists in our API</Alert>}
                        </form>
                  </div>
            </>
      )
}