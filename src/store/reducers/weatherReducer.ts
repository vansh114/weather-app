import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, weatherActionTypes, WeatherState } from "../types/weatherTypes";

const initialState: WeatherState = {
    loading: false,
    data: null,
    error: null,
}

export const weatherReducer = (state = initialState, action: weatherActionTypes) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_WEATHER_SUCCESS:
            return { loading: false, data: action.payload, error: null };
        case FETCH_WEATHER_FAILURE:
            return { loading: false, data: null, error: action.payload };
        default:
            return state;
    }
};