import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  container: {
    backgroundColor: 'white',
  },
  itemDetails: {
    width: '80%',
  },
  itemQuantity: {
    width: 150,
    minWidth: 100,
    textAlign: 'center',
  },
  itemPrice: {
    width: 100,
    textAlign: 'center',
  },
  itemTotal: {
    width: 100,
    textAlign: 'center',
  },
}));
