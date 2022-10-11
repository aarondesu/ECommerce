/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Anchor,
  AppShell,
  Box,
  Breadcrumbs,
  Button,
  Center,
  Checkbox,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Overlay,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDocumentTitle, useId } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';

import useStyles from './Login.styles';
import background from '../../assets/imgs/background.jpg';
import { APIError } from '../../interfaces/api.interface';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCredentials } from '../../redux/reducers/auth.reducer';
import { LoginRequest, useLoginMutation } from '../../redux/api/auth.api';

const Login = () => {
  const { classes } = useStyles();
  useDocumentTitle('Sign In');

  const [loading, setLoading] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const uId = useAppSelector((state) => state.authReducer.id);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (value.length < 4 ? 'Username must be 6 in length' : null),
      password: (value) => (value.length < 6 ? 'Password must be 6 in lenght' : null),
    },
  });

  useEffect(() => {
    if (uId !== '') {
      setLoading(false);
      navigate('/');
    }
  }, [uId]);

  const handleSubmit = (): void => {
    setLoading(true);
    const result = login({ ...form.values } as LoginRequest).unwrap();

    result
      .then(({ user }) => {
        dispatch(setCredentials(user));
      })
      .catch((error) => {
        setLoading(false);
        const { data } = error as APIError;

        showNotification({
          title: 'failed to login',
          message: data,
        });
      });

    return null;
  };

  const links = [
    { label: 'Register', href: '/account/register' },
    { label: 'Forgot Password', href: '/account/forgot' },
  ].map((item) => (
    <Anchor component={Link} to={item.href} key={useId()}>
      {item.label}
    </Anchor>
  ));

  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.cyan[1],
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
      })}
    >
      <Center className={classes.center}>
        <Box className={classes.container}>
          {loading && <Overlay opacity={0.5} color="#000" blur={2} />}
          <form onSubmit={form.onSubmit(() => handleSubmit())}>
            <Stack spacing="xl">
              <Title order={2}>Sign In</Title>
              <TextInput
                className={classes.input}
                placeholder="Username"
                {...form.getInputProps('username')}
              />
              <PasswordInput
                className={classes.input}
                placeholder="Password"
                {...form.getInputProps('password')}
              />
              <Checkbox label="Keep me signed in" />
              <Button variant="filled" type="submit">
                Login
              </Button>
              <Breadcrumbs style={{ textAlign: 'center' }}>{links}</Breadcrumbs>
            </Stack>
          </form>
        </Box>
      </Center>
    </AppShell>
  );
};

export default Login;
