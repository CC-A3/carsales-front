import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import SingleCarCard from './components/SingleCarCard';
import './CarPick.css';
import * as api from '../Utils/api';

const CarPick = () => {
  const url = useLocation().pathname;
  const index = url.lastIndexOf("/");
  const type = url.substring(index + 1, url.length).toUpperCase();
  
  const [details, setDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles =async () => {
      const clientId = localStorage.getItem('userId');
      console.log(clientId);
      const fetchVehiclesRes = await api.fetchVehiclesByType({ type, clientId });
      if (fetchVehiclesRes.status === 200) {
        setDetails(fetchVehiclesRes.data);
        setIsLoading(false);
        console.log(fetchVehiclesRes.data, "数值");
      }
    }

    fetchVehicles();
    
  }, [type])

  return (
    <div>
      {isLoading ? <CircularProgress /> : 
        <section className="carPick-results">
        {details.length === 0 ? <h2 className="carPick-number">0 cars</h2> : <div>
          <>
              <h2 className="carPick-number">
              <Link to='/dashboard-customer/dashboard' className="carPick-goback" >Go Back </Link> /
                   {details.length} cars
              </h2>
           
            {details.map((detail,index) => (
              <>
                <SingleCarCard detail={detail} index={index}/>
              </>
            ))}
          </>
        </div>
        }
      </section>
      }
    </div>
  )
}

export default CarPick;
