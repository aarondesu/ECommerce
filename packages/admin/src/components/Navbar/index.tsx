import {
  Navbar, NavLink, Text, Box, ScrollArea,
} from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { useId } from '@mantine/hooks';

import Links from './links';

const AdminNavbar = () => {
  const location = useLocation();

  const navlinks = Links.map((category) => (
    <Box key={useId()} mt="md">
      <Text weight={700} color="gray" px="xs">{category.name}</Text>
      {category.links
      && category.links.map((item) => (
        <NavLink
          key={useId()}
          label={item.label}
          icon={item.icon && <item.icon size={20} stroke={1} />}
          component={Link}
          to={item.path}
          active={location.pathname === item.path}
          variant="filled"
        />
      ))}
    </Box>
  ));

  return (
    <Navbar width={{ base: 200 }}>
      <Navbar.Section component={ScrollArea} grow>{navlinks}</Navbar.Section>
    </Navbar>
  );
};

export default AdminNavbar;
