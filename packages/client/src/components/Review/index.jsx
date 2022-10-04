import { Box, Text } from '@mantine/core';
import Rating from '../Rating';

import useStyles from './Review.styles';

/**
 * Review Component
 * TODO: Search user based on userId
 * @param {*} param0
 */
const Review = ({ classNames, className, styles, userId, rating, review }) => {
  const { classes, cx } = useStyles(
    {},
    {
      name: 'ReviewComponent',
      classNames,
      styles,
    },
  );

  return (
    <Box className={cx(classes.reviewContainer, className)}>
      <Box className={classes.reviewUser}>
        <Rating score={rating} />
        <Text>
          by <b>PH Name</b>
        </Text>
      </Box>
      <Box className={classes.reviewDescription} mt="sm">
        {review}
      </Box>
    </Box>
  );
};

export default Review;
