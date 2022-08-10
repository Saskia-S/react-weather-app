import './sidebar.css'

const Sidebar = (props) => {

    const setToLocation = () => {
        props.setComponentState('location');
        console.log('works');
    }
    const setToCity = () => {
        props.setComponentState('city');
        console.log('works 2');
    }

    return(
        <div className="sidebar">
            <a href="#"
               onClick={() => setToLocation()}>
                <i className="bi bi-geo">
                </i>
            </a>
            <a href="#"
               onClick={() => setToCity()}
            >
                <i className="bi bi-search">
                </i>
            </a>
        </div>
    )
}
export default Sidebar;