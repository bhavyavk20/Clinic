import React from 'react';
import './Team.css'; 
import img2 from './images/Frame 1.png';
import img3 from './images/Frame2.png';
import img4 from './images/Frame 3.png';
import img5 from './images/Frame4.png';


export const Team = () => {
  return (
    <div className="team-container">
        <div className='half-container'>
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus
          doloremque aliquid a facere delectus officia. Atque voluptatum cupiditate rerum eveniet
          quasi facilis corrupti eos. Facilis adipisci ut eaque officiis.
        </p>
        </div>
      </div>
      <div className="team-cards">
        {/* Card 1 */}
        <div className="team-card">
          <img
            src={img5}
            alt="Team Member"
            className="team-card-image"
          />
          <h3>Dr. Jhon Paul</h3>
          <p>General Dentist</p>
        </div>
        {/* Card 2 */}
        <div className="team-card">
          <img
            src={img4}
            alt="Team Member"
            className="team-card-image"
          />
          <h3>Dr. Khaled Abul</h3>
          <p>Children's Dentist</p>
        </div>
        {/* Card 3 */}
        <div className="team-card">
          <img
            src={img3}
            alt="Team Member"
            className="team-card-image"
          />
          <h3>Dr. Marwan Serhal</h3>
          <p>Hygienist</p>
        </div>
        {/* Card 4 */}
        <div className="team-card">
          <img
            src={img2}
            alt="Team Member"
            className="team-card-image"
          />
          <h3>Dr. Chinchu Mathew</h3>
          <p>Prosthodontist</p>
        </div>
      </div>
<div className='button-container'>
<button className='blogins'>View All Team</button>

</div>
    </div>
  );
};
