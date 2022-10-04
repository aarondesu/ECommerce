import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  carousel: {
    '@media (max-wdith: 1000px)': {
      height: 500,
    },

    '@media (max-wdith: 1500px)': {
      height: 600,
    },
  },
  banner: {
    height: '100%',
  },
  title: {
    fontSize: 42,
  },
  description: {
    margin: 0,
    fontSize: 16,
  },
  descriptioNContainer: {
    backgroundColor: theme.colors.dark[8],
    color: theme.colors.cyan[1],
    opacity: 0.6,
    padding: 30,
    verticalAlign: 'center',
  },
}));
