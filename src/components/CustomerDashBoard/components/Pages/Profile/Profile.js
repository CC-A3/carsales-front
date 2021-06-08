import React, {useState,useEffect} from "react";
import {
  Divider,
  Button,
  TextField,
} from '@material-ui/core';
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import './Profile.css';
import ResetPassword from './components/RestPassword/ResetPassword';
import * as api from '../../../../Utils/api';

const Profile = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [update, setUpdate] = useState({
    update: '0',
  })
  const [dProfile, setDProfile] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
  })

  useEffect(() => {
    const fetchProfile = async () => {
      const id = localStorage.getItem('userId');
      try {
        const fetchUserRes = await api.fetchClientProfile(id);
        if (fetchUserRes.status === 200) {
          setDProfile({
            email: fetchUserRes.data.email,
            fullName: fetchUserRes.data.fullName,
            phoneNumber: fetchUserRes.data.phoneNumber,
          })
        }
      } catch (error) {

      }
    }

    fetchProfile();
  }, [update]);

  const onclick = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email Required!"),
  });

  const onSubmit = async ({ email, fullName, phoneNumber }) => {
    console.log({ email, fullName, phoneNumber });
    const id = localStorage.getItem('userId');
    try {
      const changeProfileRes = await api.changeProfile({id, email, fullName, phoneNumber});
      if (changeProfileRes.status === 200) {
        setUpdate({
          update: update+1,
        })
      }
    } catch (error) {

    }
  }

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1 className="profile-title">My Profile</h1>
      </header>
      <Divider />
      <Formik
        enableReinitialize
        initialValues={dProfile}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label
            htmlFor="Email"
            style={{ display: "block" }}
            className="profile-label"
          >
            Email
          </label>
          <Field
            as={TextField}
            label="email"
            name="email"
            id="email"
            autoFocus
            autoComplete="email"
            variant="outlined"
            size="small"
            fullWidth
            className="profile-textField"
          />
          <ErrorMessage name="email">
            {(msg) => <span className="error">{msg}</span>}
          </ErrorMessage>

          <label
            htmlFor="fullName"
            style={{ display: "block" }}
            className="profile-label"
          >
            Full Name
          </label>
          <Field
            as={TextField}
            label="fullName"
            name="fullName"
            id="fullName"
            autoFocus
            autoComplete="fullName"
            variant="outlined"
            size="small"
            fullWidth
            className="profile-textField"
          />
          <ErrorMessage name="fullName">
            {(msg) => <span className="error">{msg}</span>}
          </ErrorMessage>

          <label
            htmlFor="phoneNumber"
            style={{ display: "block" }}
            className="profile-label"
          >
            Phone Number
          </label>
          <Field
            as={TextField}
            label="phoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            autoFocus
            autoComplete="phoneNumber"
            variant="outlined"
            size="small"
            fullWidth
            className="profile-textField"
          />
          <ErrorMessage name="phoneNumber">
            {(msg) => <span className="error">{msg}</span>}
          </ErrorMessage>
          <div className="profile-btn">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ display: "block" }}
              
            >
              Update Detail
            </Button>
          </div>
        </Form>
      </Formik>
      {!showPasswordForm ? (
        <div className="password-btn">
          <Button variant="contained" color="primary" onClick={onclick}>
            Reset Password
          </Button>
        </div>
      ) : null}

      {showPasswordForm ? <ResetPassword /> : null}
    </div>
  )
};

export default Profile;
