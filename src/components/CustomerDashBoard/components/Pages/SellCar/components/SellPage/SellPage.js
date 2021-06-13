import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SellPageCard from './components/SellPageCard/SellPageCard';
import s from './assets/submit.png';
import m from './assets/manage.png';
import './SellPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },

  },
}));
  
const SellPage = () => {
  const classes = useStyles();
  const place1 = {
    title: 'Add Your Vehicle',
    description:
      "Click here to submit information about your car",
    imageUrl: s,
    time: 150,
  }

  const place2 = {
    title: 'Mange Your Vehicle',
      description:
        "Click here for your personal vehicle management",
      imageUrl: m,
      time: 150,
  }


  return (
    <div className={classes.root} >
      <Link to={`/dashboard-customer/dashboard/sell-cars/submit-car`} className="sellPage-link">
        <SellPageCard place={place1} />
      </Link>
      <Link to={`/dashboard-customer/dashboard/sell-cars/manage-car`} className="sellPage-link">
        <SellPageCard place={place2} />
      </Link>
    </div>
  )

}

export default SellPage;
