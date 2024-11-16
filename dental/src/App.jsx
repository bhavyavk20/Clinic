import React from 'react';
import { useState } from 'react';
import img1 from './images/logo.png';
import { FaCircle } from "react-icons/fa";
import './App.css';
import { Team } from './Team';
import { Second } from './Second';
import { First } from './First';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div className='navbar'>
          <div className='logo'>
            <img src={img1} alt='Logo' />
            <span className='logo-text'>ESSENTIALS</span>
          </div>
          <h1>DENTAL CLINIC</h1>
          <button className='toggle-button' onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li id='list'>Home</li>
            <li id='list'><FaCircle className='circle'/> About Us</li>
            <li id='list'><FaCircle className='circle'/> Services</li>
            <li id='list' ><FaCircle className='circle'/> Gallery</li>
            <li id='list'><FaCircle className='circle'/> Promotions</li>
            <li id='list'><FaCircle className='circle'/> Contact Us</li>
            <li>
              <button className='blogin'>Appointment</button>
            </li>
          </ul>
        </div>
       <First/>
       <Second/>
       <Team/>
      </header>
     
    </div>
  );
}

export default App;
