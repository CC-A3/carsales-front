import React from 'react';
import {
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import LoginForm from './components/LoginForm/LoginForm';
import './LoginByEmail.css';

const LoginByEmail = () => (
  <header className="loginByEmail-header">
    <Grid container item xs={12} sm={6} alignItems="center" direction="column" className="loginByEmail-grid">
      <Paper elevation={10} variant="outlined" className="loginByEmail-paper">
        <Grid container justify="center" alignItems="center" direction="column">
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
        </Grid>
        <LoginForm />
      </Paper>
    </Grid>
  </header>
);
export default LoginByEmail;
