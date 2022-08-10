import './App.css';
import Sidebar from "./Sidebar/sidebar";
import WeatherView from "./Weather-View/weather-view";
import React, { useState } from 'react'
import axios from 'axios'
import GetLocation from "./Weather-View/location-data";

function App() {
    let location = GetLocation();
    let lat = location[0];
    let lon = location[1];
    const [state, setState] = useState('');
    const setComponentState = (text) => {
        setState(text);
    };
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const apiKey = '272cf4ea3b18748e11aeddc57e3dc9fa';

    const getUserLocWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            maindesc: res.data.weather[0].main,
            temp: res.data.main.temp,
            city: res.data.name,
            icon: res.data.weather[0].icon,
            wind: res.data.wind.speed,
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset
        })
        setCity(res.data.name)
    }


    return (
        <div className="App">
            <Sidebar setComponentState={setComponentState}/>
            <WeatherView />
        </div>
    );
}

export default App;
