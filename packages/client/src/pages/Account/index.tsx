import { useState } from 'react';
import {
  AppShell, Box, Center, LoadingOverlay,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';

import useStyles from './Account.styles';

export interface OutletContext {
  loading: boolean;
  setLoading: (args: boolean) => void;
}

const Account = () => {
  const { classes } = useStyles();
  const [loading, setLoading] = useState(false);

  const background = 'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/kai-pilger-7YwWjgS7aJs-unsplash.jpg';

  return (
    <AppShell
      styles={{
        main: {
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
      }}
    >
      <Center className={classes.center}>
        <Box className={classes.container}>
          <LoadingOverlay color="#000" overlayBlur={2} visible={loading} />
          <Outlet context={[loading, setLoading]} />
        </Box>
      </Center>
    </AppShell>
  );
};

export default Account;
