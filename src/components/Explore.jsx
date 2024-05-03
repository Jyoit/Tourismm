import React from "react";
import '../style.css';
import '../responsive.css';

const Explore = () => {
    return(
        <>
            <section className="explore" id="explore">
            <div className="explore-content">
                <h1>EXPLORE THE WORLD</h1>
                <div className="line"></div>
                <p>
                    “Travel makes one modest. You see what a tiny place you
                    occupy in the world.”– Gustav Flaubert <br />Exploring will
                    make you want to pack your bag, book that ticket and jet
                    away.
                </p>
                <a href="#" className="ctn">Explore more</a>
            </div>
        </section>
        </>
    );
}

export default Explore;