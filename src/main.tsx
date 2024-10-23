import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import LocalizationProvider from 'src/context/Localization';
import ThemeProvider from 'src/context/Theme';
import { store } from 'src/storage';
import { NotistackProvider } from 'src/config/Notistack';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <NotistackProvider>
        <Provider store={store}>
          <LocalizationProvider>
            <App />
          </LocalizationProvider>
        </Provider>
      </NotistackProvider>
    </ThemeProvider>
  </React.StrictMode>
);
