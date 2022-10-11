import { Anchor } from '@mantine/core';

import { useAppDispatch } from '../../redux/hooks';
import { setCredentials } from '../../redux/reducers/auth.reducer';

const NavigationLogged = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setCredentials({ id: '', username: '' }));
  };

  return <Anchor onClick={() => handleLogout()}>Logout</Anchor>;
};

export default NavigationLogged;
