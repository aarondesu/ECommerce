import { Center, Footer, Text } from '@mantine/core';

const AdminFooter = () => (
  <Footer
    height={35}
    p="xs"
    sx={(theme) => ({
      backgroundColor: theme.colors.dark[4],
      color: 'white',
    })}
  >
    <Center>
      <Text size="xs">2022 &#169; Copyright. All rights Reserved</Text>
    </Center>
  </Footer>
);

export default AdminFooter;
