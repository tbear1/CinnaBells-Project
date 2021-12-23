import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import KeyFeature from './pages/KeyFeature';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Demo from './pages/Demo';
import Navbar from './Navbar/Navbar';
import logo from './assets/logo.svg';
import './App.css';
function App() {
  return (
    <div className="container">
      <Routes>
        <Navbar>
        <Route path="/" element={Home} />
        <Route path="/features" element={KeyFeature} />
        <Route path="/pricing" element={Pricing} />
        <Route path="/testimonials" element={Testimonials} />
        <Route path="/demo" element={Demo} />
        </Navbar>
      </Routes>
    </div>
  );
}

export default App;
