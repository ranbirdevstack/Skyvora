import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import './Searchbox.css'
import { useState } from 'react';

export default function Searchbox ({updateinfo}) {

    let [city, setCity] = useState(""); 
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/geo/1.0/direct";
    const API_Key = "82241cd8b03c8f2345a3acf213cbaad9";

    let getweatherinfo = async () => {
        try {
            let response = await fetch(
              `${API_URL}?q=${city}&limit=1&appid=${API_Key}`
            );
            let jsonResponse = await response.json();

            if (jsonResponse.length === 0) {
                throw new Error("City not found");
            }

            let { lat, lon } = jsonResponse[0];

            let weatherRes = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`
            );
            let weatherData = await weatherRes.json();

            let result = {
                city: weatherData.name,
                temp: weatherData.main.temp,
                TempMin: weatherData.main.temp_min,
                TempMax: weatherData.main.temp_max,
                humidity: weatherData.main.humidity,
                feelslike: weatherData.main.feels_like,
                weather: weatherData.weather[0].description
            };

            setError(false);   // ✅ reset error
            return result;

        } catch (err) {
            setError(true);   // ✅ set error
        }
    };

    let handleCity = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();

        let newinfo = await getweatherinfo();

        if (newinfo) {
            updateinfo(newinfo);
            setCity("");
        }
    };

    return(
        <div className='searchbox'>

            <form onSubmit={handleSubmit}>
                <TextField
                  label="City"
                  variant="outlined"
                  required
                  value={city}
                  onChange={handleCity}
                />
                <br /><br />

                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>

            {error && <p style={{color:"red"}}>No such place exists in API</p>}
        </div>
    );
}