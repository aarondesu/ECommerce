import {
  Footer,
  Container,
  Group,
  Text,
  Stack,
  Divider,
  Anchor,
  Title,
  Center,
} from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons';

import useStyles from './Footer.styles';

function SiteFooter() {
  const { classes } = useStyles();

  return (
    <Footer className={classes.footer} withBorder={false} fixed={false} height={200} p="xs" px="sm">
      <Container>
        <Stack spacing="xl">
          <Group spacing="lg" position="apart">
            <Stack>
              <Title order={4}>MYSHOP</Title>
              <Text size="xs" weight={700}>
                Slogan
              </Text>
            </Stack>
            <Stack>
              <Anchor variant="text">Test</Anchor>
              <Anchor variant="text">Test</Anchor>
            </Stack>
            <Stack>
              <Anchor variant="text">Test</Anchor>
              <Anchor variant="text">Test</Anchor>
            </Stack>
            <Stack>
              <Anchor variant="text">Test</Anchor>
              <Anchor variant="text">Test</Anchor>
            </Stack>
          </Group>
          <Divider />
          <Center>
            <Stack>
              <Group>
                <IconBrandTwitter />
                <IconBrandFacebook />
                <IconBrandInstagram />
              </Group>
              <Text size="xs">All rights reserved</Text>
            </Stack>
          </Center>
        </Stack>
      </Container>
    </Footer>
  );
}

export default SiteFooter;
