import { Box, ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { PokemonList } from '../features/pokemon-list';

import { store } from './store';

import { theme } from '../common/theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Box maxWidth={1280} mx="auto" position="relative">
          <PokemonList />
        </Box>
      </ChakraProvider>
    </Provider>
  );
};
