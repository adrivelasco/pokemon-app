import { Box, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { useGetAllPokemonQuery } from '../../app/services/pokemon';
import { PokemonCard } from '../../common/components';
import { useIsMobile } from '../../common/hooks';
import { getId } from '../../utils';

export const PokemonList = () => {
  const { data } = useGetAllPokemonQuery();

  const { isMobile, isTablet } = useIsMobile();

  const cardWidth = isMobile ? '100%' : isTablet ? '33.3%' : '25%';
  const cardMargin = isTablet ? 1 : 1.5;

  const navigate = useNavigate();

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
        {data?.results.map(({ url }) => {
          const id = getId(url);

          const handleOnClickPokemon = () => {
            navigate(`/pokemon/${id}`);
          };

          return (
            <PokemonCard
              key={url}
              onClick={handleOnClickPokemon}
              pokemonId={id}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
