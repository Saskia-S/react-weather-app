import {useState} from "react";

export default function GetLocation() {
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);

    const setLocation = async () => {
        navigator.geolocation.getCurrentPosition(function (location) {
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
        });
    }
    setLocation();
    let loc = [lat, lon];
    return(loc);
}