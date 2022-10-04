import { Box, Tooltip } from '@mantine/core';
import { IconStar, IconStarHalf } from '@tabler/icons';

import useStyles from './Rating.styles';

const Rating = ({ classNames, className, styles, score, size = 16 }) => {
  const { classes, cx } = useStyles(
    {},
    {
      name: 'RatingComponent',
      classNames,
      styles,
    },
  );

  let stars = [...Array(score)].map((star, index) => {
    index += 1;

    if (index !== score) {
      if (index % 2 !== 0) return false;

      return (
        <IconStar key={index} className={classes.stars} fill="yellow" color="yellow" size={size} />
      );
    } else {
      if (index % 2 === 0) {
        return (
          <IconStar
            key={index}
            className={classes.stars}
            fill="yellow"
            color="yellow"
            size={size}
          />
        );
      } else {
        return (
          <IconStarHalf
            key={index}
            className={classes.stars}
            fill="yellow"
            color="yellow"
            size={size}
          />
        );
      }
    }
  });

  if (score === 0)
    stars = [...Array(5)].map((stars, index) => {
      return <IconStar key={index} className={classes.stars} color="gray" size={size} />;
    });

  return (
    <Tooltip label={`Rating: ${score}/10`}>
      <Box className={cx(classes.container, className)}>{stars}</Box>
    </Tooltip>
  );
};

export default Rating;
