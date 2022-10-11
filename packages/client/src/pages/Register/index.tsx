/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Anchor,
  AppShell,
  Box,
  Button,
  Center,
  Checkbox,
  Overlay,
  PasswordInput,
  Popover,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';

import { useAppDispatch } from '../../redux/hooks';
import { setCredentials } from '../../redux/reducers/auth.reducer';
import { useRegisterMutation, RegisterRequest } from '../../redux/api/auth.api';
import { APIError } from '../../interfaces/api.interface';

import useStyles from './Register.styles';
import background from '../../assets/imgs/background.jpg';

/*
const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
];
*/

const Register = () => {
  useDocumentTitle('Register');

  const { classes } = useStyles();

  const [register, { isSuccess }] = useRegisterMutation();
  const [loading, setLoading] = useState(false);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      termsOfService: false,
    },
    validate: {
      username: (value) => (value.length < 4 ? 'Username must have at least 4 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid Email'),
      password: (value) => (value.length < 6 ? 'Password must have at least 6 in length' : null),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
      firstName: (value) => (value.length < 2 ? 'First Name must have at least 2 letters' : null),
      lastName: (value) => (value.length < 2 ? 'Last Name must have at least 2 letters' : null),
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setLoading(false);
      navigate('/');
    }
  }, [isSuccess]);

  const handleForm = (): void => {
    if (form.values.termsOfService === false) {
      setTerms(true);
      return null;
    }

    setLoading(true);
    const result = register({ ...form.values } as RegisterRequest).unwrap();

    result
      .then((user) => {
        dispatch(setCredentials(user.user));
      })
      .catch((error) => {
        setLoading(false);
        const { data } = error as APIError;
        const field = data.split(' ')[0];

        form.setFieldError(field.toLowerCase(), data);
      });

    return null;
  };

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
          {loading && <Overlay opacity={0.6} color="#000" zIndex={5} blur={2} />}
          <form onSubmit={form.onSubmit(() => handleForm())}>
            <Stack spacing="xl">
              <Title order={2}>Create an Account</Title>
              <TextInput
                className={classes.input}
                placeholder="Username"
                {...form.getInputProps('username')}
              />
              <TextInput
                className={classes.input}
                placeholder="Email Address"
                {...form.getInputProps('email')}
              />
              <TextInput
                className={classes.input}
                placeholder="First Name"
                {...form.getInputProps('firstName')}
              />
              <TextInput
                className={classes.input}
                placeholder="Last Name"
                {...form.getInputProps('lastName')}
              />
              <PasswordInput
                className={classes.input}
                withAsterisk
                placeholder="Password"
                {...form.getInputProps('password')}
              />
              <PasswordInput
                className={classes.input}
                withAsterisk
                placeholder="Confirm Password"
                {...form.getInputProps('confirmPassword')}
              />
              <Popover width={300} position="right-end" withArrow shadow="md" opened={terms}>
                <Popover.Target>
                  <Checkbox
                    size="xs"
                    label={(
                      <>
                        By accepting, I agree to the
                        {' '}
                        <b>Terms and Conditions</b>
                      </>
                    )}
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                  />
                </Popover.Target>
                <Popover.Dropdown onMouseOver={() => setTerms(false)}>
                  <Text>Please accept terms of service in order to continue.</Text>
                </Popover.Dropdown>
              </Popover>
              <Button variant="filled" type="submit" loading={loading}>
                Register
              </Button>
              <Text size="sm">
                Already have an account?
                {' '}
                <Anchor component={Link} to="/account/login">
                  {' '}
                  Sign in
                </Anchor>
              </Text>
            </Stack>
          </form>
        </Box>
      </Center>
    </AppShell>
  );
};

export default Register;
