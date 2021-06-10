import React, { useEffect, useState } from 'react';
import {useLocation } from 'react-router-dom';
import SingleCarCard from './components/SingleCarCard';
import './CarPick.css';
import * as api from '../Utils/api';

const CarPick = () => {
  const url = useLocation().pathname;
  const index = url.lastIndexOf("\/");
  const type = url.substring(index + 1, url.length).toUpperCase();
  
  const [details, setDetails] = useState([])

  useEffect(() => {
    const fetchVehicles =async () => {
      
      const fetchVehiclesRes = await api.fetchVehiclesByType(type);
      if (fetchVehiclesRes.status === 200) {
        setDetails(fetchVehiclesRes.data);
      }
    }

    fetchVehicles();
    
  }, [])

  return (
    <div>
      <section className="carPick-results">
        {details.length === 0 ? <h2 className="carPick-number">0 cars</h2> : <div>
          <>
            <h2 className="carPick-number">{details.length} cars</h2>
            {details.map((detail) => (
              <>
                <SingleCarCard detail={detail} />
              </>
            ))}
          </>
        </div>
        }
      </section>
    </div>
  )
}

export default CarPick;
