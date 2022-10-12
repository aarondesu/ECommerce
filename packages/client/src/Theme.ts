import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  defaultRadius: 'xs',
  fontFamily: 'Montserrat CF, sans-serif',
  fontFamilyMonospace: 'Montserrat CF, monospace',
  headings: { fontFamily: 'Montserrat CF, sans-serif' },
  components: {
    Container: {
      styles: {
        root: {
          maxWidth: 1400,
          minWidth: 425,
        },
      },
    },
  },
};

export default theme;
