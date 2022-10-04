import {
  Anchor,
  AppShell,
  Box,
  Breadcrumbs,
  Button,
  Center,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';

import useStyles from './Login.styles';
import background from '../../assets/imgs/background.jpg';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Register', href: '/account/register' },
  { label: 'Forgot Password', href: '/account/forgot' },
].map((item, index) => (
  <Anchor component={Link} to={item.href} key={index}>
    {item.label}
  </Anchor>
));

const Login = () => {
  const { classes } = useStyles();

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
          <Stack spacing="xl">
            <Title order={2}>Sign In</Title>
            <TextInput className={classes.input} placeholder="Username" />
            <PasswordInput className={classes.input} placeholder="Password" />
            <Checkbox label="Keep me signed in" />
            <Button variant="filled" size="lg">
              Login
            </Button>
            <Breadcrumbs style={{ textAlign: 'center' }}>{links}</Breadcrumbs>
          </Stack>
        </Box>
      </Center>
    </AppShell>
  );
};

export default Login;
