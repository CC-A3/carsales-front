import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import './LoginByGoogle.css';

const LoginByGoogle = () => {
  const history = useHistory();
  const responseGoogle = response => {
    history.push('/dashboard-customer/dashboard')
    console.log(response);
  
  };

  return (
    <div>
      <GoogleLogin
        clientId="49902331939-qvfr1orsn9kfl5uju9rq9kubf1db9g67.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="google"
      >
        <div className="btn-titles">
            Continue with Google
        </div>
      </GoogleLogin>
      
    </div>
    
  );
}

export default LoginByGoogle;
