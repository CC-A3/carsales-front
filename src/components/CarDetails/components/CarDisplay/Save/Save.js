import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import star from '../assets/star.svg'
import starActive from '../assets/starActive.svg';
import * as api from '../../../../Utils/api';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "white",
    color: '#007cc2',
    margin: theme.spacing(1),
    borderRadius: '2em',
  },
  text: {
    marginLeft: theme.spacing(1),
    fontWeight: '600'
  },
}))

const Save = ({details, active, setActive}) => {
  const url = useLocation().pathname;
  const index = url.lastIndexOf("\/");
  const vehicleId = url.substring(index + 1, url.length).toUpperCase();
  const clientId = localStorage.getItem('userId');
  const classes = useStyles();

  const onClick = async () => {
    
    if (active === false) {
      const subscribeRes = await api.subscribeVehicle({ vehicleId, clientId })
      if (subscribeRes.status === 200) {
        setActive(true)
        console.log(subscribeRes.data)
      }
    }
    if (active === true) {
      const unSubscribeRes =await api.unSubscribeVehicle({ vehicleId, clientId })
      if (unSubscribeRes.status === 200) {
        setActive(false)
        console.log(unSubscribeRes.data)
      }
    }
  }

  return (
    <>
      <Button onClick={onClick} className={classes.btn} variant="contained">
        <img src={active ? starActive : star} alt='save' style={{ height: '16px', width: '16px' }} />
        <span className={classes.text}>{active ? 'SAVED' : 'SAVE' }</span>
      </Button>
    </>
  )
}

export default Save;
