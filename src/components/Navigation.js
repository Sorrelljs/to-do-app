import logo from '../images/Logo.png'
import add from '../images/Add.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div className="Navigation-wrap">
            <Link to="/">
            <img src={logo} alt="" />
            </Link>
        <Link to="/create">
            <img src={add} alt="" />
        </Link>
        </div>
     );
}
 
export default Navigation;