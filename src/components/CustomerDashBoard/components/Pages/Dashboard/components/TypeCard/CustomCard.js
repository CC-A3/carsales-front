import React from 'react';
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';

const CustomCard = ({ classes, icon, label, path }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
      <Grid item>
      <CardActionArea className={classes.actionArea}>
        <Card className={classes.card}>
          <Link to={path} className={classes.path}>
          <CardMedia classes={mediaStyles} image={icon} />
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant={'h1'}>
              {label}
            </Typography>
            {/* <Typography className={classes.subtitle}>{subtitle}</Typography> */}
          </CardContent>
          </Link>
        </Card>
      </CardActionArea>
      </Grid>
  );
};

export default CustomCard;
