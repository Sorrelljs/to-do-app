import logo from '../images/Logo.png'
import add from '../images/Add.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div className="Navigation-wrap">
            <Link to="/">
            <img src={logo} alt="" />
            </Link>
            <img src={add} alt="" />
        </div>
     );
}
 
export default Navigation;