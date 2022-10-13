import { ActionIcon, Indicator } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';
import { Link } from 'react-router-dom';

interface CartIconProps {
  items?: number;
}

const CartIcon = ({ items = 0 }: CartIconProps) => {
  const disabled = items === 0;
  let display = `${items}`;

  if (items > 99) display = '99+';

  return (
    <Indicator disabled={disabled} label={display} size={18} offset={4}>
      <ActionIcon variant="filled" color="gray" radius="xl" size="md" component={Link} to="/cart">
        <IconShoppingCart size={18} />
      </ActionIcon>
    </Indicator>
  );
};

export default CartIcon;
