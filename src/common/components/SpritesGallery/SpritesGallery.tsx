import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

export interface SpritesGalleryProps {
  sprites: string[];
}

export const SpritesGallery = ({ sprites }: SpritesGalleryProps) => {
  const [activeSpriteIndex, setActiveSpriteIndex] = useState(2);

  const toLeft = useCallback(() => {
    setActiveSpriteIndex((prevState) => prevState - 1);
  }, []);

  const toRight = useCallback(() => {
    setActiveSpriteIndex((prevState) => prevState + 1);
  }, []);

  return (
    <Box
      alignItems="center"
      bg="gray.50"
      border="2px solid"
      borderColor="gray.200"
      borderRadius={6}
      display="flex"
      h={300}
      justifyContent="center"
      w={{ base: '100%', md: 300 }}
    >
      <IconButton
        aria-label="left"
        disabled={activeSpriteIndex === 0}
        ml={2}
        onClick={toLeft}
      >
        <ChevronLeftIcon />
      </IconButton>

      {sprites[activeSpriteIndex] && (
        <Box
          as="img"
          src={sprites[activeSpriteIndex]}
          sx={{ mx: 'auto', display: 'block' }}
        />
      )}

      <IconButton
        aria-label="right"
        disabled={activeSpriteIndex === sprites.length - 1}
        mr={2}
        onClick={toRight}
      >
        <ChevronRightIcon aria-label="right" />
      </IconButton>
    </Box>
  );
};
