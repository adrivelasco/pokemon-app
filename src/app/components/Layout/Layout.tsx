import { AddIcon } from '@chakra-ui/icons';
import { Box, BoxProps, Button, Text } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { PokedexLogo } from './PokedexLogo';

export type LayoutProps = BoxProps;

export const Layout = (props: LayoutProps) => {
  const navigate = useNavigate();

  const handleOnClickLogo = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Box maxWidth={1280} mx="auto" position="relative" {...props}>
      <Box
        alignItems="center"
        as="header"
        display="flex"
        justifyContent="space-between"
        px={4}
        py={6}
      >
        <PokedexLogo onClick={handleOnClickLogo} />
        <Button variant="solid" colorScheme="red" leftIcon={<AddIcon />}>
          Add Pokemon
        </Button>
      </Box>

      <Box as="main" position="relative">
        <Outlet />
      </Box>

      <Box as="footer" px={4} textAlign="right">
        <Box height={1} bg="gray.200" my={5} />
        <Text fontSize={14} color="gray.600">
          Adrian Velasco @ 2022
        </Text>
      </Box>
    </Box>
  );
};
