import { useState } from 'react';
import {
  AppShell,
  Box,
  Image,
  Text,
  Stack,
  Group,
  Grid,
  Select,
  Button,
  Title,
  NumberInput,
  ActionIcon,
  Badge,
  Divider,
  Container,
  Pagination,
  Center,
} from '@mantine/core';
import { useMediaQuery, useCounter } from '@mantine/hooks';
import { IconTag } from '@tabler/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Rating from '../../components/Rating';
import Review from '../../components/Review';

import useStyles from './Product.styles';

const reviewData = [
  {
    userId: 12341231,
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    userId: 5325,
    rating: 10,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    userId: 124124,
    rating: 3,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    userId: 4324,
    rating: 6,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    userId: 64232134,
    rating: 8,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    userId: 12314,
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    userId: 512,
    rating: 8,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    userId: 211234,
    rating: 2,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    userId: 2545,
    rating: 1,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
];

const productData = {
  name: 'Product Name',
  rating: 10,
  description:
    "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: '$150',
};

function Product() {
  const { classes } = useStyles();

  const [page, setPage] = useState(1);
  const [color, setColor] = useState('white');
  const [size, setSize] = useState('s');
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  const smallScreen = useMediaQuery('(min-width:320px) and (max-width:425px)');

  const reviews = reviewData.map((review) => (
    <Review
      key={review.userId}
      userId={review.userId}
      rating={review.rating}
      review={review.review}
    />
  ));

  return (
    <AppShell
      fixed={false}
      header={<Header />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          minWidth: 425,
          backgroundColor: theme.colors.gray[2],
        },
      })}
    >
      <Container>
        <Box className={classes.productContainer}>
          <Grid className={classes.infoContainer} gutter="lg" grow>
            <Grid.Col span="auto">
              <Image
                src="https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png"
                fit="contain"
                width={smallScreen ? 300 : 450}
                height={smallScreen ? 600 : 750}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack spacing="lg">
                <Title order={1}>{productData.name}</Title>

                <Group spacing="lg">
                  <Rating size={32} score={productData.rating} color="none" outline="black" />
                  <Badge size="lg">1000 Reviews</Badge>
                </Group>

                <Text className={classes.description}>{productData.description}</Text>

                <Group spacing="sm">
                  <IconTag fill="black" color="black" size={32} />
                  <Text weight={700} size={32}>
                    {productData.price}
                  </Text>
                </Group>

                <Divider my="sm" size="lg" />

                <Group spacing="lg">
                  <Select
                    label="Color"
                    value={color}
                    onChange={(value) => setColor(value)}
                    data={[
                      { value: 'blue', label: 'Blue' },
                      { value: 'black', label: 'Black' },
                      { value: 'white', label: 'White' },
                    ]}
                    defaultValue="white"
                  />

                  <Select
                    className={classes.sizeInput}
                    label="Size"
                    value={size}
                    onChange={(value) => setSize(value)}
                    data={[
                      { value: 'xs', label: 'XS' },
                      { value: 's', label: 'S' },
                      { value: 'm', label: 'M' },
                      { value: 'l', label: 'L' },
                      { value: 'xl', label: 'XL' },
                      { value: 'xxl', label: 'XXL' },
                    ]}
                    defaultValue="md"
                  />
                </Group>

                <Group spacing="lg">
                  <Group spacing={5}>
                    <ActionIcon variant="filled" size={36} onClick={handlers.decrement}>
                      -
                    </ActionIcon>
                    <NumberInput className={classes.quantitiyInput} hideControls value={count} />
                    <ActionIcon variant="filled" size={36} onClick={handlers.increment}>
                      +
                    </ActionIcon>
                  </Group>
                  <Button variant="filled" color="blue">
                    Add to Cart
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Box>
        <Box mt="xl">
          <Title order={1}>Reviews</Title>

          <Stack mt="sm" spacing="xs">
            <Center>
              <Pagination page={page} onChange={setPage} total={10} />
            </Center>
            {reviews}
            <Center>
              <Pagination page={page} onChange={setPage} total={10} />
            </Center>
          </Stack>
        </Box>
      </Container>
    </AppShell>
  );
}

export default Product;
