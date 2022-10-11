import { createFormContext } from '@mantine/form';

interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  termsOfService: boolean;
}

export const [FormProvider, useFormContext, useForm] = createFormContext<FormValues>();
