import {
  Box,
  Title,
  Table,
  Button,
  Pagination,
  Select,
  TextInput,
  Group,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconFilter, IconPlus } from '@tabler/icons';
import { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList';
import { usePaginateQuery } from '../../redux/api/products.api';

import useStyles from './styles';

interface SearchValues {
  key: string;
  sort: string;
  order: string;
}

const Products = () => {
  const { classes } = useStyles();
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);

  const form = useForm<SearchValues>({
    initialValues: {
      key: '',
      sort: 'i',
      order: 'a',
    },
  });

  const { data, isFetching, isSuccess } = usePaginateQuery({
    page,
  });

  useEffect(() => {
    if (isSuccess) {
      setTotal(data.pages);
    }
  }, [isSuccess]);

  const handleForm = () => {
    // TODO
  };

  return (
    <>
      <Box className={classes.container}>
        <Group position="apart">
          <Title order={2} weight={900}>
            Products
          </Title>
          <Button leftIcon={<IconPlus />}>Create</Button>
        </Group>
      </Box>

      <Box className={classes.container} mt="md">
        <form onSubmit={form.onSubmit(handleForm)}>
          <Group mt="md" spacing="xl" style={{ alignItems: 'flex-end' }}>
            <TextInput
              label="Search"
              placeholder="Search keyword in name and description..."
              style={{ width: 425 }}
              {...form.getInputProps('word')}
            />
            <Select
              label="Sort"
              defaultValue="i"
              data={[
                { label: 'Id', value: 'i' },
                { label: 'Name', value: 't' },
                { label: 'Created', value: 'u' },
                { label: 'Price', value: 'p' },
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
          <Pagination align="center" total={total} page={page} onChange={setPage} disabled={isFetching} />
        </Group>

        <Table striped highlightOnHover mt="md">
          <thead>
            <tr>
              <td width={100} />
              <td width={300}>
                <b>Id</b>
              </td>
              <td>
                <b>Name</b>
              </td>
              <td width={120} style={{ textAlign: 'center' }}>
                <b>Price</b>
              </td>
              <td width={100} style={{ textAlign: 'center' }}>
                <b>Available?</b>
              </td>
              <td width={100} />
              <td width={50} />
            </tr>
          </thead>
          <ProductList isFetching={isFetching} data={data} />
        </Table>

        <Group position="center" mt="md">
          <Pagination align="center" total={total} page={page} onChange={setPage} disabled={isFetching} />
        </Group>
      </Box>
    </>
  );
};

export default Products;
