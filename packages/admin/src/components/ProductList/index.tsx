import {
  Avatar,
  Button,
  Center,
  Checkbox,
  CloseButton,
  Loader,
  Title,
  Text,
  Group,
}
  from '@mantine/core';
import { IconEye, IconTag } from '@tabler/icons';

import { ProductsResponse } from '../../redux/api/products.api';

interface ProductListProps {
  isFetching: boolean;
  data: ProductsResponse;
}

const ProductList = ({ isFetching, data } : ProductListProps) => {
  if (isFetching) {
    return (
      <tbody>
        <tr>
          <td colSpan={10}>
            <Center p="xl">
              <Loader size="xl" variant="dots" color="dark" />
            </Center>
          </td>
        </tr>
      </tbody>
    );
  }

  if (!data.products || data.products.length === 0) {
    <tbody>
      <tr>
        <td colSpan={10}>
          <Center p="xl">
            <Title order={4}>No results</Title>
          </Center>
        </td>
      </tr>
    </tbody>;
  }

  return (
    <tbody>
      {data.products
        && data.products.map((product) => (
          <tr key={product.id}>
            <td>
              <Avatar src={product.img} size="lg" />
            </td>
            <td>
              <Text weight={700} color="gray">
                {product.id}
              </Text>
            </td>
            <td>
              <Text>{product.name}</Text>
            </td>
            <td>
              <Group>
                <IconTag size={18} stroke={1} />
                <Text align="center">
                  $
                  {' '}
                  {product.price}
                </Text>
              </Group>
            </td>
            <td>
              <Center>
                <Checkbox defaultChecked={product.isAvailable} />
              </Center>
            </td>
            <td>
              <Center>
                <Button.Group>
                  <Button leftIcon={<IconEye size={18} stroke={1} />} variant="default" compact>
                    View
                  </Button>
                  <Button leftIcon={<IconEye size={18} stroke={1} />} variant="default" compact>
                    Edit
                  </Button>
                </Button.Group>
              </Center>
            </td>
            <td>
              <CloseButton />
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default ProductList;
