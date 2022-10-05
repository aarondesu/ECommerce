/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useRef } from 'react';

import { Carousel } from '@mantine/carousel';
import {
  BackgroundImage,
  Box,
  Button,
  Grid,
  Image,
  MediaQuery,
  Paper,
  Stack,
  Text,
  Title,
  DefaultProps,
} from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';

import useStyles from './Banner.styles';

const bannerData = [
  {
    id: 'banner1',
    title: 'Sale week!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, ex vitae mattis suscipit, metus nibh malesuada dolor, vel mollis justo ante ut eros. Duis.',
    imgUrl:
      'https://images.unsplash.com/photo-1657430796576-69599e4030bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 'banner2',
    title: 'Sale week 2!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, ex vitae mattis suscipit, metus nibh malesuada dolor, vel mollis justo ante ut eros. Duis.',
    imgUrl:
      'https://images.unsplash.com/photo-1660732437608-1e0b9ab69cda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  },
];

interface BannerProps extends DefaultProps {
  size?: number;
}

function Banner({ className, classNames, styles }: BannerProps) {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { classes, cx } = useStyles(undefined, {
    name: 'BannerComponent',
    classNames,
  });

  const banners = bannerData.map((banner) => (
    <Carousel.Slide key={banner.id}>
      <MediaQuery query="(max-width: 900px)" styles={{ display: 'none' }}>
        <Paper className={classes.banner}>
          <Grid gutter="xl">
            <Grid.Col span="content">
              <Image src={banner.imgUrl} width={400} height={500} fit="contain" />
            </Grid.Col>
            <Grid.Col span={6}>
              <Stack spacing="xl" align="flex-start" justify="center" style={{ height: '100%' }}>
                <Title order={1} size={48}>
                  {banner.title}
                </Title>
                <Text size={16} weight={700}>
                  {banner.text}
                </Text>
                <Button size="lg" variant="outline" color="dark">
                  Shop Now!
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Paper>
      </MediaQuery>
      <MediaQuery query="(min-width: 900px)" styles={{ display: 'none' }}>
        <Paper className={classes.banner}>
          <BackgroundImage
            src={banner.imgUrl}
            sx={{
              height: '100%',
              padding: 20,
            }}
          >
            <Box className={classes.descriptioNContainer}>
              <Stack spacing="xl" align="flex-start" justify="center" style={{ height: '100%' }}>
                <Title order={2} align="start">
                  {banner.title}
                </Title>
                <Text>{banner.text}</Text>
                <Button size="lg" variant="outline" color="cyan">
                  Shop Now!
                </Button>
              </Stack>
            </Box>
          </BackgroundImage>
        </Paper>
      </MediaQuery>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      className={cx(classes.carousel, className)}
      mx="auto"
      height={500}
      loop
      slidesToScroll={1}
      containScroll="trimSnaps"
      slideGap="xs"
      plugins={[autoplay.current]}
      onMouseOver={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      align="start"
    >
      {banners}
    </Carousel>
  );
}

export default Banner;
