import {
  Box,
  Center, Loader, Title,
} from '@mantine/core';

const DataLoader = () => (
  <Center p="xl">
    <Box style={{ textAlign: 'center', justifyContent: 'center' }}>
      <Title order={6} weight={900}>
        LOADING RESULTS
      </Title>
      <Loader mt="md" color="dark" variant="dots" size="md" />
    </Box>
  </Center>
);

export default DataLoader;
