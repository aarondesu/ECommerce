import {
  Box, Title, Table, Pagination, Group, TextInput, Select, Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { IconFilter, IconPlus } from '@tabler/icons';

import useStyles from './styles';
import { usePaginateQuery } from '../../redux/api/users.api';

import UserList from '../../components/UserList';

interface SearchValues {
  word: string;
  sort: string;
  order:string;
}

const Users = () => {
  const { classes } = useStyles();
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState('t');
  const [order, setOrder] = useState('a');

  const form = useForm<SearchValues>({
    initialValues: {
      word: '',
      sort: 'u',
      order: 'a',
    },
  });

  const {
    data, isSuccess, isFetching, refetch,
  } = usePaginateQuery({
    page,
    limit: 10,
    word: keyword,
    sort,
    order,
  });

  const handleForm = (values : SearchValues) => {
    setKeyword(values.word);
    setSort(values.sort);
    setOrder(values.order);
    refetch();
  };

  useEffect(() => {
    if (isSuccess) {
      setTotalPage(data.pages);
    }

    return () => {
      // eslint-disable-next-line no-console
      console.log('Component did unmount!');
    };
  }, [isSuccess]);

  return (
    <>
      <Box className={classes.container}>
        <Group position="apart">
          <Title order={2} weight={900}>
            Users
          </Title>
          <Button leftIcon={<IconPlus size={18} />}>
            Create
          </Button>
        </Group>
      </Box>

      <Box className={classes.container} mt="md">
        <form onSubmit={form.onSubmit(handleForm)}>
          <Group mt="md" spacing="xl" style={{ alignItems: 'flex-end' }}>
            <TextInput
              label="Search"
              placeholder="Search Username, Email, etc..."
              style={{ width: 425 }}
              {...form.getInputProps('word')}
            />
            <Select
              label="Sort"
              defaultValue="t"
              data={[
                { label: 'Id', value: 'i' },
                { label: 'Created', value: 't' },
                { label: 'Username', value: 'u' },
                { label: 'Email', value: 'e' },
              ]}
              style={{ width: 150 }}
              {...form.getInputProps('sort')}
            />
            <Select
              label="Order"
              defaultValue="a"
              data={[
                { label: 'Ascending', value: 'a' },
                { label: 'Descending', value: 'd' },
              ]}
              style={{ width: 150 }}
              {...form.getInputProps('order')}
            />

            <Button type="submit" leftIcon={<IconFilter size={18} />}>
              Filter
            </Button>
          </Group>
        </form>

        <Group position="center" mt="xl">
          <Pagination
            align="center"
            total={totalPage}
            page={page}
            onChange={setPage}
            disabled={isFetching}
          />
        </Group>

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
              <td width={50}>
                <b>Role</b>
              </td>
              <td width={200} />
              <td width={60} />
            </tr>
          </thead>
          <UserList isLoading={isFetching} data={data} />
        </Table>

        <Group position="center" mt="md">
          <Pagination
            align="center"
            total={totalPage}
            page={page}
            onChange={setPage}
            disabled={isFetching}
          />
        </Group>
      </Box>
    </>
  );
};

export default Users;
