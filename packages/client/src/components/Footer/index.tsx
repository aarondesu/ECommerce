import { Footer } from '@mantine/core';

import useStyles from './Footer.styles';

function SiteFooter() {
  const { classes } = useStyles();

  return (
    <Footer className={classes.footer} withBorder={false} fixed={false} height={200} p="xs" px="md">
      Footer
    </Footer>
  );
}

export default SiteFooter;
