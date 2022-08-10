import './App.css';
import Sidebar from "./Sidebar/sidebar";
import WeatherView from "./Weather-View/weather-view";

function App() {

    return (
        <div className="App">
          <Sidebar/>
          <WeatherView/>
        </div>
    );
}

export default App;
