import { AddIcon } from '@chakra-ui/icons';
import { Box, BoxProps, Button } from '@chakra-ui/react';
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
        display="flex"
        justifyContent="space-between"
        px={4}
        py={6}
      >
        <PokedexLogo onClick={handleOnClickLogo} />
        <Button variant="outline" colorScheme="cyan" leftIcon={<AddIcon />}>
          Add Pokemon
        </Button>
      </Box>
      <Box as="main" position="relative">
        <Outlet />
      </Box>
    </Box>
  );
};
