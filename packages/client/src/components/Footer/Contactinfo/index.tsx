import {
  Grid, Title, Stack, Group, Text,
} from '@mantine/core';
import { IconInbox, IconPhone, IconDeviceMobile } from '@tabler/icons';

const ContactInfo = () => (
  <Grid.Col span="content">
    <Title order={6}>CONTACT US</Title>
    <Stack spacing={8} mt={6}>
      <Group spacing="xs">
        <IconInbox color="cyan" size={14} />
        <Text size="xs" color="cyan">
          myshop@email.com
        </Text>
      </Group>
      <Group spacing="xs">
        <IconPhone color="cyan" size={14} />
        <Text size="xs" color="cyan">
          8123-4567
        </Text>
      </Group>
      <Group spacing="xs">
        <IconDeviceMobile color="cyan" size={14} />
        <Text size="xs" color="cyan">
          +63 927 1234 567
        </Text>
      </Group>
    </Stack>
  </Grid.Col>
);

export default ContactInfo;
