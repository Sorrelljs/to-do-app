import landingPageImage from "../images/image5.jpg"
import ButtonLanding from "./ButtonLanding";

const Landing = () => {
    return ( 
        <div className="landing-page">
            <h3 className="landing-page__heading">A Better Way To Manage Life.</h3>
            <p className="landing-page__paragraph">Plan. Organize. Track. In one visual, simple space.</p>
            <ButtonLanding/>
            <img className="landing-page__footerImg" src={landingPageImage} alt="lady sketching" />
        </div>
     );
}
 
export default Landing;