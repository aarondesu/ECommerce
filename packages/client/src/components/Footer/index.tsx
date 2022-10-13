import {
  Footer, Container, Stack, Title, Grid, Anchor, Box, Center,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ContactInfo from './Contactinfo';
import Socials from './Socials';
import SiteLinks from './SiteLinks';

import useStyles from './Footer.styles';

const Categories = () => (
  <Grid.Col span="content">
    <Title order={6}>CATEGORIES</Title>
    <Stack spacing={8} mt={6}>
      <Anchor size="xs" color="cyan">
        Shirts
      </Anchor>
      <Anchor size="xs" color="cyan">
        Jackets
      </Anchor>
      <Anchor size="xs" color="cyan">
        Pants
      </Anchor>
    </Stack>
  </Grid.Col>
);

const SiteFooter = () => {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery('(min-width: 320px) and (max-width: 425px)');

  return (
    <>
      <Footer
        className={classes.footer}
        withBorder={false}
        fixed={false}
        height={smallScreen ? 350 : 200}
        p="md"
      >
        <Container>
          <Grid gutter="xl" justify="center" align="stretch" grow>
            <ContactInfo />
            <Categories />
            <SiteLinks />
            <Socials />
          </Grid>
        </Container>
      </Footer>
      <Box className={classes.copyright}>
        <Center>2022 &#169; Copyright</Center>
      </Box>
    </>
  );
};

export default SiteFooter;
