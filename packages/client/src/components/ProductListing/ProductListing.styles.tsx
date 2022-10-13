import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  container: {
    width: 200,
  },
  productName: {
    wordBreak: 'break-all',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
}));
