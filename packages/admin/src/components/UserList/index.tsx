import { useEffect } from 'react';
import {
  Avatar, Button, Center, CloseButton, Loader, Text, Title,
} from '@mantine/core';
import { IconEye, IconEdit } from '@tabler/icons';

import { UsersResponse } from '../../redux/api/users.api';

interface UserListProps {
  isLoading: boolean;
  data: UsersResponse;
}

const UserList = ({ isLoading, data } : UserListProps) => {
  useEffect(() => {
    // TODO
  }, []);

  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan={10}>
            <Center p="xl">
              <Loader color="dark" variant="dots" size="xl" />
            </Center>
          </td>
        </tr>
      </tbody>
    );
  }

  if (!data.users || data.users.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={10}>
            <Center p="xl">
              <Title order={4} weight={900}>No Results</Title>
            </Center>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.users.map((user) => (
        <tr key={user.id}>
          <td>
            <Avatar size="lg" radius="xl" src={user.img} />
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
                <Button compact variant="default" leftIcon={<IconEye size={18} />}>
                  View
                </Button>
                <Button compact variant="default" leftIcon={<IconEdit size={18} />}>
                  Edit
                </Button>
              </Button.Group>
            </Center>
          </td>
          <td>
            <Center>
              <CloseButton />
            </Center>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserList;
