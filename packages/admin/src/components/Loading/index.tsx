import {
  Loader, Center, Title, Text, Box,
} from '@mantine/core';

import useStyles from './styles';

const Loading = () => {
  const { classes } = useStyles();

  return (
    <Center className={classes.center}>
      <Box className={classes.box}>
        <Title order={2} weight={900}>
          myshopAdmin
        </Title>
        <Text color="gray" weight={700} size="sm">
          Loading...
        </Text>
        <Loader variant="bars" color="dark" size="xl" />
      </Box>
    </Center>
  );
};

export default Loading;
