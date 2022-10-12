import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  productContainer: {
    backgroundColor: 'white',
    padding: theme.spacing.lg,
  },
  description: {
    minHeight: 200,
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
