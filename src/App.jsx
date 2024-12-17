   // src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'; // Navbar Component
import LoginPage from './components/LoginPage'; // Login Page Component
import RegisterPage from './components/RegisterPage'; // Register Page Component
import Services from './components/Services'; // Services Page Component
// import './App.css'; // Global Styles
import AboutPage from "./components/about";
import FastFood from "./components/FastFoodpage";
import MedicalProducts from "./components/Medical";
import Ecom from "./components/E-comerce";



function App() {
  return (
    <Router>
      <Navbar /> {/* The Navbar will be visible across all pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="About" element={<AboutPage/>}/>
          <Route path="/FastFood" element={<FastFood/>}/>
          <Route path="/medical" element={<MedicalProducts/>} />
          <Route path="/E-commerce" element={<Ecom/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
