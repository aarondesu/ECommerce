import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  defaultRadius: 'xs',
  fontFamily: 'Montserrat CF, sans-serif',
  fontFamilyMonospace: 'Montserrat CF, monospace',
  headings: { fontFamily: 'Montserrat CF, sans-serif' },
  globalStyles: () => ({
    '*': {
      userSelect: 'none',
    },
  }),
};

export default theme;
