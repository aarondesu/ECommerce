import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  banner: {
    height: 600,
    position: 'relative',
  },
  bannerdesc: {
    width: 400,
    position: 'absolute',
    padding: theme.spacing.md,
    left: 30,
    bottom: 30,
    userSelect: 'none',
  },
}));

export default useStyles;
