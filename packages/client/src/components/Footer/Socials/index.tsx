import {
  Grid, Stack, Title, Group, Anchor,
} from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandTumblr,
} from '@tabler/icons';

const Socials = () => (
  <Grid.Col span="content">
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
  </Grid.Col>
);

export default Socials;
