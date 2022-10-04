import { Box, Paper, Title } from '@mantine/core';

import useStyles, { CategoryCardParams } from './CategoryCard.styles';

const CategoryCard = ({ className, classNames, styles, id, name, imgUrl } = CategoryCardParams) => {
  const { classes, cx } = useStyles(
    { imgUrl },
    {
      name: 'CategoryCardComponent',
      classNames,
      styles,
    },
  );

  return (
    <Paper className={cx(classes.card, className)} component="a" href={`/category/${id}`}>
      <Box className={classes.textHolder}>
        <Title order={2} className={classes.category}>
          {name}
        </Title>
      </Box>
    </Paper>
  );
};

export default CategoryCard;
