import React from 'react';
import './First.css';
import google from './images/Googlebox.png';
import arrow from './images/arrow.png';
import box from './images/box.png';
import wtsp from './images/wtsp.png';
import longbox from './images/longbox.png';

export const First = () => {
  return (
    <>
      <section className="container-fluid custom-background">
        <div className="row h-100">
          <div className="col-md-6 text-container">
            <h1 className="move-left" style={{ fontFamily: "'Verdana', sans-serif", fontSize: '59px', fontWeight: '600' }}>
              Have a Shining<br />smile with our<br />
              <p style={{ color: '#FFA500',marginTop:'20px' }}>modern methods!</p>
            </h1>
          </div>
          
          {/* Google Box and Arrow Positioned Below the Text */}
          <div className="col-md-6 image-container">
            <img src={google} alt="Google Box" className="google-box" />
            <img src={arrow} alt="Arrow" className="arrow" />
          </div>

          {/* WhatsApp Box Positioned to the Right */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={box} alt="Box" className="small-image" />
            <img src={wtsp} alt="Whatsapp" className="wtsp-box" />
          </div>
        </div>
        
        <div>
          <img src={longbox} alt="Long Box" className="long-box" />
        </div>
      </section>

      <section className="container-fluid" style={{ backgroundColor: '#000', height: '150px', marginTop: '35px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              {/* Add any content here if needed */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
