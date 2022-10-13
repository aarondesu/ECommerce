import {
  Grid, Stack, Title, Group, Anchor, Box,
} from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandTumblr,
} from '@tabler/icons';

import useStyles from './Socials.styles';

const Socials = () => {
  const { classes } = useStyles();

  return (
    <Grid.Col span="content">
      <Box className={classes.container}>
        <Stack spacing="xs">
          <Title order={6}>FOLLOW US</Title>
          <Group spacing="xs">
            <Anchor>
              <IconBrandTwitter />
            </Anchor>
            <Anchor>
              <IconBrandFacebook />
            </Anchor>
            <Anchor>
              <IconBrandInstagram />
            </Anchor>
            <Anchor>
              <IconBrandDiscord />
            </Anchor>
            <Anchor>
              <IconBrandTumblr />
            </Anchor>
          </Group>
        </Stack>
      </Box>
    </Grid.Col>
  );
};

export default Socials;
