
/*
 import React from "react";
import '../style.css';
import '../responsive.css';
import City from './City';
import Home from "./Home";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const Nav = () => {
    return(
        <>
        <Router>
        <nav className="navbar glass" style={{ height: '70px' }}>
            <span>
                <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    className="img2"
                    src="../img/img2.png"
                    width="40"
                    style={{ margin: '-25px -10px -25px -20px' }}
                    alt="mountain icon"
                />
                <h1 className="logo">&nbsp;ADVENTURE</h1>
                </a>
            </span>
            <ul className="nav-links">
                <li>
                    <a href="#" id="pri" className="active cir_border">Home</a>
                </li>
                <li>
                    <a href="#events" id="sec" className="cir_border">Events</a>
                </li>
                <li>
                    <a href="/explore.html" id="tri" className="cir_border">Explore</a>
                </li>
                <li>
                    <a href="https://www.tourmyindia.com/blog/" target="_blank" rel="noopener noreferrer" id="quart" className="cir_border">Blog</a>
                </li>
                <li>
                    <Link to="/city" id="quint" className="cir_border">Tours</Link>
                </li>
                <li>
                    <a href="#about" id="sext" className="cir_border">About</a>
                </li>
                <li>
                    <a href="/contributions.html" target="_blank" rel="noopener noreferrer" id="sept" className="cir_border">Contributions</a>
                </li>
                <li>
                    <a href="#contact" id="oct" className="cir_border">Contact</a>
                </li>
                <li>
                    <div>
                    <input type="checkbox" className="checkbox dark" id="checkbox" />
                    <label htmlFor="checkbox" className="label">
                        <i className="fa fa-moon-o"></i>
                        <i className="fa fa-sun-o"></i>
                        <div className="ball"></div>
                    </label>
                    </div>
                </li>
            </ul>
            <img src="src/img/menu-btn.png" alt="" className="menu-btn" />
        </nav>
        <Routes>
            <Route exact path="/city" element={<City />} />
        </Routes>

        </Router>
        <Home/>
    </>

    );

}
export default Nav; 

*/

import React from "react";
import '../style.css';
import '../responsive.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import City from './City';
import Home from './Home';

const Nav = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/city" element={<City />} />
            </Routes>
        </Router>
    );
}
const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar glass" style={{ height: '70px' }}>
            <span>
                <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        className="img2"
                        src="../img/img2.png"
                        width="40"
                        style={{ margin: '-25px -10px -25px -20px' }}
                        alt="mountain icon"
                    />
                    <h1 className="logo">&nbsp;T o u r i s m</h1>
                </a>
            </span>
            <ul className="nav-links">
                <li>
                    <Link to="/" id="pri" className="active cir_border">Home</Link>
                </li>
                <li>
                    <a href="#events" id="sec" className="cir_border">Events</a>
                </li>
                <li>
                    <a href="/explore.html" id="tri" className="cir_border">Explore</a>
                </li>
                <li>
                    <a href="https://www.tourmyindia.com/blog/" target="_blank" rel="noopener noreferrer" id="quart" className="cir_border">Blog</a>
                </li>
                <li>
                    <Link to="/city" id="quint" className="cir_border">Tours</Link>
                </li>
                <li>
                    <a href="#about" id="sext" className="cir_border">About</a>
                </li>
                <li>
                    <a href="/contributions.html" target="_blank" rel="noopener noreferrer" id="sept" className="cir_border">Contributions</a>
                </li>
                <li>
                    <a href="#contact" id="oct" className="cir_border">Contact</a>
                </li>
                <li>
                    <div>
                        <input type="checkbox" className="checkbox dark" id="checkbox" />
                        <label htmlFor="checkbox" className="label">
                            <i className="fa fa-moon-o"></i>
                            <i className="fa fa-sun-o"></i>
                            <div className="ball"></div>
                        </label>
                    </div>
                </li>
            </ul>
            <img src="src/img/menu-btn.png" alt="" className="menu-btn" />
        </nav>
    );
}

export default Nav;
