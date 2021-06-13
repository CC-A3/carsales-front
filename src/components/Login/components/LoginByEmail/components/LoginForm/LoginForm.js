import React, {useState} from 'react';
import {
  Button,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Link,
  useHistory
} from 'react-router-dom';
import './LoginForm.css';
import * as api from '../../../../../Utils/api';

const LoginForm = () => {
  const history = useHistory();
  const [Valid, setValid] = useState({
    email: false,
    password: false,
  });
  const [isActive, setIsActive] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().required('Email Required!').email('Please enter valid email'),
    password: Yup.string().required('Password Required!'),
  });
  const onSubmit = async ({ email, password }) => {
    try {
      const loginRes = await api.login({ email, password });
      if (loginRes.status === 200) {
        localStorage.setItem('email', email);
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('userId', loginRes.data.id);
        localStorage.setItem('fullName', loginRes.data.fullName);
        history.push('/dashboard-customer/dashboard')
      }
      if (loginRes.status === 203) {
        setIsActive(true);
     
        const link = loginRes.data;
        console.log(link);
        api.sendEmail({ email, link });
        console.log("email send again");
      }
    } catch (error) {
      if (error.response.status === 400) {
        setValid({
          email: false,
          password: true,
        })
      }
      if (error.response.status === 404) {
        setValid({
          email: true,
          password: false,
        })
      }
    }
  };
  return (
    <div className="login_form">
      {Valid.email ? <span style={{color : 'red' }}>User no found</span> : null}
      {Valid.password ? <span style={{ color: 'red' }}>Password not right</span> : null}
      {isActive? <span style={{ color: 'red' }}>You account is not actived, Please check you email</span> : null}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              label="Email"
              name="email"
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              autoFocus
              autoComplete="email"
              helperText={(
                <ErrorMessage name="email">
                  { (msg) => <span className="errorMessage">{msg}</span>}
                </ErrorMessage>
              )}
            />
            <Field
              as={TextField}
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
              helperText={(
                <ErrorMessage name="password">
                  { (msg) => <span className="errorMessage">{msg}</span>}
                </ErrorMessage>
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              className="login-btn"
            >
              Sign in
            </Button>
            <div style={{ height: 10 }} />
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item>
                <Typography>
                  <Link className="link" to="/">
                    Forgot Password?
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  New User? &nbsp;
                  <Link id="signUpLink" className="link" to="/signup">
                    Sign Up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
