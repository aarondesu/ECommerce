import { AppShell, Stack } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

import Newsletter from '../../components/Newsletter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import NewProducts from '../../components/NewProducts';

const bannerProps = {
  backgroundImg:
    'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/woman-gca7c2f869_1280.jpg',
  header: 'Your one stop Shop',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

function Landing() {
  return (
    <>
      <Helmet>
        <title>Landing</title>
      </Helmet>

      <AppShell
        fixed={false}
        header={<Header />}
        footer={<Footer />}
        padding={0}
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colors.cyan[1],
            minWidth: 425,
          },
        })}
      >
        <Stack spacing="md">
          <Banner {...bannerProps} />
          <Newsletter />
        </Stack>
      </AppShell>
    </>
  );
}

export default Landing;
