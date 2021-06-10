import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCarCard.css'
import c from '../../CustomerDashBoard/components/Pages/Dashboard/components/CarCarousel/assets/car1.png';

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
        <h5 className="singleCard-offers">Learn more</h5>
      </Link>
    </div>
  )

}

export default SingleCarCard;
