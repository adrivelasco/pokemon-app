import { Box, BoxProps } from '@chakra-ui/react';

export type CardProps = BoxProps;

export const Card = (props: CardProps) => (
  <Box
    border="2px solid"
    borderColor="gray.200"
    borderRadius={8}
    overflow="hidden"
    role="card"
    textAlign="center"
    transitionDuration="normal"
    cursor="pointer"
    _hover={{
      borderWidth: 2,
      borderColor: 'red.500',
      transform: 'translateY(-8px)',

      '.pokemon-name': {
        color: 'red.500',
      },
    }}
    {...props}
  />
);
