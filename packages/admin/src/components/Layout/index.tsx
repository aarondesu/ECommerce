import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import AdminFooter from '../Footer';
import AdminHeader from '../Header';
import AdminNavbar from '../Navbar';

const Layout = () => (
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

export default Layout;
