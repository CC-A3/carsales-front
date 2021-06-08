import React from 'react';
import {
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import SignUpForm from './components/SignUpForm/SignUpForm';
import './SignUp.css';

const SignUp = () => (
  <header className="SignUp-header">
    <Grid container item xs={12} sm={6} alignItems="center" direction="column" className="SignUp-grid">
      <Paper elevation={10} variant="outlined" className="SignUp-paper">
        <Grid container justify="center" alignItems="center" direction="column">
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
        </Grid>
        <SignUpForm />
      </Paper>
    </Grid>
  </header>
);
export default SignUp;
