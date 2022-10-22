import {
  Box,
  Title,
  Table,
  Avatar,
  Text,
  Checkbox,
  Button,
  CloseButton,
  NumberInput,
  Pagination,
  Group,
  Center,
  Select,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useId } from '@mantine/hooks';
import { IconEye, IconFilter, IconPlus } from '@tabler/icons';
import { useState } from 'react';

import useStyles from './styles';

interface ProductData {
  id: string;
  img: string;
  name: string;
  price: number;
  isAvailable: boolean;
}

const dummyData: ProductData[] = [
  {
    id: '1231231',
    img: 'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png',
    name: 'Shirt',
    price: 120,
    isAvailable: true,
  },
  {
    id: '12asdf311dfas231',
    img: 'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png',
    name: 'Shirt 1',
    price: 50,
    isAvailable: true,
  },
  {
    id: '123dsfas',
    img: 'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png',
    name: 'Shirt 2',
    price: 30,
    isAvailable: false,
  },
  {
    id: 'teqwrq124',
    img: 'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png',
    name: 'Shirt 3',
    price: 30,
    isAvailable: false,
  },
  {
    id: '1231sdfa',
    img: 'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png',
    name: 'Shirt 4',
    price: 30,
    isAvailable: false,
  },
];

interface SearchValues {
  key: string;
  sort: string;
  order: string;
}

const Products = () => {
  const { classes } = useStyles();
  const [total] = useState(1);
  const [page, setPage] = useState(1);

  const form = useForm<SearchValues>({
    initialValues: {
      key: '',
      sort: 'i',
      order: 'a',
    },
  });

  const handleForm = () => {
    // TODO
  };

  const results = dummyData.map((data) => (
    <tr key={data.id}>
      <td>
        <Avatar src={data.img} size="lg" />
      </td>
      <td>
        <Text weight={700} color="gray">
          {useId()}
        </Text>
      </td>
      <td>
        <Text>{data.name}</Text>
      </td>
      <td>
        <NumberInput hideControls value={data.price} />
      </td>
      <td>
        <Center>
          <Checkbox defaultChecked={data.isAvailable} />
        </Center>
      </td>
      <td>
        <Center>
          <Button.Group>
            <Button leftIcon={<IconEye size={18} stroke={1} />} variant="default" compact>
              View
            </Button>
            <Button leftIcon={<IconEye size={18} stroke={1} />} variant="default" compact>
              Edit
            </Button>
          </Button.Group>
        </Center>
      </td>
      <td>
        <CloseButton />
      </td>
    </tr>
  ));

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
              placeholder="Search Username, Email, etc..."
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
          <Pagination align="center" total={total} page={page} onChange={setPage} />
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
          <tbody>{results}</tbody>
        </Table>

        <Group position="center" mt="md">
          <Pagination align="center" total={total} page={page} onChange={setPage} />
        </Group>
      </Box>
    </>
  );
};

export default Products;
