import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import LandingPage from '../Home/Home';
import Login from '../Login/Login';
import LoginByEmail from '../Login/components/LoginByEmail/LoginByEmail';
import SignUp from '../SignUp/SignUp';
import AlertToLogin from '../SignUp/components/AlertToLogin/AlertToLogin';
import ActiveUser from '../SignUp/components/ActiveUser/ActiveUser';
import CustomerDashBoard from '../CustomerDashBoard/CustomerDashBoard';
import CarDetails from '../CarDetails/CarDetails';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => (
        localStorage.getItem('isLogin') === 'true'
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

const PublicRoute = ({ component: Component,restricted, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => (
        localStorage.getItem('isLogin') === 'true' && restricted
          ? <Redirect to={{ pathname: '/dashboard-customer/dashboard' }} />
          : <Component {...props} />
      )
    }
  />
);

const App = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/" restricted={false} component={LandingPage} />
      <PublicRoute path="/login" restricted={false} component={Login} />
      <PublicRoute path="/email" restricted={true} component={LoginByEmail} />
      <PublicRoute path="/signup" restricted={true} component={SignUp} />
      <PublicRoute path="/alertToLogin" restricted={true} component={AlertToLogin} />
      <PublicRoute path="/verify-link" restricted={true} component={ActiveUser} />
      <PrivateRoute path="/dashboard-customer" component={CustomerDashBoard} />
      <PrivateRoute path='/test' component={CarDetails} />
    </Switch>
  </Router>
)

export default App;
