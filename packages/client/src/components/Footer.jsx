import { Footer, useMantineTheme } from '@mantine/core';

const _Footer = () => {
  const theme = useMantineTheme();

  return (
    <Footer
      withBorder={false}
      fixed={false}
      position="bottom"
      height={200}
      p="xs"
      px="md"
      style={{ backgroundColor: theme.colors.gray[8], color: theme.colors.gray[1], minWidth: 425 }}
    >
      Footer
    </Footer>
  );
};

export default _Footer;
