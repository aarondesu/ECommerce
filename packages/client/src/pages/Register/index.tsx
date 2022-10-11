import {
  AppShell, Center, Box, LoadingOverlay,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCredentials } from '../../redux/reducers/auth.reducer';
import { useRegisterMutation, RegisterRequest } from '../../redux/api/auth.api';
import { APIError } from '../../interfaces/api.interface';
import { useForm, FormProvider } from './Register.formContext';
import RegisterForm from './Register.form';

import useStyles from './Register.styles';
import background from '../../assets/imgs/background.jpg';

const Register = () => {
  useDocumentTitle('Register');

  const { classes } = useStyles();

  const [register] = useRegisterMutation();
  const [loading, setLoading] = useState(false);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authReducer.user);

  const regexPassword = (value: string): string => {
    if (value.length < 6) return 'Password must be at least 6 characters';
    if (!/^.*[a-z].*$/.test(value)) return 'Password must have at least 1 lower case letter';
    if (!/^.*[A-Z].*$/.test(value)) return 'Password must have at least 1 upper case letter';
    if (!/^.*[0-9].*$/.test(value)) return 'Password must have at least 1 number';
    if (!/^.*[$&+,:;=?@#|'<>.^*()%!-].*$/.test(value)) return 'Password must have at least 1 special symbol';

    return null;
  };

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
      password: (value) => regexPassword(value),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
      firstName: (value) => (value.length < 2 ? 'First Name must have at least 2 letters' : null),
      lastName: (value) => (value.length < 2 ? 'Last Name must have at least 2 letters' : null),
    },
  });

  useEffect(() => {
    if (user !== null) {
      setLoading(false);
      navigate('/');
    }
  }, [user]);

  const handleForm = (): void => {
    if (form.values.termsOfService === false) {
      setTerms(true);
      return null;
    }

    setLoading(true);
    const result = register({ ...form.values } as RegisterRequest).unwrap();

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
          <LoadingOverlay color="#000" overlayBlur={2} visible={loading} />
          <FormProvider form={form}>
            <RegisterForm
              handleForm={handleForm}
              loading={loading}
              terms={terms}
              setTerms={setTerms}
            />
          </FormProvider>
        </Box>
      </Center>
    </AppShell>
  );
};

export default Register;
