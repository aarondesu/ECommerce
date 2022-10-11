import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Provider } from 'react-redux';

import App from './App';
import CustomFonts from './CustomFonts';
import Store from './redux/store';

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
      <NotificationsProvider>
        <Provider store={Store}>
          <CustomFonts />
          <App />
        </Provider>
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>,
);
