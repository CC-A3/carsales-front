import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import email from './assets/gmail.png';
// import LoginByGoogle from './components/LoginByGoogle/LoginByGoogle';
import './Login.css';

const Login = () => (
  <header className="login-header">
    <Grid container item xs={12} sm={6} alignItems="center" direction="column" className="grid">
      <Grid elevation={10} variant="outlined" className="paper">
        <Grid container justify="center" alignItems="center" direction="column" className="content">
          <Typography component="h1" variant="h5">
            Welcome to carsales
          </Typography>
          {/* <div className="btn-container">
            <div className="btn-login" >
              <div className="google-inner">
                <LoginByGoogle />
              </div>
            </div>
          </div> */}
          <Link to="/email" className="btn-container">
            <button className="btn-login">
              <div className="btn-inner">
                <div className="btn-img">
                  <img src={email} alt="email" style={{ height: 20, width: 20 }}/>
                </div>
                <div className="btn-title">
                 <div className="btn-link" >Continue with email</div>
                </div>
              </div>
            </button>
          </Link> 
        </Grid>
      </Grid>
    </Grid>
  </header>
);
export default Login;
