import './App.css';
import Sidebar from "./Sidebar/sidebar";
import WeatherView from "./Weather-View/weather-view";
import React, {useState} from 'react'

function App() {
    const [state, setState] = useState('');

    const setWeather = (data) => {
        setState(data);
    };

    return (
        <div className="App">
            <Sidebar setWeatherState={setWeather}/>
            <WeatherView weatherData={state}/>
        </div>
    );
}

export default App;
