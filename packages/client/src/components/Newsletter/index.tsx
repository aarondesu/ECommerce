import {
  Stack,
  Center,
  Title,
  TextInput,
  Text,
  Box,
  ActionIcon,
  Container,
  MantineNumberSize,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMail, IconSend } from '@tabler/icons';

import useStyles from './Newsletter.styles';

const SendButton = ({ size }: { size: MantineNumberSize }) => (
  <ActionIcon size={size}>
    <IconSend />
  </ActionIcon>
);

const Newsletter = () => {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery('(min-width: 320px) and (max-width: 425px)');

  return (
    <Box className={classes.newsletter}>
      <Container>
        <Center className={classes.content}>
          <Stack spacing="md">
            <Center>
              <Title order={smallScreen ? 2 : 1}>Newsletter</Title>
            </Center>
            <Center>
              <Text size={smallScreen ? 'sm' : 'md'}>
                Get timely updates on your favorite products
              </Text>
            </Center>
            <TextInput
              className={classes.input}
              size={smallScreen ? 'xs' : 'sm'}
              placeholder="Enter Email Address..."
              icon={<IconMail size={22} />}
              rightSection={<SendButton size={smallScreen ? 'xs' : 'sm'} />}
            />
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default Newsletter;
