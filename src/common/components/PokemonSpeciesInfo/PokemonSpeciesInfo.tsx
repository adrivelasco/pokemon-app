import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Heading,
  List,
  ListItem,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { useGetOnePokemonSpeciesQuery } from '../../../app/store/services/pokemon';
import { selectAddPokemonState } from '../../../app/store/slices/addPokemonSlice';

export interface PokemonSpeciesInfoProps extends BoxProps {
  speciesId: string;
}

export const PokemonSpeciesInfo = ({
  speciesId,
  ...props
}: PokemonSpeciesInfoProps) => {
  const { data, isLoading, error } = useGetOnePokemonSpeciesQuery(speciesId, {
    skip: speciesId === 'fake',
  });

  const fakePokemonData = useSelector(selectAddPokemonState);

  if (error || (speciesId === 'fake' && !fakePokemonData.species)) {
    return null;
  }

  if (isLoading) {
    return (
      <Box w="100%" mt={6}>
        <SkeletonText noOfLines={8} w="100%" />
      </Box>
    );
  }

  const { flavor_text_entries, is_baby, is_legendary, is_mythical, color } =
    speciesId === 'fake' && fakePokemonData.species
      ? fakePokemonData.species
      : data!;

  const listItems = [
    { label: 'Baby', value: is_baby },
    { label: 'Legendary', value: is_legendary },
    { label: 'Mythical', value: is_mythical },
  ] as const;

  return (
    <Box position="relative" py={5} mt={2} {...props}>
      <Heading fontSize={18} mb={2}>
        Species:
      </Heading>
      <Text>{flavor_text_entries[0].flavor_text}</Text>

      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        my={6}
        width={{ base: '100%', md: 300 }}
      >
        <Text fontWeight="bold" mr={2} fontSize={16}>
          Color
        </Text>
        <Box
          bg={color.name}
          border="2px solid"
          borderColor="gray.200"
          borderRadius={6}
          h={8}
          w={8}
        />
      </Box>

      <Box mt={6}>
        <Heading fontSize={16} variant="h4">
          Features
        </Heading>
        <List width={{ base: '100%', md: 300 }} my={1} fontSize={14}>
          {listItems.map(({ label, value }) => (
            <ListItem
              display="flex"
              justifyContent="space-between"
              key={label}
              py={2}
              w="100%"
            >
              <span>{label}:</span>
              <span>
                {value ? (
                  <CheckIcon color="green.500" />
                ) : (
                  <CloseIcon color="main.500" />
                )}
              </span>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
