import {
  ActionIcon,
  Group,
  Header,
  MediaQuery,
  Title,
  Burger,
  Drawer,
  TextInput,
  Box,
  NavLink,
  ThemeIcon,
} from '@mantine/core';
import {
  IconCashBanknote,
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconUserPlus,
} from '@tabler/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NavigationBasic from './Navigation.basic';
import useStyles from './Header.styles';
import { useAppSelector } from '../../redux/hooks';

function DrawerSearchButton() {
  return (
    <ActionIcon>
      <IconSearch size={18} />
    </ActionIcon>
  );
}

function SearchBarButton() {
  return <TextInput placeholder="Search Products..." rightSection={<DrawerSearchButton />} />;
}

function NavBar() {
  const { classes } = useStyles();

  const user = useAppSelector((state) => state.authReducer.user);

  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    // TODO
  }, [user]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size={250}
        padding="xl"
        position="right"
        title={<SearchBarButton />}
      >
        <Box>
          <NavLink
            label="Cart"
            component={Link}
            to="/account/cart"
            icon={<IconShoppingCart size={16} />}
          />
          <NavLink
            label="Sign In"
            component={Link}
            to="/account/login"
            icon={<IconUser size={16} />}
          />
          <NavLink
            label="Register"
            component={Link}
            to="/account/register"
            icon={<IconUserPlus size={16} />}
          />
        </Box>
      </Drawer>

      <Header className={classes.header} p="xs" px="lg" height={50}>
        <Group position="apart">
          <Group spacing="xs" position="left">
            <ThemeIcon size="lg">
              <IconCashBanknote />
            </ThemeIcon>
            <Title
              variant="gradient"
              gradient={{
                from: 'indigo',
                to: 'cyan',
                deg: 180,
              }}
              order={3}
            >
              MyEcommerce
            </Title>
          </Group>

          <MediaQuery query="(max-width: 700px)" styles={{ display: 'none' }}>
            <Group spacing="md" position="apart" grow>
              <Group spacing="md" position="right">
                <TextInput
                  className={classes.searchBar}
                  placeholder="Search Products..."
                  rightSection={<DrawerSearchButton />}
                  size="xs"
                />
                {user === null && <NavigationBasic />}
                <ActionIcon radius="xl" variant="filled" component={Link} to="/account/cart">
                  <IconShoppingCart size={18} />
                </ActionIcon>
              </Group>
            </Group>
          </MediaQuery>
          <MediaQuery query="(min-width: 700px)" styles={{ display: 'none' }}>
            <Group position="right">
              <Burger opened={opened} onClick={() => setOpened((o) => !o)} size={20} />
            </Group>
          </MediaQuery>
        </Group>
      </Header>
    </>
  );
}

export default NavBar;
