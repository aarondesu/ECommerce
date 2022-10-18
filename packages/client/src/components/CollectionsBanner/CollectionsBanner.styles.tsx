import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: 1400,
  },
  backdrop: {
    backgroundColor: theme.colors.gray[4],
  },
  collection: {
    height: 500,
    position: 'relative',
  },
  collectionContent: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 50,
    right: 50,
    color: 'white',

    '> *': {
      marginTop: theme.spacing.md,
      flexGrow: 0,
    },
  },
}));

export default useStyles;
