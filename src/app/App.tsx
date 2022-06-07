import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { theme } from '../common/theme';

import { store } from './store';
import { Router } from './Router';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
