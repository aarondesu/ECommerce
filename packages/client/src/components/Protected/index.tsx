/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
import { PropsWithChildren, useEffect, useState } from 'react';
import { AppShell, Title } from '@mantine/core/';

import { useAuthorizeQuery } from '../../redux/api/auth.api';

const Protected = ({ children }: PropsWithChildren) => {
  const [isAdmin, setAdmin] = useState(false);
  const { data } = useAuthorizeQuery();

  useEffect(() => {
    setAdmin(data === 'Ok');
    if (isAdmin) {
      console.log('test');
    }
  }, [data]);

  if (!isAdmin) {
    return (
      <AppShell>
        <Title order={1}>Unauthorized</Title>
      </AppShell>
    );
  }
  return <>{children}</>;
};

export default Protected;
