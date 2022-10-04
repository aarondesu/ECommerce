import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    maxWidth: 1400,
  },
  productContainer: {
    backgroundColor: 'white',
    padding: theme.spacing.lg,
  },
  infoContainer: {
    maxWidth: 1400,
  },
  sizeInput: {
    width: 74,
    textAlign: 'center',
  },
  quantitiyInput: {
    width: 42,
    textAlign: 'center',
  },
  reviewContainer: {
    backgroundColor: 'white',
    padding: theme.spacing.md,
  },
  reviewUser: {},
  reviewDescription: {
    fontSize: 14,
  },
  relatedContainer: {
    backgroundColor: 'white',
    padding: theme.spacing.md,
  },
}));
