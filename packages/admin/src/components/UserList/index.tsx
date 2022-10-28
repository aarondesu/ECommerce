import { useEffect } from 'react';
import {
  Avatar, Button, Center, Table, Text, Title,
} from '@mantine/core';
import { IconEye, IconEdit, IconEraser } from '@tabler/icons';

import { UsersResponse } from '../../redux/api/users.api';
import DataLoader from '../DataLoader';

interface UserListProps {
  isLoading: boolean;
  data: UsersResponse;
}

const UserList = ({ isLoading, data } : UserListProps) => {
  useEffect(() => {
    // TODO
  }, []);

  if (isLoading) {
    return <DataLoader />;
  }

  if (!data.users || data.users.length === 0) {
    return (
      <Center p="xl">
        <Title order={4} weight={900}>
          No Results
        </Title>
      </Center>
    );
  }

  return (
    <Table striped highlightOnHover mt="md">
      <thead>
        <tr>
          <td width={60} />
          <td style={{ width: 350 }}>
            <b>ID</b>
          </td>
          <td style={{ minWidth: 100 }}>
            <b>Username</b>
          </td>
          <td style={{ minWidth: 300 }}>
            <b>Email</b>
          </td>
          <td width={100}>
            <b>Role</b>
          </td>
          <td width={100} />
        </tr>
      </thead>
      <tbody>
        {data.users.map((user) => (
          <tr key={user.id}>
            <td>
              <Avatar size="lg" radius="xl" src={user.img} />
            </td>
            <td>
              <Text color="gray">{user.id}</Text>
            </td>
            <td>
              <Text>{user.username}</Text>
            </td>
            <td>
              <Text>{user.email}</Text>
            </td>
            <td>
              <Text>{user.role}</Text>
            </td>
            <td>
              <Center>
                <Button.Group>
                  <Button compact variant="default" leftIcon={<IconEye size={18} stroke={1} />}>
                    View
                  </Button>
                  <Button compact variant="default" leftIcon={<IconEdit size={18} stroke={1} />}>
                    Edit
                  </Button>
                  <Button compact variant="default" leftIcon={<IconEraser size={18} stroke={1} />}>
                    Delete
                  </Button>
                </Button.Group>
              </Center>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

  );
};

export default UserList;
