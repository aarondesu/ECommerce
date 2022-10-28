import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

import Theme from './Theme';
import App from './App';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
      <NotificationsProvider limit={5}>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  </Provider>,
);
