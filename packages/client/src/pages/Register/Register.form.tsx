/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import {
  Anchor,
  Stack,
  Checkbox,
  TextInput,
  PasswordInput,
  Popover,
  Text,
  Button,
  Title,
  Box,
  Progress,
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useId } from '@mantine/hooks';

import { useFormContext } from './Register.formContext';
import useStyles from './Register.styles';

const PasswordRequirement = ({ meets, label }: { meets: boolean; label: string }) => (
  <Text
    color={meets ? 'teal' : 'red'}
    sx={{ display: 'flex', alignItems: 'center' }}
    mt={7}
    size="sm"
  >
    {meets ? <IconCheck size={14} /> : <IconX size={14} />}
    {' '}
    <Box ml={10}>{label}</Box>
  </Text>
);

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

const getStrength = (password: string) => {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
};

interface FormProps {
  handleForm: () => void;
  setTerms: (args: boolean) => void;
  terms: boolean;
  loading: boolean;
}

const RegisterForm = ({
  handleForm, terms, loading, setTerms,
}: FormProps) => {
  const { classes } = useStyles();
  const form = useFormContext();
  const [showGuide, setShowGuide] = useState(false);

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
  );
};

export default RegisterForm;
