import './sidebar.css'
import GetLocation from "../Weather-View/location-data";
import React, {useState, useEffect} from "react";
import axios from "axios";

const Sidebar = (props) => {
    const [toggleState, toggleSearchBar] = useState(false);
    let location = GetLocation();
    let lat = location[0];
    let lon = location[1];

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const apiKey = '272cf4ea3b18748e11aeddc57e3dc9fa';
    const [url, setUrl] = useState('');

    const handleInputChange = event => {
        setCity(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        setCity(event.target.value);
        setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    };

    useEffect(() => {
        if(url !== '') {
            getWeather()
        }
    }, [url])



    useEffect(() => {
        if(weatherData) {
            props.setWeatherState(weatherData);
        }
    }, [weatherData])

    function setUrlToLoc() {
        setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    }
    function setUrlToCity() {
        toggleSearchBar(!toggleState);
        //setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    }

    const getWeather = async () => {
        const req = axios.get(url);
        const res = await req;
        setWeatherData({
            maindesc: res.data.weather[0].main,
            temp: res.data.main.temp,
            city: res.data.name,
            icon: res.data.weather[0].icon,
            wind: res.data.wind.speed,
            rain: res.data.rain,
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset
        })
    }



    return(
        <div>
            <div className="sidebar">
                <div className="row">
                    <div className="col">
                        <a href="#"
                           onClick={() => setUrlToLoc()}>
                            <i className="bi bi-geo">
                            </i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <a href="#"
                           onClick={() =>setUrlToCity()}>
                            <i className="bi bi-search">
                            </i>
                        </a>
                    </div>
                </div>
            </div>

            {toggleState ?
                <div className="search-form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="form-outline">
                                <input type="search"
                                       onChange={handleInputChange}
                                       value={city}
                                       className="form-control"
                                />
                            </div>
                            <button type="submit"
                                    className="btn btn-primary">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                : <div>false</div>
            }

        </div>
    )
}
export default Sidebar;