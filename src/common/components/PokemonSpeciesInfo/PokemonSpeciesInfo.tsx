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

import { useGetOnePokemonSpeciesQuery } from '../../../app/services/pokemon';

export interface PokemonSpeciesInfoProps extends BoxProps {
  speciesId: string;
}

export const PokemonSpeciesInfo = ({
  speciesId,
  ...props
}: PokemonSpeciesInfoProps) => {
  const { data, isLoading } = useGetOnePokemonSpeciesQuery(speciesId);

  if (isLoading) {
    return (
      <Box w="100%" mt={6}>
        <SkeletonText noOfLines={8} w="100%" />
      </Box>
    );
  }

  if (!data) {
    return null;
  }

  const { flavor_text_entries, is_baby, is_legendary, is_mythical, color } =
    data;

  const listItems = [
    { label: 'Baby', value: is_baby },
    { label: 'Legendary', value: is_legendary },
    { label: 'Mythical', value: is_mythical },
  ] as const;

  return (
    <Box position="relative" py={5} mt={2} {...props}>
      <Text>{flavor_text_entries[0].flavor_text}</Text>

      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        my={6}
        width={{ base: '100%', md: 300 }}
      >
        <Text fontWeight="bold" mr={2} fontSize={14}>
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
        <Heading fontSize={14} variant="h4">
          Features
        </Heading>
        <List width={{ base: '100%', md: 300 }} my={1}>
          {listItems.map(({ label, value }) => (
            <ListItem
              display="flex"
              fontSize={12}
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
                  <CloseIcon color="red.500" />
                )}
              </span>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
