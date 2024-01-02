import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <Router basename="raiofrain">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/story" element={<Stories/>} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <div id="main">
        <h1>Welcome to my portfolio</h1>
        <h3>My name is Rai, not the usual way my friends call me, but just call me Rai</h3>
      </div>
      <div id="story">
        <div id="story1">
          <p style={{fontSize: '60px', fontWeight: '1000', margin: '0'}}>Let's first go through my stories</p>
          <p style={{fontSize: '20px'}}>and discover what have made up myself so far.</p>
        </div>
        <div id="story2">
          <p>Do something</p>
        </div>
      </div>
      <div id="blog">
        Or if you want to learn something not so new
      </div>
      <div id="project">
        Want to get inspiration ? Come to my projects
      </div>
      <div id="about">
        More information about me
      </div>
      <h1>This is homepage</h1>
    </div>
  );
}

function Stories() {
  return (
    <div className="story">
      <h1>This is page for stories</h1>
    </div>
  );
}

function Blogs() {
  return (
    <div className="blog">
      <h1>This is page for blogs</h1>
    </div>
  );
}

function Projects() {
  return (
    <div className="project">
      <h1>This is page for projects</h1>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h1>This is page about me</h1>
    </div>
    );
}

export default App;