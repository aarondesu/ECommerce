import {
  BackgroundImage, Box, Button, Container, Title,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import useStyles from './CollectionsBanner.styles';

interface BannerProps {
  id: string;
  imgUrl: string;
  title: string;
}

const dummy: BannerProps[] = [
  {
    id: 'propId1',
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/summer_banner.jpg',
    title: 'SUMMER COLLECTION',
  },
  {
    id: 'propid2',
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/winter_fashion.jpg?t=2022-10-15T04%3A12%3A03.432Z',
    title: 'WINTER COLLECTION',
  },
  {
    id: 'propId3',
    imgUrl:
      'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/spring_banner.jpg?t=2022-10-15T04%3A16%3A29.054Z',
    title: 'SPRING COLLECTION',
  },
];

const CollectionsBanner = () => {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const slides = dummy.map((banner) => (
    <Carousel.Slide key={banner.id}>
      <BackgroundImage src={banner.imgUrl}>
        <Box className={classes.collection}>
          <Box className={classes.collectionContent}>
            <Title order={1}>{banner.title}</Title>
            <Button variant="default" size="lg">
              View
            </Button>
          </Box>
        </Box>
      </BackgroundImage>
    </Carousel.Slide>
  ));

  return (
    <Container fluid className={classes.container}>
      <Carousel
        loop
        withIndicators
        withControls={false}
        draggable={false}
        height={500}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          indicator: {
            width: 12,
            height: 12,
            borderRadius: 10,
          },
        }}
      >
        {slides}
      </Carousel>
    </Container>
  );
};

export default CollectionsBanner;
