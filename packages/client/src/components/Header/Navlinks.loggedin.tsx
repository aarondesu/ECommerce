/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Anchor } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthorizeQuery } from '../../redux/api/auth.api';
import { useAppDispatch } from '../../redux/hooks';
import { setCredentials } from '../../redux/reducers/auth.reducer';

const NavigationLoggedIn = () => {
  const [isAdmin, setAdmin] = useState(false);
  const { data } = useAuthorizeQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setAdmin(data === 'Ok');
  }, [data]);

  const signOut = () => {
    dispatch(
      setCredentials({
        user: null,
        token: '',
      }),
    );

    navigate('/');
  };

  return (
    <>
      {isAdmin && (
        <Anchor size="sm" variant="text" component={Link} to="/admin/dashboard">
          Dashboard
        </Anchor>
      )}
      <Anchor size="sm" variant="text">
        Profile
      </Anchor>
      <Anchor size="sm" variant="text" onClick={() => signOut()}>
        Sign Out
      </Anchor>
    </>
  );
};

export default NavigationLoggedIn;
