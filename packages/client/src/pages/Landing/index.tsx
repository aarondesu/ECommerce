import { AppShell, Stack } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

import Newsletter from '../../components/Newsletter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import NewProducts from '../../components/NewProducts';
import PopularProducts from '../../components/PopularProducts';
import CollectionsBanner from '../../components/CollectionsBanner';

const bannerProps = {
  backgroundImg:
    'https://ufxpuewfaoxlauohzsep.supabase.co/storage/v1/object/public/shinucommerce/woman-gca7c2f869_1280.jpg',
  header: 'Your one stop Shop',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const Landing = () => (
  <>
    <Helmet>
      <title>Landing</title>
    </Helmet>

    <AppShell fixed={false} header={<Header />} footer={<Footer />} padding={0}>
      <Stack spacing="md">
        <Banner {...bannerProps} />
        <PopularProducts />
        <CollectionsBanner />
        <NewProducts />
        <Newsletter />
      </Stack>
    </AppShell>
  </>
);

export default Landing;
