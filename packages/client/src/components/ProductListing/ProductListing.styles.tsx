import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    width: 300,
    height: 300,
    padding: 10,
    position: 'relative',
    backgroundColor: theme.colors.cyan[1],
    userSelect: 'none',
  },
  overlay: {
    width: 300,
    height: 300,
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.colors.dark[8],
    opacity: 0.8,
    verticalAlign: 'center',
  },
  center: {
    verticalAlign: 'center',
    width: '100%',
    height: '100%',
  },
}));
