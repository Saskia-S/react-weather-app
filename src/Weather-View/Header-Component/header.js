import './header.css'

export default function Header() {
    return(
        <div className="container header-section">
            <div className="row" align="right">
                <div className="col-1">
                    <h4 className="day">07</h4>
                </div>
                <div className="col">
                    <h4 className="month">August <span className="year">2022</span></h4>
                </div>
            </div>

            <div className="row">
                <h3 className="pt-5 pb-3">Overview</h3>
            </div>
        </div>


    );
}