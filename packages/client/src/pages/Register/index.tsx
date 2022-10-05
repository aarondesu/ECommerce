import {
  Anchor,
  AppShell,
  Box,
  Button,
  Center,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import useStyles from './Register.styles';
import background from '../../assets/imgs/background.jpg';

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
];

function Register() {
  const { classes } = useStyles();

  return (
    <AppShell
      styles={{
        main: {
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
      }}
    >
      <Center className={classes.center}>
        <Box className={classes.container}>
          <Stack spacing="xl">
            <Title order={2}>Create an Account</Title>
            <Group grow>
              <TextInput className={classes.input} placeholder="First Name" />
              <TextInput className={classes.input} placeholder="Last Name" />
            </Group>
            <Group grow>
              <TextInput className={classes.input} placeholder="Username" />
              <TextInput className={classes.input} placeholder="Email Address" />
            </Group>
            <Group grow>
              <PasswordInput className={classes.input} withAsterisk placeholder="Password" />
              <PasswordInput
                className={classes.input}
                withAsterisk
                placeholder="Confirm Password"
              />
            </Group>
            <Checkbox size="md" label={<>By accepting, I agree to the Terms and Conditions</>} />
            <Button variant="filled" size="lg">
              Register
            </Button>

            <Text>
              Already have an account?
              {' '}
              <Anchor component={Link} to="/account/login">
                {' '}
                Sign in
              </Anchor>
            </Text>
          </Stack>
        </Box>
      </Center>
    </AppShell>
  );
}

export default Register;
