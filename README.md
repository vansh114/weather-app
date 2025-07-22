# Weather App
## Project Overview
A modern, responsive weather forecast application built with React Native and Expo. This app allows users to search for weather information by city name and displays current temperature, weather conditions, and city details. The app demonstrates the implementation of Redux with Redux Thunk for asynchronous API integration.

## Features
- Search weather by city name
- Display current temperature in Celsius
- Show weather conditions
- Clean and intuitive user interface
- Loading indicators and error handling
- Redux state management with Thunk middleware for API calls

## Technology Stack
- Frontend Framework : React Native (with Expo)
- State Management : Redux, Redux Thunk
- API Integration : Axios
- Language : TypeScript
- UI Components : React Native core components
- Navigation : Expo Router

## Installation
1. Clone the repository
```
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```
2. Install dependencies
```
npm install
```
3. Start the development server
```
$env:API_KEY="your_api_key_here"; npx expo start
```

## Usage
After starting the app, you can:

1. Enter a city name in the search field
2. Tap the "Get Weather" button
3. View the current weather information for the specified city

The app will display:

- City name
- Current temperature in Celsius
- Weather condition description

If there's an error (like an invalid city name), an appropriate error message will be displayed.

## Project Structure
```
weather-app/
├── app/                  # Main application code
│   ├── index.tsx         # Entry point with Redux Provider
│   └── WeatherScreen.tsx # Main weather display screen
├── src/
│   └── store/            # Redux store configuration
│       ├── actions/      # Redux actions
│       │   ├── weatherActions.ts  # Action types
│       ├── reducers/     # Redux reducers
│       │   ├── weatherReducers.ts  # Reducer types
│       ├── types/        # TypeScript type definitions
│       │   ├── weatherTypes.ts  # Type definitions for weather data
│       └── index.ts  # Redux store configuration
├── .env                  # Environment variables configuration file
└── package.json          # Project dependencies
```

## API Integration
This app uses the OpenWeatherMap API to fetch weather data. The API integration is handled through Redux Thunk middleware, allowing for asynchronous API calls with proper loading states and error handling.

## Requirements
- Node.js 14.0 or later
- Expo CLI
- An internet connection for API calls
- iOS/Android device or emulator for testing
- OpenWeatherMap API key

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch ( `git checkout -b feature/amazing-feature` )
3. Commit your changes ( `git commit -m 'Add some amazing feature'` )
4. Push to the branch ( `git push origin feature/amazing-feature` )
5. Open a Pull Request

## License
This project is open source and available under the MIT License.

## Acknowledgements
- OpenWeatherMap API for providing weather data
- Expo for the development framework
- Redux and Redux Thunk for state management

## Note
Make sure to keep your API key private and never commit it to version control. The .env file is included in .gitignore for this purpose.