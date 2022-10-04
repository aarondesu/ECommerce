import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  center: {
    width: '100%',
    height: '100%',
  },
  container: {
    padding: theme.spacing.xl,
    backgroundColor: 'white',
    width: 650,
  },
  terms: {
    fontSize: 12,
    color: theme.colors.cyan[8],
  },
  input: {
    width: 400,

    '@media (min-width:320px) and (max-width:425px)': {
      width: 300,
      minWidth: 300,
    },
  },
}));
