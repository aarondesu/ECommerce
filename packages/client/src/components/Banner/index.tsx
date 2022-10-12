import {
  BackgroundImage, Box, Container, Title, Text, Group, Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import useStyles from './Banner.styles';

interface BannerProps {
  backgroundImg: string;
  header: string;
  desc: string;
}

const Banner = ({ backgroundImg, header, desc }: BannerProps) => {
  const { classes } = useStyles();

  return (
    <BackgroundImage src={backgroundImg}>
      <Container p="md" className={classes.banner}>
        <Box className={classes.bannerdesc}>
          <Title order={1} color="white">
            { header }
          </Title>
          <Text color="white" size="xs">
            { desc }
          </Text>
          <Group mt="xs">
            <Button size="lg" variant="default" component={Link} to="/products/123123">
              Shop Now
            </Button>
          </Group>
        </Box>
      </Container>
    </BackgroundImage>
  );
};

export default Banner;
