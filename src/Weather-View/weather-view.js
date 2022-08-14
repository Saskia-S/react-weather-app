import './weather-view.css'
import Header from "./Header-Component/header";
import Overview from "./Overview-Component/overview";

export default function WeatherView(props) {
    return(
      <div className="container weather-view">
        <Header/>
        <Overview weatherData={props.weatherData}/>
      </div>
    );
}