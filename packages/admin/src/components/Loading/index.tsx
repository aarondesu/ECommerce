import { Loader, Center } from '@mantine/core';

const Loading = () => (
  <Center style={{ height: '100vh' }}>
    <Loader variant="bars" color="dark" />
  </Center>
);

export default Loading;
