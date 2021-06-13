import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { Button, Typography } from '@material-ui/core'
import CarDisplay from './components/CarDisplay/CarDisplay';
import CarSpecifications from './components/CarSpecifications/CarSpecifications';
import CarHeader from './components/CarHeader/CarHeader';
import { makeStyles } from '@material-ui/core/styles';
import Contact from './components/Contact/Contact';
import * as api from '../Utils/api';

const useStyles = makeStyles(() => ({
  contents: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  titles: {
    fontFamily: 'Keania One',
    fontSize: '1.5rem',
    color: 'black',
    textTransform: 'uppercase',
  },
  subtitles: {
    fontFamily: 'Montserrat',
    color: 'black',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 800,
    fontSize: 20,
  },
  page: {
    marginLeft: '500px'
  }
}));

const CarDetails = () => {
  const [active, setActive] = useState(false);
  const clientId = localStorage.getItem('userId');
  const classes = useStyles();
  const url = useLocation().pathname;
  const index = url.lastIndexOf("/");
  const vehicleId = url.substring(index + 1, url.length).toUpperCase();

  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles =async () => {
      const fetchSingleVehiclesRes = await api.fetchVehicleById({ vehicleId, clientId });
      console.log(fetchSingleVehiclesRes.data.ownerId,"return value");
      if (fetchSingleVehiclesRes.status === 200) {
        setDetails(fetchSingleVehiclesRes.data);
        setActive(fetchSingleVehiclesRes.data.isWatched);
        setIsLoading(false);
      }
    }

    fetchVehicles();
    
  }, [clientId, vehicleId])

  return (
    <>
      {isLoading ? <CircularProgress /> : 
        <div className={classes.page}>
        <CarHeader details={details} />
        <CarDisplay details={details} active={active} setActive={setActive} />
        <CarSpecifications details={details} />
        <section class="owner-display-wrap">
          <div className="row">
            <div className={classes.contents}>
              <Contact details={details} />
            </div>
          </div>
        </section>
        </div>
      }
    </>
  )
}

export default CarDetails
