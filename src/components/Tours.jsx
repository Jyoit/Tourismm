import React, { useState } from "react";
import '../style.css';
import '../responsive.css';
import TourResult from "./TourResult";

const Tours = ({finalCity}) => {

    console.log(finalCity);
    const [budgetValue,setVal] = useState();
    const [totalVal,settotalVal] = useState();

    const inputEvent= (event) => {
        setVal(event.target.value);
    }

    const onSubmit = () => {
        settotalVal(budgetValue);
    }

    return (
        <>
        <section className="events" id="events">
            <div className="container">
                <div className="title">
                    <h1 className="dark">Tours</h1>
                    <div className="line"></div>
                </div>
            </div>

            <div >
                <input 
                type="text"
                placeholder="Enter Your Budget"
                onChange={inputEvent}
                value={budgetValue}
                ></input>
                <button className="Tbtn" onClick={onSubmit}>Enter</button>
            </div>
            
            <br/>
            
            <div className="Tcard">





            <TourResult totalVal={totalVal} finalCity={finalCity}/>

            </div>
        </section>
        </>
    );
}

export default Tours;
