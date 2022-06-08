import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';

import { useGetAllPokemonQuery } from '../../app/store/services/pokemon';
import { PokemonCard } from '../../common/components';
import { useIsMobile } from '../../common/hooks';
import { getId, getQueryParams } from '../../utils';

export const PokemonList = () => {
  const { isMobile, isTablet } = useIsMobile();

  const [pagination, setPagination] = useState({
    offset: 0,
    limit: isTablet ? 6 : 12,
  });

  const { data, isLoading, isFetching } = useGetAllPokemonQuery(pagination);

  const navigate = useNavigate();

  const handleOnPrev = useCallback(() => {
    if (data?.previous) {
      const searchParams = getQueryParams(data.previous);
      setPagination(({ limit }) => ({
        offset: Number(searchParams.get('offset')),
        limit,
      }));
    }
  }, [data?.previous]);

  const handleOnNext = useCallback(() => {
    if (data?.next) {
      const searchParams = getQueryParams(data.next);
      setPagination(({ limit }) => ({
        offset: Number(searchParams.get('offset')),
        limit,
      }));
    }
  }, [data?.next]);

  if (isLoading || !data) {
    return <Spinner />;
  }

  const cardWidth = isMobile ? '100%' : isTablet ? '33.3%' : '25%';
  const cardMargin = isTablet ? 1 : 1.5;

  return (
    <Box position="relative">
      <Flex
        flexWrap="wrap"
        m="auto"
        opacity={isFetching ? 0.5 : undefined}
        p={2}
        position="relative"
        sx={{
          '& > *': {
            width: `calc(${cardWidth} - ${cardMargin * 8}px)`,
            m: cardMargin,
          },
        }}
        transitionDuration="normal"
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

      <Box display="flex" px={4} justifyContent="flex-end" py={2} mb={10}>
        <Button
          leftIcon={<ChevronLeftIcon />}
          disabled={!data.previous || isFetching}
          onClick={handleOnPrev}
        >
          Prev
        </Button>
        <Button
          rightIcon={<ChevronRightIcon />}
          ml={2}
          disabled={!data.next || isFetching}
          onClick={handleOnNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
