import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { PokemonList } from '../features/pokemon-list';
import { theme } from '../common/theme';

import { Layout } from './components/Layout';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <PokemonList />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
};
