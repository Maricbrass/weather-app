import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/weatherApi';

const useWeather = (city) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) return;

        const getWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchWeather(city);
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getWeather();
    }, [city]);

    return { weatherData, loading, error };
};

export default useWeather;