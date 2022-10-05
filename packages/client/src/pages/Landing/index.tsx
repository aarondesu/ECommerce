import { Carousel } from '@mantine/carousel';
import {
  Container, Grid, Title, AppShell,
} from '@mantine/core';

import useStyles from './Landing.styles';

import CategoryCard from '../../components/CategoryCard';
import Banner from '../../components/Banner';
import Newsletter from '../../components/Newsletter';
import ProductListing from '../../components/ProductListing';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const categoryData = [
  {
    id: 1231,
    name: 'Male Shirts',
    imgUrl:
      'https://burst.shopifycdn.com/photos/black-and-white-portrait-mens-fashion.jpg?width=925&format=pjpg&exif=1&iptc=1',
  },
  {
    id: 12412,
    name: 'Female Shirts',
    imgUrl: 'https://burst.shopifycdn.com/photos/womens-necklace-set.jpg?width=925&format=pjpg&exif=1&iptc=1',
  },
  {
    id: 5123,
    name: 'Female Shirts',
    imgUrl: 'https://burst.shopifycdn.com/photos/womens-necklace-set.jpg?width=925&format=pjpg&exif=1&iptc=1',
  },
  {
    id: 123414,
    name: 'Female Shirts',
    imgUrl: 'https://burst.shopifycdn.com/photos/womens-necklace-set.jpg?width=925&format=pjpg&exif=1&iptc=1',
  },
  {
    id: 6234234,
    name: 'Male Shirts',
    imgUrl:
      'https://burst.shopifycdn.com/photos/black-and-white-portrait-mens-fashion.jpg?width=925&format=pjpg&exif=1&iptc=1',
  },
];

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

function Landing() {
  const { classes } = useStyles();

  const categories = categoryData.map((category) => (
    <Grid.Col span="content" key={category.id}>
      <CategoryCard id={category.id} name={category.name} imgUrl={category.imgUrl} />
    </Grid.Col>
  ));

  const newProducts = productsData.map((product) => (
    <Carousel.Slide size={170} key={product.id}>
      <ProductListing
        id={product.id}
        name={product.name}
        price={product.price}
        imgUrl={product.imgUrl}
        score={product.rating}
        reviews={product.reviews}
      />
    </Carousel.Slide>
  ));

  return (
    <AppShell fixed={false} header={<Header />} footer={<Footer />}>
      <Container className={classes.landingContainer}>
        <Banner />
      </Container>
      <Container mt="xl" className={classes.landingContainer}>
        <Title order={1}>Categories</Title>
        <Grid justify="stretch" gutter="md">
          {categories}
        </Grid>
      </Container>
      <Container mt="xl" className={classes.landingContainer}>
        <Title order={1}>New Products</Title>
        <Carousel align="start" slidesToScroll={1} containScroll="trimSnaps" slideGap="lg">
          {newProducts}
        </Carousel>
      </Container>
      <Container mt="xl" className={classes.landingContainer}>
        <Newsletter />
      </Container>
    </AppShell>
  );
}

export default Landing;
