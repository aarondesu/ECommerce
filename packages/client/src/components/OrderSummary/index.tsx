import {
  Button, Stack, Table, Title, Text,
} from '@mantine/core';

import useStyles from './OrderSummary.styles';

const OrderSummary = () => {
  const { classes } = useStyles();

  return (
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
      <Button fullWidth size="md" color="dark">
        Checkout
      </Button>
    </Stack>
  );
};

export default OrderSummary;
