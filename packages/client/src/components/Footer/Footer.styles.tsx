import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.dark[5],
    color: theme.colors.gray[2],
    minWidth: 425,
  },
  links: {},
  copyright: {
    minWidth: 425,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.dark[7],
    fontSize: 10,
    color: 'white',
  },
  poBox: {
    width: 100,
    wordBreak: 'break-word',
  },
}));
