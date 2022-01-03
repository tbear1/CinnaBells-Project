import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import KeyFeature from './components/pages/KeyFeature';
import Pricing from './components/pages/Pricing';
import Testimonials from './components/pages/Testimonials';
import Demo from './components/pages/Demo';
import Navbar from './components/Navbar/Navbar';
import './App.css';
function App() {
  return (
    <Router>
    <div>
        <Navbar>Navbar</Navbar>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/features" element={<KeyFeature/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/demo" element={<Demo/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
