import {
  Header, Title, Grid, Group, ActionIcon,
} from '@mantine/core';
import { IconBell, IconMessage } from '@tabler/icons';

const AdminHeader = () => (
  <Header height={50} p="xs" px="xl" withBorder>
    <Grid grow>
      <Grid.Col span="content">
        <Title order={2}>myshopAdmin</Title>
      </Grid.Col>
      <Grid.Col span="content">
        <Group position="right" spacing="md">
          <ActionIcon>
            <IconBell size={22} />
          </ActionIcon>
          <ActionIcon>
            <IconMessage size={22} />
          </ActionIcon>
        </Group>
      </Grid.Col>
    </Grid>
  </Header>
);

export default AdminHeader;
