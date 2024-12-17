 

import React, { useState } from "react";
import '../styles/nav.css';
// import logo from '../assets/logo.png.png';
import { Link } from "react-router-dom";

function Navbar() {
  // State to track whether the Services menu is open or not
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Toggle function to handle the Services menu
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="navbar">
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <h3>Drone Delivery</h3>

      <ul>
        <li><Link to="/">Home</Link></li>

        {/* Services link */}
        <li className="services">
          <Link to="/Services" onClick={toggleServices}>
            Services
          </Link>

          {/* Conditionally render the nested list based on the state */}
          {isServicesOpen && (
            <ol className="services-list">
              <li><Link to="/Fastfood">FastFood</Link></li>
              <li><Link to="/Medical">Medical</Link></li>
              <li><Link to="/E-commerce">E-commerce</Link></li>
            </ol>
          )}
        </li>

        <li><Link to="/About">About</Link></li>
        <li><Link to="/Address">Address</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
 

 

 

 
 
 