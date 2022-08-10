import './sidebar.css'
import GetLocation from "../Weather-View/location-data";

export default function Sidebar() {
    return(
        <div className="sidebar">
            <a href="#">
                <i className="bi bi-geo"></i>
            </a>
            <a href="#">
                <i className="bi bi-search"></i>
            </a>
        </div>
    )
}