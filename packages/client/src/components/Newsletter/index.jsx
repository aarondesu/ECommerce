import { Stack, Center, Title, TextInput, Text, Box, ActionIcon } from '@mantine/core';
import { IconMail, IconSend } from '@tabler/icons';

import useStyles from './Newsletter.styles';

const SendButton = () => (
  <ActionIcon size="lg">
    <IconSend />
  </ActionIcon>
);

const Newsletter = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Center className={classes.content}>
        <Stack spacing="md">
          <Center>
            <Title>Newsletter</Title>
          </Center>
          <Center>
            <Text order={4}>Get timely updates on your favorite products</Text>
          </Center>
          <TextInput
            className={classes.input}
            size="md"
            placeholder="Enter Email Address..."
            icon={<IconMail />}
            rightSection={<SendButton />}
          />
        </Stack>
      </Center>
    </Box>
  );
};

export default Newsletter;
