import {
  Grid, Title, Stack, Anchor,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const SiteLinks = () => (
  <Grid.Col span="content">
    <Title order={6}>SITE LINKS</Title>
    <Stack spacing={8} mt={6}>
      <Anchor size="xs" color="cyan" component={Link} to="/">
        Home
      </Anchor>
      <Anchor size="xs" color="cyan">
        Products
      </Anchor>
      <Anchor size="xs" color="cyan">
        About Us
      </Anchor>
      <Anchor size="xs" color="cyan">
        Contact Us
      </Anchor>
      <Anchor size="xs" color="cyan">
        Support
      </Anchor>
    </Stack>
  </Grid.Col>
);

export default SiteLinks;
