import './overview.css'

export default function Overview(props) {
    let weatherIcon = props.icon;

    return(
        <div className="container">
            <div className="row">
                <button className="btn btn-primary" onClick={apiCall}>load</button>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1">
                                    {(() => {
                                        switch(weatherIcon) {
                                            case '01d':
                                                return(<i className="bi bi-sun"></i>);
                                            case '02d':
                                                return(<i className="bi bi-cloud-sun"></i>);
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
                                            default:
                                                return(<i className="bi bi-cloud-sun"></i>);
                                        }
                                    })()}
                                </div>
                                <div className="col temperature">
                                    {weather.temp}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}