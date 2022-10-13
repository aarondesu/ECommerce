import { Box, Container, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import useStyles from './NewProducts.styles';

const NewProducts = () => {
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.newProducts}>
      <Title order={2} style={{ textAlign: 'center' }}>
        Check New Listings
      </Title>
      <Carousel height={300}>
        <Carousel.Slide>
          <Box style={{ width: 800 }}>Test</Box>
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};

export default NewProducts;
