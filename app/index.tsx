import { store } from "@/src/store";
import React from "react";
import { Provider } from "react-redux";
import WeatherScreen from "./WeatherScreen";

const App = () => {
  return (
    <Provider store={store}>
        <WeatherScreen />
    </Provider>
  );
};

export default App;