# Weather App
A React Native weather application that provides real-time weather information using the OpenWeatherMap API. Built with Redux for state management and Expo for cross-platform development.

## Features
- Real-time weather data fetching
- City-based weather search
- Display of temperature and weather conditions
- Clean and intuitive user interface
- Error handling and loading states

## Technology Stack
- React Native with Expo
- TypeScript
- Redux & Redux Thunk for state management
- Axios for API requests
- OpenWeatherMap API

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- OpenWeatherMap API key

## Installation
1.
Clone the repository:

```bash
Run
git clone <repository-url>cd weather-app
```

1.
Install dependencies:

```bash
Run
npm install
```

1.
Create a .env file in the root directory and add your OpenWeatherMap API key:

```plaintext
API_KEY=your_api_key_here
```

## Environment Variables
The following environment variable needs to be set in the .env file:

- API_KEY: Your OpenWeatherMap API key

## Usage
1.
Start the development server:

```bash
Run
$env:API_KEY="your_api_key_here"; npx expo start
```

1.
Use the Expo Go app on your mobile device to scan the QR code, or press:
- `a` for Android emulator
- `i` for iOS simulator

## Project Structure

```plaintext
├── app/
│   ├── WeatherScreen.tsx    # Main weather display screen
│   └── index.tsx            # App entry point
├── src/
│   └── store/               # Redux store configuration
│       ├── actions/         # Redux actions
│       ├── reducers/        # Redux reducers
│       └── types/           # TypeScript types
└── app.config.js            # Expo configuration
```

## Contributing
1.
Fork the repository  
2.
Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3.
Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4.
Push to the branch (`git push origin feature/AmazingFeature`)  
5.
Open a Pull Request

## License
This project is open source and available under the MIT License.

## Note
Make sure to keep your API key private and never commit it to version control. The .env file is included in .gitignore for this purpose.