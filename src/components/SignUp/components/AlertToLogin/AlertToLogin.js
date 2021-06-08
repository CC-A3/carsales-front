import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Container,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import './AlertToLogin.css';

const useStyles = makeStyles((theme) => createStyles({
  grid: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
  },
  title: {
    marginTop: theme.spacing(2),
  },
  paper: {
    width: 300,
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
}));

const AlertToLogin = () => {
  const classes = useStyles();

  // const handleResend = async () => {
    
  // };
  return (
    <div className="alertToLogin-bg">
      <Container maxWidth="xs" >
        <Grid container wrap="nowrap" direction="column" className={classes.grid}>
          <Box component="span" m={1}>
            <Paper className={classes.paper}>
              <div>
                <h3>You are almost there ...</h3>
                <p>
                We have sent you a link to confirm your email address.
                Please check your inbox.
                It could take up to 10 minutes to show up in your inbox.
              </p>
                {/* <div className="resend__container">
                  <Button className="link" onClick={handleResend}>Resend Email</Button>
                </div> */}
                {/* <Link to="/email" className="alertToLogin-link">
                  <Button
                    type="button"
                    variant="contained"
                    fullWidth
                    color="primary"
                    className="alertToLogin-btn"
                  >
                    Sign In Now
                  </Button>
                </Link> */}
              </div>
            </Paper>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default AlertToLogin;
