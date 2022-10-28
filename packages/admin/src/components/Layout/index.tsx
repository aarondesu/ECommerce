import { AppShell } from '@mantine/core';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import AdminFooter from '../Footer';
import AdminHeader from '../Header';
import AdminNavbar from '../Navbar';

const Layout = () => {
  const { user, token } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(
    () => {
      if (user === null && token === '') {
        navigate('/login');
      }

      // Check authorization (if admin)
    },
    [],
  );

  return (
    <AppShell
      asideOffsetBreakpoint="sm"
      navbarOffsetBreakpoint="sm"
      header={<AdminHeader />}
      footer={<AdminFooter />}
      navbar={<AdminNavbar />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.gray[2],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};

export default Layout;
