import React from 'react';

const WeatherDisplay = ({ weatherData, loading, error }) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching weather data: {error}</div>;
    }

    if (!weatherData) {
        return null;
    }

    return (
        <div>
            <h2>Weather in {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherDisplay;