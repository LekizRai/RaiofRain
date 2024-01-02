import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <Router basename="raiofrain">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>This is homepage</h1>
    </div>
    );
}

function About() {
  return (
    <div className="about">
      <h1>This is about page</h1>
    </div>
    );
}

function Contact() {
  return (
    <div className="contact">
      <h1>This is contact page</h1>
    </div>
    );
}

export default App;