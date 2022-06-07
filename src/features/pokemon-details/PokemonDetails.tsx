import {
  Box,
  Heading,
  List,
  ListItem,
  Spinner,
  Tag,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useGetOnePokemonQuery } from '../../app/services/pokemon';
import { PokemonSpeciesInfo, SpritesGallery } from '../../common/components';
import { dmToCmFormatted, getId, hgToKgFormatted } from '../../utils';

export const PokemonDetails = () => {
  const { pokemonId } = useParams();

  const { data, isLoading } = useGetOnePokemonQuery(pokemonId!);

  if (isLoading || !data) {
    return <Spinner />;
  }

  const { height, name, species, sprites, types, weight } = data;

  const imageSources = Object.keys(sprites)
    .map((key) =>
      key in sprites ? sprites[key as keyof typeof sprites] : undefined
    )
    .filter((value) => value && typeof value === 'string') as string[];

  console.log(imageSources);

  const speciesId = getId(species.url);

  const listItems = [
    {
      label: 'Weight',
      value: hgToKgFormatted(weight),
    },
    {
      label: 'Height',
      value: dmToCmFormatted(height),
    },
  ] as const;

  return (
    <Box
      display="flex"
      px={4}
      py={8}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <SpritesGallery sprites={imageSources} />

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

        <List mt={4} width={{ base: '100%', md: 300 }} fontSize={14}>
          {listItems.map(({ label, value }) => (
            <ListItem
              display="flex"
              justifyContent="space-between"
              key={label}
              py={2}
              w="100%"
            >
              {label}:{' '}
              <Text as="span" fontWeight="bold">
                {value}
              </Text>{' '}
            </ListItem>
          ))}
        </List>

        <PokemonSpeciesInfo speciesId={speciesId} />
      </Box>
    </Box>
  );
};
