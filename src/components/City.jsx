/* 
import React, { useState } from "react";
import '../style.css';
import '../responsive.css';
// import CityResult from "./CityResult";
import DubaiGallery from "./DubaiGallery";
import GoaGallery from "./GoaGallery";
import Tours from "./Tours";

// import { getCity } from "./TourResult";

const City = () => {

    const [cityName,setVal] = useState();
    const [finalCity,setfinalCity] = useState();

    const inputEvent= (event) => {
        setVal(event.target.value);
    }
    const onSubmit = () => {
        setfinalCity(cityName);
    }
    
    return(
        <>
            <section className="events" id="events">
                <div className="container">
                    <div className="title">
                        <h1 className="dark">City</h1>
                        <div className="line"></div>
                    </div>
                </div>

                <div >
                    <input 
                    type="text"
                    placeholder="Enter Your Budget"
                    onChange={inputEvent}
                    value={cityName}
                    ></input>
                    <button className="Tbtn" onClick={onSubmit}>Enter</button>
                </div>
                
                <div className="Tcard">
                    <CityResult finalCity={finalCity} />


                    if(finalCity && finalCity.toLowerCase() === "dubai"){
        return(
            <>
                <div className="Ccard">
                <DubaiGallery/>
                <Tours/>
                </div>
            </>
        );
    }else if(finalCity && finalCity.toLowerCase() === "goa"){
        return(
            <>
    
                <div className="Ccard">
                <GoaGallery/>
                <Tours/>
                </div>
    
            </>
        );
    }



                </div>
            

            </section>
        </>
    );


}

export default City; 
*/

import React, { useState } from "react";
import '../style.css';
import '../responsive.css';
import DubaiGallery from "./DubaiGallery";
import GoaGallery from "./GoaGallery";
import Tours from "./Tours";
import JaipurGallery from "./JaipurGallery";

const City = () => {
    const [cityName, setVal] = useState("");
    const [finalCity, setFinalCity] = useState("");

    const inputEvent = (event) => {
        setVal(event.target.value);
    }

    const onSubmit = () => {
        setFinalCity(cityName.toLowerCase());
    }
    
    let cityComponent = null;

    if (finalCity === "dubai") {
        cityComponent = (
            <div className="Ccard">
                <DubaiGallery />
                <Tours finalCity={finalCity}/>
                <iframe className="container"
      title="Google Maps Embed"
      src="https://maps.google.com/maps?q=Dubai%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      width="800"
      height="350"
      allowFullScreen
                ></iframe>
            </div>

        );
    } else if (finalCity === "goa") {
        cityComponent = (
            <div className="Ccard">
                <GoaGallery />
                <Tours finalCity={finalCity}/>
                <iframe className="container"
      title="Google Maps Embed"
      src="https://maps.google.com/maps?q=Goa%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      width="800"
      height="350"
      allowFullScreen
                ></iframe>
            </div>
        );
    }  else if  (finalCity === "jaipur") {
        cityComponent = (
            <div className="Ccard">
                <JaipurGallery/>
                <Tours finalCity={finalCity}/>
                <iframe className="container"
      title="Google Maps Embed"
      src="https://www.google.com/maps/@26.8852108,75.7898712,11z?entry=ttu"
      width="800"
      height="350"
      allowFullScreen
                ></iframe>
            </div>

        );
    }

    return (
        <>
            <section className="events" id="events">
                <div className="container">
                    <div className="title">
                        <h1 className="dark">City</h1>
                        <div className="line"></div>
                    </div>
                </div>

                <div>
                    <input 
                        type="text"
                        placeholder="Enter Destination City"
                        onChange={inputEvent}
                        value={cityName}
                    />
                    <button className="Tbtn" onClick={onSubmit}>Enter</button>
                </div>
                
                <div className="Tcard">
                    {cityComponent}
                </div>
            </section>
        </>
    );
}

export default City;
