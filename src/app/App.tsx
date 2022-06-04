import { Box, ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider>
      <Box>Hello world</Box>
    </ChakraProvider>
  );
};
