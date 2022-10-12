import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  banner: {
    height: 500,
    position: 'relative',
  },
  bannerdesc: {
    width: 400,
    position: 'absolute',
    padding: theme.spacing.md,
    left: 30,
    bottom: 30,
  },
}));

export default useStyles;
