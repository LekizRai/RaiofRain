import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <div id="pageinfo">
                <img id="pagelogo" src={process.env.PUBLIC_URL + "/logo564.png"} alt=""/>
                <h1 id="pagename">RaiofRain</h1>
                <h3 id="pagequote">Something about life <br/> let me tell you.</h3>
            </div>
            <nav id="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Navigation;
