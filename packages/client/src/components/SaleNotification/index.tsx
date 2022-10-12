import {
  Box, Center, Button, Text, Group,
} from '@mantine/core';

import useStyles from './SaleNotification.syles';

interface SaleNotificationProps {
  text: string;
  show: boolean;
}

const SaleNotification = ({ text, show }: SaleNotificationProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.notification} p="xs" style={{ display: show ? 'block' : 'none' }}>
      <Center>
        <Group>
          <Text size="xs">{text}</Text>
          <Button size="xs" compact uppercase variant="default">
            Shop now!
          </Button>
        </Group>
      </Center>
    </Box>
  );
};

export default SaleNotification;
