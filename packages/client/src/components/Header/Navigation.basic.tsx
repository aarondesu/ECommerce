import { Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

const NavigationBasic = () => (
  <>
    <Anchor variant="text" component={Link} to="/account/register">
      Register
    </Anchor>
    <Anchor variant="text" component={Link} to="/account/login">
      Sign In
    </Anchor>
  </>
);

export default NavigationBasic;
