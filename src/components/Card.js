const Card = (props) => {
    return ( 
        <div className="card--component_container">
            <div className="card--component__group">
                <h6 className="card--component__title">{props.title}</h6>
                <p className="card--component_para">{props.paragraph}</p>
            </div>
            <div className="card__component_lowercontainer">
            <img src="" alt="" />
            <p className="card__component--date">{props.date}</p>
            <button className="card__component--btn">High</button>
            </div>
        </div>
     );
}
 
export default Card;