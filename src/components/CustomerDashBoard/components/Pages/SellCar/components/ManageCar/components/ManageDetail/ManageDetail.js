import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ManageCarDisplay from './components/ManageCarDisplay/ManageCarDisplay';
import ManageCarHeader from './components/ManageCarHeader/ManageCarHeader';
import ManageCarSpecifications from './components/ManageCarSpecifications/ManageCarSpecifications';
import ManagePrice from './components/ManagePrice/ManagePrice';
import ManageStatus from './components/ManageStatus/ManageStatus';
import * as api from '../../../../../../../../Utils/api';
import './ManageDetail.css';



const useStyles = makeStyles(() => ({
  contents: {
    display: 'flex',
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
    marginLeft: '300px'
  }
}));

const ManageDetail = () => {

  const [active, setActive] = useState(false);
  const ownerId = localStorage.getItem('userId');
  const classes = useStyles();
  const [update, setUpdate] = useState(1);

  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMyOwnVehicles =async () => {
      const fetchOwnVehiclesRes = await api.fetchVehiclesByOwnerId(ownerId);
      console.log(fetchOwnVehiclesRes.data,"return value");
      if (fetchOwnVehiclesRes.status === 200) {
        setDetails(fetchOwnVehiclesRes.data);
        setActive(fetchOwnVehiclesRes.data.isWatched);
        setIsLoading(false);
      }
    }

    fetchMyOwnVehicles();
    
  }, [ownerId,update])

  return (
    <>
      {isLoading ? <CircularProgress /> :
        <>{details.map((detail) => (
          <div className={classes.page}>
            <ManageCarHeader details={detail} />
            <ManageCarDisplay details={detail} active={active} setActive={setActive} />
            <ManageCarSpecifications details={detail} />
            <section class="owner-display-wrap">
              <div className="row">
                <div className={classes.contents}>
                    <ManagePrice details={detail} update={update} setUpdate={setUpdate} />
                    <ManageStatus details={detail} update={update} setUpdate={setUpdate} />
                </div>
              </div>
            </section>
          </div>
        )) }</>
        
      }
  </>
)
}

export default ManageDetail;
