import { Box, Text } from '@mantine/core';
import Rating from '../Rating';

import useStyles from './Review.styles';

interface ReviewProps {
  userId: number;
  rating: number;
  review: string;
}

function Review({ userId, rating, review }: ReviewProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.reviewContainer}>
      <Box className={classes.reviewUser}>
        <Rating score={rating} size={24} />
        <Text>
          by
          {' '}
          <b>PH Name</b>
        </Text>
      </Box>
      <Box className={classes.reviewDescription} mt="sm">
        {review}
      </Box>
    </Box>
  );
}

export default Review;
