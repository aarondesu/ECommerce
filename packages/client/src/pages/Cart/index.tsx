import {
  AppShell,
  Box,
  Button,
  Grid,
  Group,
  Image,
  NumberInput,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import useStyles from './Cart.styles';

const tableData = [
  {
    id: 1,
    item: 'Item 1',
    size: 'xs',
    img: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    qty: 1,
    price: 150,
  },
  {
    id: 2,
    item: 'Item 2',
    size: 's',
    img: 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png',
    qty: 2,
    price: 25,
  },
];

function Cart() {
  const { classes } = useStyles();

  const rows = tableData.map((data) => {
    const total = data.qty * data.price;

    return (
      <tr key={data.id}>
        <td>
          <Group>
            <Image src={data.img} width={100} height={100} />
            <Stack spacing="xs">
              <Text>
                <b>Product Name:</b>
                {' '}
                {data.item}
              </Text>
              <Text>
                <b>Product ID:</b>
                {' '}
                {data.id}
              </Text>
              <Text>
                <b>Size:</b>
                {' '}
                {data.size}
              </Text>
            </Stack>
          </Group>
        </td>
        <td className={classes.itemQuantity}>
          <Group spacing="xs">
            <NumberInput defaultValue={data.qty} min={1} />
          </Group>
        </td>
        <td className={classes.itemTotal}>
          $
          {total}
        </td>
      </tr>
    );
  });

  return (
    <AppShell
      fixed={false}
      header={<Header />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.cyan[1],
          minWidth: 425,

          '@media (min-width: 1441px)': {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          },
        },
      })}
    >
      <Box className={classes.container}>
        <Stack spacing="lg">
          <Box className={classes.cartContainer}>
            <Stack spacing="lg">
              <Group grow position="apart">
                <Group>
                  <IconShoppingCart size={32} />
                  <Title order={2}>Your Cart</Title>
                </Group>

                <Group position="right">
                  <Button variant="default">Continue Shopping</Button>
                </Group>
              </Group>

              <Grid grow gutter="xl">
                <Grid.Col span={7}>
                  <Table striped highlightOnHover verticalSpacing="md">
                    <thead>
                      <tr>
                        <th className={classes.itemDetails}>Item</th>
                        <th className={classes.itemQuantity} style={{ textAlign: 'center' }}>
                          Qty
                        </th>
                        <th className={classes.itemTotal} style={{ textAlign: 'center' }}>
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                  </Table>
                </Grid.Col>
                <Grid.Col span="content">
                  <Stack spacing="md">
                    <Title order={3}>Summary</Title>
                    <Table striped verticalSpacing="xl">
                      <tbody>
                        <tr>
                          <td>
                            <Text weight={700}>Subtotal</Text>
                          </td>
                          <td>
                            <Text>$150</Text>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Text weight={700}>Shipping</Text>
                          </td>
                          <td>
                            <Text>$150</Text>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Text weight={700}>Discounts</Text>
                          </td>
                          <td>
                            <Text>$150</Text>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Text weight={700} size={24}>
                              Total
                            </Text>
                          </td>
                          <td>
                            <Text>$150</Text>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Button fullWidth size="md">
                      Checkout
                    </Button>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </AppShell>
  );
}

export default Cart;
