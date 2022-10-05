import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import App from './App';
import CustomFonts from './CustomFonts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Montserrat CF, sans-serif',
        fontFamilyMonospace: 'Montserrat CF, monospace',
        headings: { fontFamily: 'Montserrat CF, sans-serif' },
      }}
    >
      <CustomFonts />
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
