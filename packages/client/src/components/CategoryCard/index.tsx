import { Box, Paper, Title } from '@mantine/core';

import useStyles from './CategoryCard.styles';

interface CategoryCardProps {
  id: number;
  name: string;
  imgUrl: string;
}

function CategoryCard({ id, name, imgUrl }: CategoryCardProps) {
  const { classes } = useStyles({ imgUrl });

  return (
    <Paper className={classes.card} component="a" href={`/category/${id}`}>
      <Box className={classes.textHolder}>
        <Title order={2} className={classes.category}>
          {name}
        </Title>
      </Box>
    </Paper>
  );
}

export default CategoryCard;
