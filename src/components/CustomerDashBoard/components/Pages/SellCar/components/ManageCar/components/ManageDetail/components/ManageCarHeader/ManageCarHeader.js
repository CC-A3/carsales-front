import {
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './ManageCarHeader.css';

const useStyles = makeStyles(() => ({
  contentss: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1.5rem 1rem 1rem',
    };
  },
  titless: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: 'black',
    textTransform: 'uppercase',
  },
  subtitless: {
    fontFamily: 'Montserrat',
    color: 'black',
    opacity: 0.87,
    marginTop: '1rem',
    fontWeight: 800,
    fontSize: 20,
  },
}));


const ManageCarHeader = (details) => {
  const classes = useStyles();
  const car = details.details;

  return (
    <aside className="col-lg-4 col-sm-5">
      <section class="title-display-wrap">
        <div className="row">
          <div className={classes.contentss}>
            <Typography className={classes.titless} variant={'h4'}>
              {car.title}
            </Typography>
            <Typography className={classes.subtitless}>
              ${car.price}
            </Typography>
          </div>

        </div>
      </section>
    </aside>
  )
}

export default ManageCarHeader;
