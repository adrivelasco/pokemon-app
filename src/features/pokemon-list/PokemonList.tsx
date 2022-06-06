import { Box, Flex } from '@chakra-ui/react';

import { useGetAllPokemonQuery } from '../../app/services/pokemon';
import { PokemonCard } from '../../common/components';
import { useIsMobile } from '../../common/hooks';

export const PokemonList = () => {
  const { data } = useGetAllPokemonQuery();

  const { isMobile, isTablet } = useIsMobile();

  const cardWidth = isMobile ? '100%' : isTablet ? '33.3%' : '25%';
  const cardMargin = isTablet ? 2 : 3;

  return (
    <Box>
      <Flex
        flexWrap="wrap"
        m="auto"
        position="relative"
        p={2}
        sx={{
          '& > *': {
            width: `calc(${cardWidth} - ${cardMargin * 8}px)`,
            m: cardMargin,
          },
        }}
      >
        {data?.results.map(({ id, name, sprites, height, weight, types }) => {
          return (
            <PokemonCard
              height={height}
              imageSrc={sprites.front_default}
              key={id}
              name={name}
              types={types.map((type) => type.type.name)}
              weight={weight}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
