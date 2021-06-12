import React from 'react';
import {
  Button,
  TextField,
} from '@material-ui/core';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  useHistory
} from 'react-router-dom';
import './SignUpForm.css';
import * as api from '../../../Utils/api';

const SignUpForm = () => {
  const history = useHistory();

  const initialValues = {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  };
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().trim().required('Please enter your name').max(128, 'Your name input is too long!'),
    email: Yup.string().trim()
      .required('Please enter your email')
      .email('Invalid email address')
      .max(128, 'Your email address is too long!'),
    password: Yup.string()
      .matches(
        /^(?=\S*[a-zA-Z])(?=\S*[0-9#!"$%&'()*+,-./:;<=>?@[\]^_`{|}~])\S{8,}$/,
        'Invalid password.Your password must be at least 8 character long and contains at least one non-letter character',
      ).max(128, 'Too long!')
      .required('Please enter your password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Please confirm your password'),
  });
  const onSubmit = async ({ email, fullName, password }) => {
    try {
      console.log(email, fullName, password);
      const signupRes =await api.signup({ email, fullName, password });
      if (signupRes.status === 200) {
        history.push('/alertToLogin');
        console.log(signupRes.data);
        const link = signupRes.data;
        api.sendEmail({email, link});
      }
    } catch {
      
    }
  };
  return (
    <div className="signup_form">
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
              label="Full Name"
              name="fullName"
              variant="outlined"
              margin="normal"
              fullWidth
              id="fullName"
              autoFocus
              autoComplete="fullName"
              helperText={(
                <ErrorMessage name="fullName">
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
            <Field
              as={TextField}
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              fullWidth
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              autoComplete="current-password"
              helperText={(
                <ErrorMessage name="confirmPassword">
                  { (msg) => <span className="errorMessage">{msg}</span>}
                </ErrorMessage>
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="signup-btn"
              disabled={isSubmitting}
            >
              Sign up
            </Button>
            <div style={{ height: 10 }} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
