import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    main: {
      500: 'red',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  fontWeights: {
    normal: 400,
    bold: 600,
  },
});
