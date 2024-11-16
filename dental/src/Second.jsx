import React from 'react';
import './Second.css'; // Import custom CSS file
import  img6 from './images/secondpage.png';

export const Second = () => {
  return (
    <div className="second-container">
        <div className="header">
            <h1 className='new'>Transform your smile with  <br />veneers, whitening, and implants</h1>
            <p className='para'>Lorem Ipsum available, but the majority have suffered  <br />alteration in some form, by injected humour, or randomised words which don't look even</p>
        </div>
        
        <div className="cards-container">
            <img src={img6} alt="images" className='responsive-image' />
        </div>
    </div>
  )
}
