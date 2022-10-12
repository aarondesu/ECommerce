import {
  ActionIcon,
  Group,
  Header,
  MediaQuery,
  Title,
  Burger,
  TextInput,
  ThemeIcon,
  Container,
  Anchor,
} from '@mantine/core';
import { IconCashBanknote, IconSearch, IconShoppingCart } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderDrawer from './Header.drawer';
import useStyles from './Header.styles';
import { useAppSelector } from '../../redux/hooks';
import NavigationLoggedIn from './Navlinks.loggedin';
import NavigationLoggedOff from './Navlinks.loggedoff';
import SaleNotification from '../SaleNotification';

const SearchIcon = () => (
  <ActionIcon>
    <IconSearch size={18} />
  </ActionIcon>
);

interface HeaderProps {
  fixed?: boolean;
}

const NavBar = ({ fixed = false }: HeaderProps) => {
  const { classes } = useStyles();
  const user = useAppSelector((state) => state.authReducer.user);
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    // TODO
  }, [user]);

  return (
    <>
      <Header p="xs" height={50} fixed={fixed}>
        <HeaderDrawer opened={opened} setOpened={setOpened} />

        <Container>
          <Group position="apart">
            <Group spacing="xs" position="left">
              <ThemeIcon size="lg">
                <IconCashBanknote />
              </ThemeIcon>
              <Anchor variant="text" component={Link} to="/">
                <Title
                  variant="gradient"
                  gradient={{
                    from: 'indigo',
                    to: 'cyan',
                    deg: 180,
                  }}
                  order={3}
                >
                  MyShop
                </Title>
              </Anchor>
            </Group>

            <MediaQuery query="(max-width: 769px)" styles={{ display: 'none' }}>
              <Group spacing="md" position="apart" grow>
                <Group spacing="md" position="right">
                  <TextInput
                    className={classes.searchBar}
                    placeholder="Search Products..."
                    rightSection={<SearchIcon />}
                    size="xs"
                  />
                  {user === null ? <NavigationLoggedOff /> : <NavigationLoggedIn />}
                  <ActionIcon radius="xl" variant="filled" component={Link} to="/account/cart">
                    <IconShoppingCart size={18} />
                  </ActionIcon>
                </Group>
              </Group>
            </MediaQuery>
            <MediaQuery query="(min-width: 770px)" styles={{ display: 'none' }}>
              <Group position="right">
                <Burger opened={opened} onClick={() => setOpened((o) => !o)} size={20} />
              </Group>
            </MediaQuery>
          </Group>
        </Container>
      </Header>
      <SaleNotification text="Enjoy 50% off on everything!" show />
    </>
  );
};

export default NavBar;
