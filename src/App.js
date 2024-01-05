import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import parse from "html-react-parser"
// import Markdown from 'react-markdown';
import Navigation from './Navigation';
// import { useNavigate } from 'react-router-dom';

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
        <h3>Hi, I'm Rai. It is not the usual way my friends call me but just call me Rai</h3>
      </div>
      <div id="story">
        <div id="story1">
          <p style={{fontSize: '60px', fontWeight: '1000', margin: '0'}}>Let's first go through my stories</p>
          <p style={{fontSize: '20px', fontStyle: 'italic'}}>and discover what have made up myself so far.</p>
        </div>
        <div id="story2">
          <p>Do something</p>
        </div>
      </div>
      <div id="blog">
        <div id="blog1">
          <p>Do something</p>
        </div>
        <div id="blog2">
          <p style={{fontSize: '60px', fontWeight: '1000', margin: '0'}}>Or if you want to learn something not so new</p>
          <p style={{fontSize: '20px', fontStyle: 'italic'}}>in this part I share interesting things I have learned.</p>
        </div>
      </div>
      <div id="project">
        <div id="project1">
          <p style={{fontSize: '60px', fontWeight: '1000', margin: '0'}}>Want to get inspiration ? Come to my projects</p>
          <p style={{fontSize: '20px', fontStyle: 'italic'}}>and I am proud of what I have done.</p>
        </div>
        <div id="project2">
          <p>Do something</p>
        </div>
      </div>
      <div id="about">
      <div id="about1">
          <p>Do something</p>
        </div>
        <div id="about2">
          <p style={{fontSize: '60px', fontWeight: '1000', margin: '0'}}>Do not know who I am</p>
          <p style={{fontSize: '20px', fontStyle: 'italic'}}>this part provide more information about me.</p>
        </div>
      </div>
    </div>
  );
}

function Stories() {
  // const navigate = useNavigate();

  return (
    <div className="story">
      <Link to="/story/first">
        <div id="first" style={{width: "50vw", backgroundColor: "white", marginBottom: "100px"}}>
          First story
        </div>
      </Link>
      <div id="second" style={{width: "50vw", backgroundColor: "white"}}>Second story</div>
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
      <div id="general">
        <div id="avatar">
          Avatar
        </div>
      </div>
      <div id="detail">Details</div>
    </div>
    );
}

export default App;