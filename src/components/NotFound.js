import { Link } from "react-router-dom";


const NotFound = () => {
    return ( 
        <div className="not-found__continer">
            <h2 className="not-found__title">PAGE NOT FOUND</h2>
            <Link to="/">Back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;