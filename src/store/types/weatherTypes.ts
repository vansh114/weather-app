export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

export interface WeatherData {
    city: string;
    temperature: number;
    condition: string;
};

interface FetchWeatherRequest {
    type: typeof FETCH_WEATHER_REQUEST;
};

interface FetchWeatherSuccess {
    type: typeof FETCH_WEATHER_SUCCESS;
    payload: WeatherData;
};

interface FetchWeatherFailure {
    type: typeof FETCH_WEATHER_FAILURE;
    payload: string;
};

export type weatherActionTypes = FetchWeatherRequest | FetchWeatherSuccess | FetchWeatherFailure;

export interface WeatherState {
    loading: boolean;
    data: WeatherData | null;
    error: string | null;
};