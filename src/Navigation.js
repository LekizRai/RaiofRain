import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <div id="pageinfo">
                <img id="pagelogo" src={process.env.PUBLIC_URL + "/logo271.png"} alt=""/>
                <h1 id="pagename">RaiofRain</h1>
                <h3 id="pagequote">Nothing is impossible, 
                <br/> until it becomes impossible.</h3>
            </div>
            <nav id="navbar">
                <Link to="/">Home</Link>
                <Link to="/story">Stories</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/project">Projects</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default Navigation;
