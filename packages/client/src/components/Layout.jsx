import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import Navbar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <AppShell
      fixed={false}
      header={<Navbar />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          minHeight: 800,
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};

export default Layout;
