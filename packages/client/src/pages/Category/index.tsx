import {
  AppShell, Box, Group, MediaQuery, Navbar, Select, Text, Title,
} from '@mantine/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductListing from '../../components/ProductListing';

import useStyles from './Category.styles';

const productsData = [
  {
    id: 1,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 0,
    reviews: 0,
  },
  {
    id: 2,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 9,
    reviews: 123144,
  },
  {
    id: 3,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 8,
    reviews: 123144,
  },
  {
    id: 4,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 7,
    reviews: 8315,
  },
  {
    id: 5,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 6,
    reviews: 14,
  },
  {
    id: 6,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 5,
    reviews: 4256,
  },
  {
    id: 7,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 4,
    reviews: 6623,
  },
  {
    id: 8,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 3,
    reviews: 1123,
  },
  {
    id: 9,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 2,
    reviews: 324,
  },
  {
    id: 10,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industryf',
    price: 150,
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    rating: 1,
    reviews: 4235,
  },
];

function FilterNavigation() {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Navbar p="md" width={{ base: 250 }}>
        <Title order={4}>Filters</Title>
      </Navbar>
    </MediaQuery>
  );
}

function Category() {
  const { classes } = useStyles();

  const products = productsData.map((product) => (
    <ProductListing
      withBorder
      key={product.id}
      id={product.id}
      name={product.name}
      imgUrl={product.imgUrl}
      price={product.price}
      score={product.rating}
      reviews={product.reviews}
    />
  ));

  return (
    <AppShell
      fixed={false}
      navbarOffsetBreakpoint="sm"
      header={<Header />}
      navbar={<FilterNavigation />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          maxWidth: 1700,
          backgroundColor: theme.colors.cyan[1],
        },
      })}
    >
      <Box className={classes.sortNavigation}>
        <Group spacing="md">
          <Text size={14} weight={700}>
            Sort by:
          </Text>
          <Select
            className={classes.sortBy}
            size="xs"
            defaultValue="asc"
            data={[
              { value: 'asc', label: 'Ascending' },
              { value: 'desc', label: 'Descending' },
            ]}
          />
        </Group>
      </Box>
      <Group mt="md" spacing="sm">
        {products}
      </Group>
    </AppShell>
  );
}

export default Category;
