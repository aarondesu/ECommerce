import { Container, Group, Title } from '@mantine/core';

import ProductListing from '../ProductListing';

import useStyles from './PopoularProducts.styles';

const dummy = [
  {
    id: 1,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
    price: 100,
    reviews: 5,
    score: 5,
  },
  {
    id: 3,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
    price: 100,
    reviews: 5,
    score: 5,
  },
  {
    id: 2,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
    price: 100,
    reviews: 5,
    score: 5,
  },
  {
    id: 4,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
    price: 100,
    reviews: 5,
    score: 5,
  },
  {
    id: 5,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
    price: 100,
    reviews: 5,
    score: 5,
  },
  {
    id: 6,
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/shirt.png?t=2022-10-13T10%3A33%3A58.704Z',
    name: 'Shirt',
    price: 100,
    reviews: 5,
    score: 5,
  },
];

const PopularProducts = () => {
  const { classes } = useStyles();

  const products = dummy.map((product) => (
    <ProductListing
      key={product.id}
      id={product.id}
      imgUrl={product.imgUrl}
      name={product.name}
      price={product.price}
      score={product.score}
      reviews={product.reviews}
    />
  ));

  return (
    <Container fluid className={classes.container}>
      <Title order={2} style={{ textAlign: 'center' }}>
        Popular Items
      </Title>
      <Group mt="md" position="center">
        {products}
      </Group>
    </Container>
  );
};

export default PopularProducts;
