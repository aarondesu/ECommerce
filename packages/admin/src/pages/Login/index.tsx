/* eslint-disable no-console */
import {
  Box, Button, Center, PasswordInput, Stack, TextInput, Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/api/auth.api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCredentials } from '../../redux/slice/authSlice';

interface LoginForm {
  username:string;
  password:string;
}

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, token } = useAppSelector((state) => state.authReducer);

  const form = useForm<LoginForm>({
    initialValues: {
      username: '',
      password: '',
    },
  });

  const handleForm = (values:LoginForm) => {
    const result = login({
      username: values.username,
      password: values.password,
    }).unwrap();

    result.then((data) => {
      dispatch(setCredentials(data));
      navigate('/');
    }).catch(() => {
      form.setFieldError('username', 'Invalid User Credentials');
    });
  };

  useEffect(() => {
    // Check if already logged in
    if (user && token) {
      navigate('/');
    }
  }, []);

  return (
    <Center style={{ height: '100vh' }}>
      <Box>
        <Title order={2} weight={900}>myShopAdmin</Title>
        <form onSubmit={form.onSubmit(handleForm)}>
          <Stack mt="md">
            <TextInput placeholder="Username" {...form.getInputProps('username')} />
            <PasswordInput placeholder="Password" {...form.getInputProps('password')} />
            <Button type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
