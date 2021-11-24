import { Link } from "react-router-dom";

const FooterBackground = (props) => {

    return ( 
        <div 
        className={`footer-background__container`}
        style={{
            top: props.top,
            height: props.height
        }}
        >
            <div className="footer-background__groupcontainer">
            <h5 className="footer-background__title">{props.header}</h5>
            <Link to="/">
            <p className="footer-background__button">{props.button}</p>
            </Link>
            </div>
        </div>
     );
}
 
export default FooterBackground;