import { Link } from "react-router-dom";


const ButtonLanding = () => {
    return ( 
        <div className="landing-button__container">
            <Link to="/dashboard">
            <button className="landing-button_btn">Get Started</button>
            </Link>
        </div>
     );
}
 
export default ButtonLanding;