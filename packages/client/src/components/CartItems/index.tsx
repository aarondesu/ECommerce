import {
  Group, NumberInput, Stack, Table, Text, Image, Title,
} from '@mantine/core';
import React from 'react';
import useStyles from './CartItems.styles';

export interface CartItem {
  id: string;
  name: string;
  size: string;
  imgUrl: string;
  qty: number;
  price: number;
}

interface CartItemsProps {
  items: CartItem[];
}

const CartItems = ({ items }: CartItemsProps) => {
  const { classes } = useStyles();

  let rows: React.ReactNode;
  if (items.length !== 0) {
    rows = items.map((data) => {
      const total = data.qty * data.price;
      return (
        <tr key={data.id}>
          <td>
            <Group>
              <Image src={data.imgUrl} width={100} height={100} />
              <Stack spacing="xs">
                <Text>
                  <b>Product:</b>
                  {' '}
                  {data.name}
                </Text>
                <Text>
                  <b>ID:</b>
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
  } else {
    rows = (
      <tr>
        <td>
          <Title order={6}>No items added</Title>
        </td>
      </tr>
    );
  }

  return (
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
  );
};

export default CartItems;
