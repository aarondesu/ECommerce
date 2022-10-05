import {
  Button, Center, Container, Image, Stack,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import img from '../../assets/imgs/404.jpg';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Center>
        <Stack spacing="xs" align="center">
          <Image src={img} />
          <Button onClick={() => navigate(-1)} variant="outline" size="xs">
            Go Back
          </Button>
        </Stack>
      </Center>
    </Container>
  );
};

export default Page404;
