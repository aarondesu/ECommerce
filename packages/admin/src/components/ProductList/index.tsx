import {
  Button, Group, Table, Pagination, Select, TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { openConfirmModal } from '@mantine/modals';
import { showNotification, updateNotification } from '@mantine/notifications';
import {
  IconAlertCircle, IconCircleCheck, IconCircleX, IconFilter,
} from '@tabler/icons';
import { useEffect, useState } from 'react';

import {
  Product, useFilterQuery, useUpdateMutation, useDeleteMutation,
} from '../../redux/api/products.api';
import ProductListData from '../ProductListData';

interface SearchValues {
  keyword: string;
  sort: string;
  order: string;
}

const ProductList = () => {
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);

  const [formValues, setFormValues] = useState<SearchValues>({
    keyword: '',
    sort: 'i',
    order: 'a',
  });

  const [updateProduct] = useUpdateMutation();
  const [deleteProduct] = useDeleteMutation();

  const form = useForm<SearchValues>({
    initialValues: {
      keyword: formValues.keyword,
      sort: formValues.sort,
      order: formValues.order,
    },
  });

  const {
    data, isSuccess, refetch, isLoading,
  } = useFilterQuery({
    page,
    keyword: formValues.keyword,
    sort: formValues.sort,
    order: formValues.order,
  });

  useEffect(() => {
    if (isSuccess) {
      setTotal(data.pages);
    }
  }, [isSuccess]);

  const handleForm = (values: SearchValues) => {
    setFormValues({
      keyword: values.keyword,
      sort: values.sort,
      order: values.order,
    });

    refetch();
  };

  const handleDeleteProduct = (product: Product) => openConfirmModal({
    title: 'Confirm Deletion',
    children: `Are you sure you want to delete ${product.name} ?`,
    labels: { confirm: 'Yes', cancel: 'No' },
    onConfirm: () => {
      showNotification({
        id: 'delete-product',
        title: 'Deleting product',
        message: 'Waiting for server...',
        loading: true,
        autoClose: false,
        disallowClose: true,
      });

      const result = deleteProduct(product).unwrap();
      result.then(() => {
        updateNotification({
          id: 'delete-product',
          title: 'Success!',
          message: `Successfully deleted product ${product.name}!`,
          icon: <IconCircleCheck />,
          color: 'blue',
          autoClose: true,
        });
      })
        .catch(() => {
          updateNotification({
            id: 'delete-product',
            title: 'Failed',
            message: `Failed to delete product ${product.name}`,
            icon: <IconCircleX />,
            color: 'red',
            autoClose: true,
          });
        });
    },
  });

  const toggleAvailable = (product: Product, value: boolean) => {
    updateProduct({
      ...product,
      isAvailable: value,
      // eslint-disable-next-line no-console
    })
      .unwrap()
      .then(() => {
        showNotification({
          title: value ? 'Product Enabled!' : 'Product Disabled!',
          message: value ? `${product.name} is now available for purchase.` : `${product.name} is now disabled for purchase.`,
          color: value ? 'blue' : 'red',
          icon: value ? <IconCircleCheck /> : <IconCircleX />,
        });
      })
      .catch(() => {
        showNotification({
          title: 'Failed to Enable/Disable Product',
          message: 'Please contact IT Support',
          icon: <IconAlertCircle />,
        });
      });
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleForm)}>
        <Group mt="md" spacing="xl" style={{ alignItems: 'flex-end' }}>
          <TextInput
            label="Search"
            placeholder="Search keyword in name and description..."
            style={{ width: 425 }}
            {...form.getInputProps('keyword')}
          />
          <Select
            label="Sort"
            defaultValue="i"
            data={[
              { label: 'Id', value: 'i' },
              { label: 'Name', value: 'n' },
              { label: 'Created', value: 't' },
              { label: 'Price', value: 'p' },
            ]}
            style={{ width: 150 }}
            {...form.getInputProps('sort')}
          />
          <Select
            label="Order"
            defaultValue="a"
            data={[
              { label: 'Ascending', value: 'a' },
              { label: 'Descending', value: 'd' },
            ]}
            style={{ width: 150 }}
            {...form.getInputProps('order')}
          />

          <Button type="submit" leftIcon={<IconFilter size={18} />}>
            Filter
          </Button>
        </Group>
      </form>

      <Group position="center" mt="md">
        <Pagination align="center" total={total} page={page} onChange={setPage} />
      </Group>

      <Table striped highlightOnHover mt="md">
        <thead>
          <tr>
            <td width={100} />
            <td width={300}>
              <b>Id</b>
            </td>
            <td>
              <b>Name</b>
            </td>
            <td width={120} style={{ textAlign: 'center' }}>
              <b>Price</b>
            </td>
            <td width={100} style={{ textAlign: 'center' }}>
              <b>Available?</b>
            </td>
            <td width={100} />
          </tr>
        </thead>
        <ProductListData
          isLoading={isLoading}
          data={data}
          toggleAvailable={toggleAvailable}
          deleteProduct={handleDeleteProduct}
        />
      </Table>

      <Group position="center" mt="md">
        <Pagination align="center" total={total} page={page} onChange={setPage} />
      </Group>
    </>
  );
};

export default ProductList;
