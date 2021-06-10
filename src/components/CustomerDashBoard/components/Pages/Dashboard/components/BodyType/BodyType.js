// import React from 'react';
// import carType from './carType';
// import TypeCard from '../TypeCard/TypeCard';

// const BodyType = () => {


//   return (
//     <div className="bodyType-page">
//       <div className="bodyType=header"></div>
//       <div className="bodyType-items">
//       {carType.map((type) => (
//         <TypeCard
//           path={type.path}
//           icon={type.icon}
//           label={type.label}
//         />
//       ))}
//       </div>
//     </div>
//   )
// }

// export default BodyType;

import React from 'react';
import Color from 'color';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import carType from './carType';
import CustomCard from '../TypeCard/CustomCard';
import './BodyType.css';
// import CarCarousel from '../CarCarousel/CarCarousel';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '1rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  path: {
    textDecoration: 'none',
  },
}));

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  // const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  // const styles3 = useStyles({ color: '#ff9900' });
  // const styles4 = useStyles({ color: '#34241e' });
  return (
    <div className="bodyType-page">
      {/* <CarCarousel /> */}
      <header className="bodyType-header">
        <h1 className="bodyType-title">Find you next car</h1>
      </header>
      <Grid classes={gridStyles} container spacing={5} className="bodyType-card">
        {carType.map((type) => (
          <CustomCard
            classes={styles2}
            icon={type.icon}
            label={type.label}
            path={type.path}
          />
        ))}
      </Grid>
    </div>
  );
});

export default SolidGameCardDemo;
