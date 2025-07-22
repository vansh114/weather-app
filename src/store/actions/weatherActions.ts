import axios from 'axios';
import Constants from 'expo-constants';
import { Dispatch } from 'redux';

import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, weatherActionTypes } from '../types/weatherTypes';

const API_KEY = Constants.expoConfig?.extra?.API_KEY;

export const fetchWeather = (city: string) => {
    return async (dispatch: Dispatch<weatherActionTypes>) => {
        dispatch({ type: FETCH_WEATHER_REQUEST });

        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = {
                city: res.data.name,
                temperature: res.data.main.temp,
                condition: res.data.weather[0].description,
            };
            dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data });
        }
        catch (error: any) {
            dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
        }
    }
}