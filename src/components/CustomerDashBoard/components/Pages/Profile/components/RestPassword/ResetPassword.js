import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  TextField
} from "@material-ui/core";
import './ResetPassword.css';
import * as api from '../../../../../../Utils/api';

const ResetPassword = ({ onClick, showPasswordForm }) => {
  const history = useHistory();

  const password= {
    previousPassword: "",
    newPassword: "",
  };

  const [passwordWarning, setPasswordWarning] = useState(false);

  const resetPassword = async ({ previousPassword, newPassword }) => {
    console.log({ previousPassword, newPassword });
    try {
      const id = localStorage.getItem('userId');
      const changePasswordRes = await api.changePassword({id, previousPassword, newPassword});
      if (changePasswordRes.status === 200) {
        localStorage.clear();
        localStorage.setItem('isLogin', 'false');
        history.push('/email');
        window.location.reload();
      }
    } catch (error) {
      if (error.response.status === 400) {
        setPasswordWarning(true);
      }
    }
  };

  const validationSchema = Yup.object().shape({
    previousPassword: Yup.string(),
    newPassword: Yup.string(),
  });

  return (
    <div className="resetPassword-page">
      <div className="resetPassword-header">
        <h2>Change Your Password</h2>
        {passwordWarning ? (
          <span style={{ color: "red" }}>Old Password is not right</span>
        ) : null}

        <Formik
          initialValues={password}
          onSubmit={resetPassword}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <label
                htmlFor="password"
                style={{ display: "block" }}
                className="restPassword-label"
              >
                Old Password
              </label>
              <Field
                as={TextField}
                label="previousPassword"
                name="previousPassword"
                type="password"
                id="previousPassword"
                autoFocus
                autoComplete="previousPassword"
                variant="outlined"
                size="small"
                fullWidth
                className="restPassword-textField"
              />
              <div>
                <ErrorMessage name="previousPassword">
                  {(msg) => <span className="error">{msg}</span>}
                </ErrorMessage>
              </div>

              <label
                htmlFor="password"
                style={{ display: "block" }}
                className="restPassword-label"
              >
                New Password
              </label>
              <Field
                as={TextField}
                label="newPassword"
                name="newPassword"
                type="password"
                id="newPassword"
                autoFocus
                autoComplete="newPassword"
                variant="outlined"
                size="small"
                fullWidth
                className="restPassword-textField"
              />
              <div>
                <ErrorMessage name="newPassword">
                  {(msg) => <span className="error">{msg}</span>}
                </ErrorMessage>
              </div>

              <div className="resetPassword-btn">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Reset Password
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        {/* <div className="resetPassword-btn">
          <Button
            variant="contained"
            color="primary"
            onClick={onclick}>
            Cancel
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default ResetPassword;
