import './header.css'

export default function Header() {
    let current = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[current.getDay()];
    let dayNumber = current.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[current.getMonth()];
    let year = current.getFullYear();
    return(
        <div className="container header-section">
            <div className="row" >
                <div className="col" align="left">
                    <h4 className="day">{day}, {dayNumber}.</h4>
                </div>
                <div className="col" align="right">
                    <h4 className="month">{month} <span className="year">{year}</span></h4>
                </div>
            </div>
        </div>


    );
}