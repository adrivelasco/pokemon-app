import { Box, BoxProps, Button, Heading, Text } from '@chakra-ui/react';

export interface LayoutProps extends BoxProps {}

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <Box maxWidth={1280} mx="auto" position="relative" {...props}>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        px={4}
        py={6}
      >
        <Box position="relative">
          <Heading variant="h1" fontSize={55}>
            <Text color="cyan.500" as="span">
              poke
            </Text>
            dex
          </Heading>
          <Text fontSize={14} position="absolute" bottom="-10px" left="18px">
            react web app
          </Text>
        </Box>
        <Button variant="solid">Add Pokemon</Button>
      </Box>
      <Box as="main" position="relative">
        {children}
      </Box>
    </Box>
  );
};
