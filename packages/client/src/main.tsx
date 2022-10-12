import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import CustomFonts from './CustomFonts';
import Store from './redux/store';
import Theme from './Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
        <NotificationsProvider>
          <Provider store={Store}>
            <CustomFonts />
            <App />
          </Provider>
        </NotificationsProvider>
      </MantineProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
