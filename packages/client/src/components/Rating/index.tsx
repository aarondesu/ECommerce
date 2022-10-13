/* eslint-disable no-param-reassign */
import { Box, Tooltip } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IconStar, IconStarHalf } from '@tabler/icons';

import useStyles from './Rating.styles';

interface RatingParams {
  score: number;
  size: number;
  color?: string;
  outline?: string;
}

function Rating({
  score, color = '', outline = 'black', size = 16,
}: RatingParams) {
  const { classes } = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let stars = [...Array(score)].map((_star, index) => {
    index += 1;

    if (index !== score) {
      if (index % 2 !== 0) return false;

      return (
        <IconStar
          key={useId()}
          className={classes.stars}
          fill={color}
          color={outline}
          size={size}
        />
      );
    }
    if (index % 2 === 0) {
      return (
        <IconStar
          key={useId()}
          className={classes.stars}
          fill={color}
          color={outline}
          size={size}
        />
      );
    }
    return (
      <IconStarHalf
        key={useId()}
        className={classes.stars}
        fill={color}
        color={outline}
        size={size}
      />
    );
  });

  if (score === 0) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    stars = [...Array(5)].map(() => (
      <IconStar key={useId()} className={classes.stars} color="gray" size={size} />
    ));
  }

  return (
    <Tooltip label={`Rating: ${score}/10`}>
      <Box className={classes.container}>{stars}</Box>
    </Tooltip>
  );
}

export default Rating;
