import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    width: 300,
    height: 300,
    padding: 10,
    position: 'relative',
    backgroundColor: 'white',
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
    transition: 'opacity 2s linear ease-in',
  },
  center: {
    verticalAlign: 'center',
    width: '100%',
    height: '100%',
  },
}));
