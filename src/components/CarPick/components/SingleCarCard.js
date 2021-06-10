import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCarCard.css'
import star from '../../CarDetails/components/CarDisplay/assets/star.svg';
import starActive from '../../CarDetails/components/CarDisplay/assets/starActive.svg';

const SingleCarCard = (detail) => {
  const car = detail.detail;

  return (
      <div className="singleCard-item">
        <Link to={`/dashboard-customer/dashboard/cars/${car.id}`} className="singleCard-link">
          <img src={car.imgUrl} alt="car" className="singleCard-image" />
          <h3 className="singleCard-title">{car.title}</h3>
          <h4 className="singleCard-badges">{car.type} ({car.body})</h4>
          <span className="singleCard-label">Drive away from</span>
          <h4 className="singleCard-price">
            "${car.price}"
          </h4>
          {car.isWatched === true ?
            <img src={starActive} alt='save' style={{ height: '16px', width: '16px' }} /> :
            <img src={star} alt='save' style={{ height: '16px', width: '16px' }} />
          }
          <h5 className="singleCard-offers">Learn more</h5>
        </Link>
      </div>
  )

}

export default SingleCarCard;
