import {
  AppShell,
  Header,
  Navbar,
  Footer,
  Grid,
  Title,
  Anchor,
  Button,
  Group,
} from '@mantine/core';
import { IconCaretLeft } from '@tabler/icons';
import { Link } from 'react-router-dom';

import useStyles from './Dashboard.styles';

const DashboardHeader = () => (
  <Header height={50} p="xs" px="xl">
    <Grid grow>
      <Grid.Col span={6}>
        <Anchor variant="text" component={Link} to="/admin/dashboard">
          <Title order={3}>Dashboard</Title>
        </Anchor>
      </Grid.Col>

      <Grid.Col span={6} style={{ justifyContent: 'right' }}>
        <Group position="right">
          <Button
            leftIcon={<IconCaretLeft size={18} />}
            variant="default"
            size="xs"
            component={Link}
            to="/"
          >
            Back to site
          </Button>
        </Group>
      </Grid.Col>
    </Grid>
  </Header>
);

const Dashboard = () => {
  const { classes } = useStyles();

  return (
    <AppShell
      fixed={false}
      header={<DashboardHeader />}
      navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}
      footer={<Footer height={30}>Footer</Footer>}
    >
      <h1 className={classes.div}>Dashboard!</h1>
    </AppShell>
  );
};

export default Dashboard;
