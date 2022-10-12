import { Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

const NavigationLoggedOff = () => (
  <>
    <Anchor size="sm" variant="text" component={Link} to="/account/register">
      Register
    </Anchor>
    <Anchor size="sm" variant="text" component={Link} to="/account/login">
      Sign In
    </Anchor>
  </>
);

export default NavigationLoggedOff;
