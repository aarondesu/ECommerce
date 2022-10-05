import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    maxWidth: 1400,
  },
  cartContainer: {
    padding: theme.spacing.lg,
    backgroundColor: 'white',
    display: 'felx',

    '@media (min-width: 1441px)': {
      width: 1400,
    },
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
