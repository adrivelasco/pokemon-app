import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';

export type PokedexLogoProps = BoxProps;

export const PokedexLogo = (props: PokedexLogoProps) => {
  return (
    <Box
      position="relative"
      cursor="pointer"
      transitionDuration="normal"
      _hover={{
        transform: 'translateY(-5px)',
      }}
      {...props}
    >
      <Heading variant="h1" fontSize={55}>
        <Text color="red.500" as="span">
          poke
        </Text>
        dex
      </Heading>
      <Text fontSize={14} position="absolute" bottom="-10px" left="18px">
        react web app
      </Text>
    </Box>
  );
};
