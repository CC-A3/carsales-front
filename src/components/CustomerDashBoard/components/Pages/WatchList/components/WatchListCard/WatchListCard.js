import React from 'react';
import { Link } from 'react-router-dom';
import './WatchListCard.css';

const WatchListCard = (detail) => {
  const car = detail.detail;

  return (
    <div className="watchListCard-item">
      <Link to={`/dashboard-customer/dashboard/cars/${car.id}`} className="watchListCard-link">
        <img src={car.imgUrl} alt="car" className="watchListCard-image" />
        <h3 className="watchListCard-title">{car.title}</h3>
        <h4 className="watchListCard-badges">{car.type} ({car.body})</h4>
        <span className="watchListCard-label">Drive away from</span>
        <h4 className="watchListCard-price">
          "${car.price}"
        </h4>
        <h5 className="watchListCard-offers">Learn more</h5>
      </Link>
    </div>
  )

}

export default WatchListCard;
