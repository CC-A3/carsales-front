import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./components/routes";
import { useStyles } from "./components/MenuItem/styles";
import CarPick from '../CarPick/CarPick';
import CarDetails from '../CarDetails/CarDetails';
import carType from '../CustomerDashBoard/components/Pages/Dashboard/components/BodyType/carType';
import SellCarForm from './components/Pages/SellCar/components/SellCarForm/SellCarFrom';
import ManageCar from './components/Pages/SellCar/components/ManageCar/ManageCar';

const CustomerDashBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <Router>
        <Navigation />
        <div>
          <div className={classes.appBarSpacer}></div>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route exact key={index} path={route.path}>
                  {route.component}
                </Route>
              );
            })}
            {carType.map((type, index) => (
              <Route exact key={index} path={type.path} component={CarPick} />
            ))}
            <Route exact path='/dashboard-customer/dashboard/cars/:id' component={CarDetails} />
            <Route exact path='/dashboard-customer/dashboard/sell-cars/submit-car' component={SellCarForm} />
            <Route exact path='/dashboard-customer/dashboard/sell-cars/manage-car' component={ManageCar} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default CustomerDashBoard;
