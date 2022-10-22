/* eslint-disable no-console */
import { useRouteError } from 'react-router-dom';
import {
  Container, Center, Title,
} from '@mantine/core';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Container>
      <Center style={{ height: '100vh' }}>
        <Title order={1}>Error</Title>
      </Center>
    </Container>
  );
};

export default ErrorPage;
