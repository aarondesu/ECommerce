/* eslint-disable no-nested-ternary */
import {
  Stack,
  Title,
  TextInput,
  Popover,
  PasswordInput,
  Progress,
  Checkbox,
  Button,
  Anchor,
  Text,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { useId } from '@mantine/hooks';
import { useState } from 'react';
import { RegisterRequest, useRegisterMutation } from '../../../redux/api/auth.api';
import { useAppDispatch } from '../../../redux/hooks';
import PasswordRequirement from '../../../components/PasswordRequirement';
import { setCredentials } from '../../../redux/reducers/auth.reducer';
import { APIError } from '../../../interfaces/api.interface';
import { useLoading } from '../index';

import Terms from '../../../components/Terms';
import useStyles from './Register.styles';

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

const regexPassword = (value: string): string => {
  if (value.length < 6) return 'Password must be at least 6 characters';
  if (!/^.*[a-z].*$/.test(value)) return 'Password must have at least 1 lower case letter';
  if (!/^.*[A-Z].*$/.test(value)) return 'Password must have at least 1 upper case letter';
  if (!/^.*[0-9].*$/.test(value)) return 'Password must have at least 1 number';
  if (!/^.*[$&+,:;=?@#|'<>.^*()%!-].*$/.test(value)) return 'Password must have at least 1 special symbol';

  return null;
};

const getStrength = (password: string) => {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
};

const Register = () => {
  const { classes } = useStyles();

  const { loading, setLoading } = useLoading();
  const [showModal, setShowModal] = useState(false);
  const [register] = useRegisterMutation();
  const [terms, setTerms] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
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
      password: (value) => regexPassword(value),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
      firstName: (value) => (value.length < 2 ? 'First Name must have at least 2 letters' : null),
      lastName: (value) => (value.length < 2 ? 'Last Name must have at least 2 letters' : null),
    },
  });

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

  const checks = requirements.map((requirement) => (
    <PasswordRequirement
      key={useId()}
      label={requirement.label}
      meets={requirement.re.test(form.values.password)}
    />
  ));

  const strength = getStrength(form.values.password);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <form onSubmit={form.onSubmit(() => handleForm())}>
      <Terms show={showModal} onClose={() => setShowModal(false)} />

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
        <Popover width={400} position="bottom" withArrow shadow="md" opened={showGuide}>
          <Popover.Target>
            <PasswordInput
              onFocusCapture={() => setShowGuide(true)}
              onBlurCapture={() => setShowGuide(false)}
              className={classes.input}
              withAsterisk
              placeholder="Password"
              {...form.getInputProps('password')}
            />
          </Popover.Target>
          <Popover.Dropdown>
            <Progress color={color} value={strength} size={5} mb="sm" />
            <PasswordRequirement
              label="Includes at least 6 characters"
              meets={form.values.password.length > 5}
            />
            {checks}
          </Popover.Dropdown>
        </Popover>
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
                  <Anchor
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <b>Terms and Conditions</b>
                  </Anchor>
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
          SIGN UP
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
  );
};

export default Register;
