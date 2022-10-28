import {
  Header, Title, Grid, Group, ActionIcon,
} from '@mantine/core';
import { IconBell, IconDoorExit, IconMessage } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { reset } from '../../redux/slice/authSlice';

const AdminHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(reset());
    navigate(0);
  };

  return (
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
            <ActionIcon onClick={handleLogout}>
              <IconDoorExit size={22} />
            </ActionIcon>
          </Group>
        </Grid.Col>
      </Grid>
    </Header>
  );
};

export default AdminHeader;
