import {
  Title, Avatar, Group, Center, Switch, Button, Text,
} from '@mantine/core';
import {
  IconEye, IconEdit, IconEraser, IconCurrencyDollar,
} from '@tabler/icons';
import { ProductsResponse, Product } from '../../redux/api/products.api';
import DataLoader from '../DataLoader';

interface ProductListDataProps {
  isLoading: boolean;
  data: ProductsResponse;
  toggleAvailable: (arg0:Product, arg1:boolean) => void;
  deleteProduct: (arg0:Product) => void;
}

const ProductListData = ({
  isLoading, data, toggleAvailable, deleteProduct,
} : ProductListDataProps) => {
  // Check if data is loading for the first time
  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan={10}>
            <DataLoader />
          </td>
        </tr>
      </tbody>
    );
  }

  if (!data || data.products.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={10}>
            <Center p="md">
              <Title order={4}>No result</Title>
            </Center>
          </td>
        </tr>
      </tbody>
    );
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
              <Center>
                <Group spacing="xs">
                  <IconCurrencyDollar stroke={1} size={18} />
                  <Text align="center">{product.price}</Text>
                </Group>
              </Center>
            </td>
            <td>
              <Center>
                <Switch
                  defaultChecked={product.isAvailable}
                  onChange={(e) => toggleAvailable(product, e.currentTarget.checked)}
                />
              </Center>
            </td>
            <td>
              <Center>
                <Button.Group>
                  <Button leftIcon={<IconEye size={18} stroke={1} />} variant="default" compact>
                    View
                  </Button>
                  <Button leftIcon={<IconEdit size={18} stroke={1} />} variant="default" compact>
                    Edit
                  </Button>
                  <Button
                    leftIcon={<IconEraser size={18} stroke={1} />}
                    variant="default"
                    compact
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </Button>
                </Button.Group>
              </Center>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default ProductListData;
