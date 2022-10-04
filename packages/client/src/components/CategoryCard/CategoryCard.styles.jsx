import { createStyles } from '@mantine/core';

export const CategoryCardParams = {
  imgUrl: '',
};

export default createStyles((theme, { imgUrl } = CategoryCardParams) => ({
  card: {
    padding: 15,
    height: 300,
    width: 200,
    color: theme.colors.dark[8],
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',

    '@media (min-width:320px) and (max-width:480px)': {
      width: 170,
      height: 270,
    },

    '@media (min-width: 481px) and (max-width: 768px)': {
      width: 160,
      height: 260,
    },

    '@media (min-width: 769px) and (max-width: 1024px)': {
      width: 220,
      height: 320,
    },

    '@media (min-width: 1025px) and (max-width: 1200px)': {
      width: 150,
      height: 250,
    },

    '@media (min-width: 1201px)': {
      width: 250,
      height: 350,
    },
  },
  textHolder: {
    padding: 10,
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.cyan[5],
    opacity: 0.85,
  },
  category: {},
  button: {
    '@media (min-width: 1200px)': {},
  },
}));
