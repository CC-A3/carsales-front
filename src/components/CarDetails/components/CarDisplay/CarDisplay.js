import React from 'react';
import Save from './Save/Save';
import './CarDisplay.css';

const CarDisplay = ({ details, active, setActive }) => {

  return (
    <div className="gallery">
      <div className="row no-gutters">
        <div className="col thumb-wrapper-hero gallery-main ">
          <img className="img-fluid thumb-big" src={details.imgUrl} alt="car" />
          <div className="thumb-wrapper-hero-overlay">
            <div className="gallery-portal-top">
              <section className="section-saved-status">
                <Save active={active} setActive={setActive} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDisplay;
