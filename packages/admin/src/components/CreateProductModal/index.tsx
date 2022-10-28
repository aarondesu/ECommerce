/* eslint-disable no-console */
import { useForm } from '@mantine/form';
import {
  Button, FileInput, Modal, NumberInput, Stack, Textarea, TextInput,
} from '@mantine/core';
import { IconCircleCheck, IconCircleX, IconCurrencyDollar } from '@tabler/icons';
import { useState } from 'react';
import { showNotification, updateNotification } from '@mantine/notifications';
import supabase from '../../Supabase';
import { useCreateMutation } from '../../redux/api/products.api';

interface CreateForm {
  name: string;
  desc: string;
  price: number;
  colors: string[];
  sizes: string[];
  img: File;
}

interface CreateProductModalProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

const CreateProductModal = ({ open, setOpen }: CreateProductModalProps) => {
  const [loading, setLoading] = useState(false);
  const [createProduct] = useCreateMutation();

  const form = useForm<CreateForm>({
    initialValues: {
      name: '',
      desc: '',
      price: 1,
      colors: [],
      sizes: [],
      img: null,
    },
    validate: {
      name: (value) => (value.length < 6 ? 'Name of product must be more than 6 characters' : null),
      desc: (value) => (value.length < 20 ? 'Description must contain at least 20 characters' : null),
      price: (value) => (value <= 0 ? 'Price must be more than 0' : null),
    },
  });

  const handleForm = (values: CreateForm) => {
    setLoading(true);

    const uploadFile = async () => {
      setOpen(false);
      showNotification({
        id: 'create-product',
        title: 'Creating Product',
        message: 'Waiting for server...',
        loading: true,
        autoClose: false,
        disallowClose: true,
      });

      const { data } = await supabase.storage
        .from('shinucommerce')
        .upload(`products/${values.img.name}`, values.img);

      const path = supabase.storage.from('shinucommerce').getPublicUrl(data.path);

      return path.data.publicUrl;
    };

    uploadFile()
      .then(async (imgUrl) => {
        const data = await createProduct({
          name: values.name,
          desc: values.desc,
          img: imgUrl,
          price: values.price,
        });

        if (data) {
          setLoading(false);
          updateNotification({
            id: 'create-product',
            title: 'Success!',
            message: 'Successfully created product!',
            icon: <IconCircleCheck />,
          });

          form.reset();
        }
      })
      .catch(() => {
        setLoading(false);
        setOpen(false);
        showNotification({
          title: 'Failed!',
          message: 'Failed to create new product',
          icon: <IconCircleX />,
          color: 'red',
        });

        form.reset();
      });
  };

  return (
    <Modal
      title="Create Product"
      opened={open}
      onClose={() => setOpen(false)}
      closeOnClickOutside={false}
    >
      <form onSubmit={form.onSubmit(handleForm)} encType="multipart/form-data">
        <Stack spacing="sm">
          <TextInput
            label="Name"
            placeholder="Enter name..."
            disabled={loading}
            {...form.getInputProps('name')}
          />
          <Textarea
            label="Description"
            minRows={6}
            disabled={loading}
            placeholder="Enter description"
            {...form.getInputProps('desc')}
          />
          <NumberInput
            label="Price"
            placeholder="Enter Price..."
            min={0}
            hideControls
            icon={<IconCurrencyDollar size={18} />}
            disabled={loading}
            {...form.getInputProps('price')}
          />
          <TextInput
            label="Colors"
            description="red, blue, green, etc.."
            disabled={loading}
            {...form.getInputProps('colors')}
          />
          <TextInput
            label="Sizes"
            description="M, L, XL, XXL, or 29, 30, 31, 32 etc.."
            disabled={loading}
            {...form.getInputProps('sizes')}
          />
          <FileInput
            label="Media"
            placeholder="Click to add files"
            accept="image/png, image/jpeg"
            disabled={loading}
            {...form.getInputProps('img')}
          />
          <Button type="submit" loading={loading}>
            Create
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default CreateProductModal;
