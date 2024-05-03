import React from "react";
import '../style.css';
import '../responsive.css';


const Card = (props) => {
    const {imgsrc,place,price,link} = props;

    return(
        <>
            <div className="row">
                    <article className="card col">
                        <img className="card-img" src={imgsrc} alt="photo" target="_blank" />
                        <h4 className="dark">{place}</h4>
                        <p className="font-color">
                        {price}
                        </p>
                        <a href={link} target="_blank" className="ctn">BOOK</a>
                    </article>
            </div>
        </>
    );

}

export default Card;