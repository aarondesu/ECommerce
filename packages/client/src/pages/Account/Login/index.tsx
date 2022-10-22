/* eslint-disable no-console */
import {
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Anchor,
  Title,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
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

        const field = data.split(' ')[0];
        form.setFieldError(field.toLowerCase(), data);
      });

    return null;
  };

  return (
    <form onSubmit={form.onSubmit(() => handleSubmit())}>
      <Stack spacing="lg">
        <Title order={2}>SIGN IN</Title>
        <TextInput
          required
          className={classes.input}
          placeholder="Username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          required
          className={classes.input}
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <Checkbox size="sm" label={<>Keep me signed in</>} />
        <Button variant="filled" type="submit">
          Login
        </Button>
        <div style={{ textAlign: 'center' }}>
          <Text size="sm">
            Don&apos;t have an account yet?
            {' '}
            <Anchor component={Link} to="/account/register">
              Sign up
            </Anchor>
          </Text>
          <Text size="sm">
            Forgot account details?
            {' '}
            <Anchor>Click here</Anchor>
          </Text>
        </div>
      </Stack>
    </form>
  );
};

export default Login;
