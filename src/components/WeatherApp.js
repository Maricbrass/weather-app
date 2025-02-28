import React, { useState } from 'react';
import CityInput from './CityInput';
import WeatherDisplay from './WeatherDisplay';
import { fetchWeather } from '../services/weatherApi';
import '../styles.css';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const onCitySubmit = async (city) => {
        try {
            const data = await fetchWeather(city);
            setWeatherData(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        }
    };

    return (
        <div className="container">
            <h1>Weather App</h1>
            <CityInput onCitySubmit={onCitySubmit} />
            {error && <p>{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Feels Like: {weatherData.main.feels_like}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Pressure: {weatherData.main.pressure} hPa</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Wind Direction: {weatherData.wind.deg}°</p>
                    <p>Visibility: {weatherData.visibility} meters</p>
                    <p>Cloudiness: {weatherData.clouds.all}%</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;