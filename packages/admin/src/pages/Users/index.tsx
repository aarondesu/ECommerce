import {
  Box, Title, Pagination, Group, TextInput, Select, Button,
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
  const [sort, setSort] = useState('i');
  const [order, setOrder] = useState('a');

  const form = useForm<SearchValues>({
    initialValues: {
      word: '',
      sort: 'i',
      order: 'a',
    },
  });

  const {
    data, isSuccess, isFetching, refetch,
  } = usePaginateQuery({
    page,
    limit: 10,
    keyword,
    sort,
    order,
  });

  const handleForm = (values : SearchValues) => {
    setKeyword(values.word);
    setOrder(values.order);
    setSort(values.sort);
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
          <Button leftIcon={<IconPlus size={18} />}>Create</Button>
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

        <UserList isLoading={isFetching} data={data} />

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
