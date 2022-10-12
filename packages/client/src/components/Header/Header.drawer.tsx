import {
  Drawer, Box, NavLink, ActionIcon, TextInput,
} from '@mantine/core';
import {
  IconShoppingCart, IconUser, IconUserPlus, IconSearch,
} from '@tabler/icons';
import { Link } from 'react-router-dom';

const SearchIconButton = () => (
  <ActionIcon>
    <IconSearch size={18} />
  </ActionIcon>
);

const SearchInput = () => (
  <TextInput placeholder="Search Products..." rightSection={<SearchIconButton />} />
);

interface Props {
  opened: boolean;
  setOpened: (arg: boolean) => void;
}

const headerDrawer = ({ opened, setOpened }: Props) => (
  <Drawer
    opened={opened}
    onClose={() => setOpened(false)}
    size={250}
    padding="xl"
    position="right"
    title={<SearchInput />}
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
);

export default headerDrawer;
