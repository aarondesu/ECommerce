/* eslint-disable no-param-reassign */
import { Box, Tooltip } from '@mantine/core';
import { IconStar, IconStarHalf } from '@tabler/icons';

import useStyles from './Rating.styles';

interface RatingParams {
  score: number;
  size: number;
}

function Rating({ score, size = 16 }: RatingParams) {
  const { classes } = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let stars = [...Array(score)].map((star, index) => {
    index += 1;

    if (index !== score) {
      if (index % 2 !== 0) return false;

      return <IconStar key={index} className={classes.stars} fill="yellow" color="yellow" size={size} />;
    }
    if (index % 2 === 0) {
      return <IconStar key={index} className={classes.stars} fill="yellow" color="yellow" size={size} />;
    }
    return <IconStarHalf key={index} className={classes.stars} fill="yellow" color="yellow" size={size} />;
  });

  if (score === 0) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    stars = [...Array(5)].map((star, index) => (
      <IconStar key={index} className={classes.stars} color="gray" size={size} />
    ));
  }

  return (
    <Tooltip label={`Rating: ${score}/10`}>
      <Box className={classes.container}>{stars}</Box>
    </Tooltip>
  );
}

export default Rating;
