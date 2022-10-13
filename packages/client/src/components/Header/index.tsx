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
import { IconCashBanknote, IconSearch } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderDrawer from './Header.drawer';
import useStyles from './Header.styles';
import { useAppSelector } from '../../redux/hooks';
import NavigationLoggedIn from './Navlinks.loggedin';
import NavigationLoggedOff from './Navlinks.loggedoff';
import SaleNotification from '../SaleNotification';
import CartIcon from '../CartIcon';

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
  const [opened, setOpened] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // TODO
    setShow(true);
  }, [user]);

  return (
    <>
      <Header p="xs" height={50} fixed={fixed}>
        <HeaderDrawer opened={opened} setOpened={setOpened} />

        <Container>
          <Group position="apart">
            <Group spacing="xs" position="left">
              <ThemeIcon size="lg" color="dark">
                <IconCashBanknote />
              </ThemeIcon>
              <Anchor variant="text" component={Link} to="/">
                <Title variant="text" color="dark" order={3}>
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
                  <CartIcon items={5} />
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
      <SaleNotification text="Enjoy 50% off on everything!" show={show} />
    </>
  );
};

export default NavBar;
