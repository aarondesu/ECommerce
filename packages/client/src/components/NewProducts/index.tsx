import { Container, Group, Title } from '@mantine/core';
import ProductListing from '../ProductListing';

import useStyles from './NewProducts.styles';

const dummy = [
  {
    id: 1,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
  },
  {
    id: 2,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
  },
  {
    id: 3,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
  },
];

const NewProducts = () => {
  const { classes } = useStyles();

  const products = dummy.map((product) => (
    <ProductListing key={product.id} id={product.id} imgUrl={product.imgUrl} name={product.name} />
  ));

  return (
    <Container fluid className={classes.container}>
      <Title order={2} style={{ textAlign: 'center' }}>
        NEW PRODUCTS
      </Title>
      <Group mt="md" position="center" spacing="xl">
        {products}
      </Group>
    </Container>
  );
};

export default NewProducts;
