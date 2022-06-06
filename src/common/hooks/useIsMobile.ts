import { useMediaQuery } from '@chakra-ui/react';

export const useIsMobile = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isTablet] = useMediaQuery('(max-width: 1024px)');

  return {
    isMobile,
    isTablet,
  } as const;
};
