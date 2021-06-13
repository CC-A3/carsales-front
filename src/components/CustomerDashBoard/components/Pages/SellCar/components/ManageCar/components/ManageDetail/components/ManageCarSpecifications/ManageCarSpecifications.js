import React from 'react';
import './ManageCarSpecifications.css';
import kilometers from './assets/kilometers.svg';
import color from './assets/color.svg';
import body from './assets/car-seat.svg';
import engine from './assets/engine.svg';
import transmission from './assets/transmission.svg';
import fuelConsumption from './assets/fuelConsumption.svg';
import type from './assets/type.svg';
import status from './assets/status.svg';

const ManageCarSpecifications = (details) => {
  const car = details.details;

  return (
    <>
      <section className="key-details">
        <div className="key-details-wrapper">
          <div className="key-details-item">
            <div className="key-details-image">
              <img src={kilometers} alt="kilometers" />
            </div>
            <div className="key-details-item-item">
              <div className="key-details-item-title">{car.kilometers} km</div>
              <div className="key-details-item-caption">Kilometers</div>
            </div>
          </div>
          <div className="key-details-item">
            <div className="key-details-image">
              <img src={color} alt="color" />
            </div>
            <div className="key-details-item-item">
              <div className="key-details-item-title">{car.colour}</div>
              <div className="key-details-item-caption">Color</div>
            </div>
          </div>
          <div className="key-details-item">
            <div className="key-details-image">
              <img src={body} alt="body" />
            </div>
            <div className="key-details-item-item">
              <div className="key-details-item-title">{car.body}</div>
              <div className="key-details-item-caption">Body Seats</div>
            </div>
          </div>
          <div className="key-details-item">
            <div className="key-details-image">
              <img src={engine} alt="engine" />
            </div>
            <div className="key-details-item-item">
              <div className="key-details-item-title">{car.engine}</div>
              <div className="key-details-item-caption">Engine</div>
            </div>
          </div>
          <div className="key-details-item">
            <div className="key-details-image">
              <img src={transmission} alt="transmission" />
            </div>
            <div className="key-details-item-item">
              <div className="key-details-item-title">{car.transmission}</div>
              <div className="key-details-item-caption">Transmission</div>
            </div>
          </div>
          <div className="key-details-item">
            <div className="key-details-image">
              <img src={fuelConsumption} alt="fuelConsumption" />
            </div>
            <div className="key-details-item-item">
              <div className="key-details-item-title">{car.fuelConsumption}</div>
              <div className="key-details-item-caption">Fuel Consumption</div>
            </div>
          </div>
          <div className="key-details-item">
            <div className="key-details-image">
              <img src={type} alt="type" />
            </div>
            <div className="key-details-item-item">
              <div className="key-details-item-title">{car.type}</div>
              <div className="key-details-item-caption">Car Type</div>
            </div>
          </div>
          <div className="key-details-item">
            <div className="key-details-image">
              <img src={status} alt="status" />
            </div>
            <div className="key-details-item-item">
              <div className="key-details-item-title">{car.status}</div>
              <div className="key-details-item-caption">Status</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ManageCarSpecifications;
