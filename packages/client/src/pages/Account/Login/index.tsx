/* eslint-disable no-console */
import {
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Breadcrumbs,
  Anchor,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useEffect, useId } from 'react';
import { Link } from 'react-router-dom';
import { APIError } from '../../../interfaces/api.interface';
import { LoginRequest, useLoginMutation } from '../../../redux/api/auth.api';
import { useAppDispatch } from '../../../redux/hooks';
import { setCredentials } from '../../../redux/reducers/auth.reducer';
import { useLoading } from '../index';

import useStyles from './Login.styles';

const Login = () => {
  const { classes } = useStyles();

  const { setLoading } = useLoading();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // TODO
  }, []);

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

  const handleSubmit = (): void => {
    setLoading(true);
    const result = login({ ...form.values } as LoginRequest).unwrap();

    result
      .then((response) => {
        dispatch(setCredentials(response));
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
        <Checkbox size="sm" label={<>Keep me signed in</>} />
        <Button variant="filled" type="submit">
          Login
        </Button>
        <Breadcrumbs style={{ textAlign: 'center' }}>{links}</Breadcrumbs>
      </Stack>
    </form>
  );
};

export default Login;
