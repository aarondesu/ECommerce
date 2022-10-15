import {
  AppShell, Box, Button, Grid, Group, Stack, Title, Container,
} from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import useStyles from './Cart.styles';
import OrderSummary from '../../components/OrderSummary';
import CartItems, { CartItem } from '../../components/CartItems';

const tableData: CartItem[] = [
  {
    id: '1',
    name: 'Item 1',
    size: 'xs',
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    qty: 1,
    price: 150,
  },
  {
    id: '2',
    name: 'Item 2',
    size: 's',
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    qty: 2,
    price: 25,
  },
];

function Cart() {
  const { classes } = useStyles();

  return (
    <AppShell
      fixed={false}
      header={<Header />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.gray[2],
        },
      })}
    >
      <Container className={classes.container} p="md">
        <Stack spacing="lg">
          <Group grow position="apart">
            <Group>
              <IconShoppingCart size={32} />
              <Title order={2}>YOUR CART</Title>
            </Group>

            <Group position="right">
              <Button variant="default">Continue Shopping</Button>
            </Group>
          </Group>

          <Grid grow gutter="xl">
            <Grid.Col span={7}>
              <CartItems items={tableData} />
            </Grid.Col>
            <Grid.Col span="content">
              <OrderSummary />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </AppShell>
  );
}

export default Cart;
