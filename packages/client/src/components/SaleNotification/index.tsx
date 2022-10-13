import {
  Box, Center, Button, Text, Group, Transition,
} from '@mantine/core';

import useStyles from './SaleNotification.syles';

interface SaleNotificationProps {
  text: string;
  show: boolean;
}

const SaleNotification = ({ text, show }: SaleNotificationProps) => {
  const { classes } = useStyles();

  return (
    <Transition mounted={show} transition="scale-y" duration={5000}>
      {(styles) => (
        <Box className={classes.notification} p="xs" styles={styles}>
          <Center>
            <Group spacing="xs">
              <Text size="xs">{text}</Text>
              <Button size="xs" compact uppercase variant="outline" color="gray">
                Shop now!
              </Button>
            </Group>
          </Center>
        </Box>
      )}
    </Transition>
  );
};

export default SaleNotification;
