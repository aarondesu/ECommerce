/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react';
import {
  ActionIcon, Box, Center, Group, Image,
} from '@mantine/core';
import { IconShoppingCart, IconFileInfo } from '@tabler/icons';
import { Link } from 'react-router-dom';

import useStyles from './ProductListing.styles';

interface ProductListingProps {
  withBorder?: boolean;
  id: number;
  name: string;
  imgUrl: string;
  price?: number;
  score?: number;
  reviews?: number;
}

const ProductListing = ({ id, imgUrl }: ProductListingProps) => {
  const { classes } = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <Box
      className={classes.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Center className={classes.center}>
        <Image src={imgUrl} width={250} height={250} style={{ userSelect: 'none' }} />
      </Center>
      {hover && (
        <Box className={classes.overlay}>
          <Center className={classes.center}>
            <Group spacing="xs">
              <ActionIcon
                size="lg"
                radius="xl"
                variant="outline"
                color="cyan"
                component={Link}
                to={`/products/product/${id}`}
              >
                <IconFileInfo size={18} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                radius="xl"
                variant="outline"
                color="cyan"
                component={Link}
                to={`/products/product/${id}`}
              >
                <IconShoppingCart size={18} />
              </ActionIcon>
            </Group>
          </Center>
        </Box>
      )}
    </Box>
  );
};

export default ProductListing;
