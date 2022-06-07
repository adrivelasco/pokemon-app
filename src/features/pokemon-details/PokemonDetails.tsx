import { Box, Heading, Spinner, Tag } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useGetOnePokemonQuery } from '../../app/services/pokemon';
import { PokemonSpeciesInfo } from '../../common/components';
import { getId } from '../../utils';

export const PokemonDetails = () => {
  const { pokemonId } = useParams();

  const { data, isLoading } = useGetOnePokemonQuery(pokemonId!);

  if (isLoading || !data) {
    return <Spinner />;
  }

  const {
    species,
    types,
    name,
    sprites: { front_default: imageSrc },
  } = data;

  const speciesId = getId(species.url);

  return (
    <Box
      display="flex"
      px={4}
      py={8}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        alignItems="center"
        bg="gray.50"
        borderRadius={6}
        display="flex"
        h={300}
        justifyContent="center"
        w={{ base: '100%', md: 300 }}
        border="2px solid"
        borderColor="gray.200"
      >
        {imageSrc && (
          <Box as="img" src={imageSrc} sx={{ mx: 'auto', display: 'block' }} />
        )}
      </Box>
      <Box px={{ base: 2, md: 8 }} flex={1} mt={{ base: 8, md: 0 }}>
        <Heading variant="h1" fontWeight="bold" fontSize={40}>
          {name}
        </Heading>
        <Box sx={{ mt: 3, '& > *': { mr: 1 } }}>
          {types?.map(({ type: { name } }) => (
            <Tag size="md" key={name}>
              {name}
            </Tag>
          ))}
        </Box>
        <PokemonSpeciesInfo speciesId={speciesId} />
      </Box>
    </Box>
  );
};
