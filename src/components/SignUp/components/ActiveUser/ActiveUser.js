import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Container,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import './ActiveUser.css';
import ActivePage from './components/ActivePage/ActivePage';

const useStyles = makeStyles((theme) => createStyles({
  grid: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
  },
  paper: {
    width: 300,
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
}));

const ActiveUser = () => {
  const classes = useStyles();
  return (
      <Container maxWidth="xs">
        <Grid container wrap="nowrap" direction="column" className={classes.grid}>
          <Box component="span" m={1} className="active-span">
            <Paper className={classes.paper}>
              <ActivePage />
            </Paper>
          </Box>
        </Grid>
      </Container>
  );
};

export default ActiveUser;
