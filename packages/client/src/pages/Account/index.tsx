import { useEffect, useState } from 'react';
import {
  AppShell, Box, Center, LoadingOverlay,
} from '@mantine/core';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';

import useStyles from './Account.styles';
import { useAppSelector } from '../../redux/hooks';

export interface OutletContext {
  loading: boolean;
  setLoading: (args: boolean) => void;
}

const Account = () => {
  const { classes } = useStyles();
  const [loading, setLoading] = useState(false);
  const { token } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const background = 'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/kai-pilger-7YwWjgS7aJs-unsplash.jpg';

  useEffect(() => {
    if (token !== '') {
      navigate(-1);
    }
  }, [token]);

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
          <LoadingOverlay
            overlayBlur={2}
            visible={loading}
            loaderProps={{ variant: 'bars' }}
            overlayOpacity={0.8}
            overlayColor="#3f3f3f"
          />
          <Outlet context={{ loading, setLoading }} />
        </Box>
      </Center>
    </AppShell>
  );
};

export const useLoading = () => useOutletContext<OutletContext>();

export default Account;
