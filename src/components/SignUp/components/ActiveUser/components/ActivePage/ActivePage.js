import React, { useEffect } from 'react';
import {
  Button,
} from '@material-ui/core';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import * as api from '../../../../../Utils/api';
import './ActivePage.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ActivePage = () => {
  const query = useQuery();

  useEffect(() => {
    
  const activedLink = async () => {
    const code = query.get('code');
    const activeResponse = await api.activeUser(code);
    if (activeResponse.status === 200) {
      console.log('success');
    }
  };
    activedLink();
  },[query]);
  return (
    <div>
      <h3 className="activePage-title">Congratulations! Your account has been successfully activated.</h3>
      <p>
        You can now login your account and start carsales!
      </p>
      <Link to="/email" className="activePage-link">
        <Button
          type="button"
          variant="contained"
          fullWidth
          color="primary"
        >
          Login Now
        </Button>
      </Link>
    </div>
  );
};

export default ActivePage;
