import {
  Box, Title, Button, Group,
} from '@mantine/core';
import { useState } from 'react';
import { IconPlus } from '@tabler/icons';
import ProductList from '../../components/ProductList';
import CreateProductModal from '../../components/CreateProductModal';

import useStyles from './styles';

const Products = () => {
  const { classes } = useStyles();

  const [openCreate, setOpenCreate] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <CreateProductModal open={openCreate} setOpen={setOpenCreate} />
      <Box className={classes.container}>
        <Group position="apart">
          <Title order={2} weight={900}>
            Products
          </Title>
          <Button leftIcon={<IconPlus size={18} />} onClick={() => setOpenCreate(true)}>
            Create
          </Button>
        </Group>
      </Box>

      <Box className={classes.container} mt="md">
        <ProductList />
      </Box>
    </>
  );
};

export default Products;
