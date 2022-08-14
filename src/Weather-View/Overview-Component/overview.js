import './overview.css'
import {useEffect, useState} from "react";

export default function Overview(props) {
    let weatherIcon = props.weatherData.icon;
    let sunrise =  props.weatherData.sunrise;
    let sunset =  props.weatherData.sunset;
    const [riseMinutes, setRiseMinutes] = useState(null);
    const [riseHours, setRiseHours] = useState(null);
    const [dawnMinutes, setDawnMinutes] = useState(null);
    const [dawnHours, setDawnHours] = useState(null);

    useEffect(() => {
        if(props.weatherData) {
            let rise = new Date(sunrise * 1000);
            let dawn = new Date(sunset * 1000);
            setRiseHours(rise.getHours());
            rise.getMinutes() <= 9 ? setRiseMinutes(`0${rise.getMinutes()}`) : setRiseMinutes(rise.getMinutes());
            setDawnHours(dawn.getHours());
            dawn.getMinutes() <= 9 ? setDawnMinutes(`0${dawn.getMinutes()}`) : setDawnMinutes(dawn.getMinutes());
        }
    }, [props])

    return(
        <div className="container">
            <div className="row">
                <h3 className="pt-5 pb-3">Overview</h3>
                <div className="row">
                    <h3 className="pt-5 pb-3">{props.weatherData.city}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1 weather-icon">
                                    {(() => {
                                        switch(weatherIcon) {
                                            case '01d':
                                                return(<i className="bi bi-sun"></i>);
                                            case '02d':
                                                return(<i className="bi bi-cloud-sun"></i>);
                                            case '03d':
                                                return(<i className="bi bi-cloudy"></i>);
                                            case '04d':
                                                return(<i className="bi bi-clouds-fill"></i>);
                                            case '09d':
                                                return(<i className="bi bi-cloud-rain-fill"></i>);
                                            case '10d':
                                                return(<i className="bi bi-cloud-sun-fill"></i>);
                                            case '11d':
                                                return(<i className="bi bi-cloud-lightning-rain-fill"></i>);
                                            case '13d':
                                                return(<i className="bi bi-snow"></i>);
                                            case '50d':
                                                return(<i className="bi bi-cloud-fog"></i>);
                                            case '01n':
                                                return(<i className="bi bi-moon-stars"></i>);
                                            case '02n':
                                                return(<i className="bi bi-cloud-moon"></i>);
                                            case '03n':
                                                return(<i className="bi bi-cloudy"></i>);
                                            case '04n':
                                                return(<i className="bi bi-clouds-fill"></i>);
                                            case '09n':
                                                return(<i className="bi bi-cloud-rain-fill"></i>);
                                            case '10n':
                                                return(<i className="bi bi-cloud-moon-fill"></i>);
                                            case '11n':
                                                return(<i className="bi bi-cloud-lightning-rain-fill"></i>);
                                            case '13n':
                                                return(<i className="bi bi-snow"></i>);
                                            case '50n':
                                                return(<i className="bi bi-cloud-fog"></i>);
                                            default:
                                                return(<i className="bi bi-cloud-sun"></i>);
                                        }
                                    })()}
                                </div>
                                <div className="col temperature">
                                    {props.weatherData.temp ?
                                        <p className="mb-0">now {props.weatherData.temp}°C</p>
                                        : <p></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1">
                                    <i className="bi bi-wind"></i>
                                </div>
                                <div className="col">
                                    <p>Wind speed</p>
                                    {props.weatherData.wind ?
                                        <p className="mb-0">{props.weatherData.wind} m/s</p>
                                        : <p></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1">
                                    <i className="bi bi-umbrella"></i>
                                </div>
                                <div className="col">
                                    <p>Rain</p>
                                    {props.weatherData.rain?
                                        props.weatherData.rain
                                        : '0%'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1">
                                    <i className="bi bi-sunrise"></i>
                                </div>
                                <div className="col">
                                    <p>Sunrise</p>
                                    {props.weatherData.sunrise ?
                                        (`${riseHours}:${riseMinutes}`)
                                        : <p></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1">
                                    <i className="bi bi-sunset"></i>
                                </div>
                                <div className="col">
                                    <p>Sunset</p>
                                    { dawnHours ?
                                        (`${dawnHours}:${dawnMinutes}`)
                                    : <p></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}