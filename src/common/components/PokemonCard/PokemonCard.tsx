import {
  Box,
  BoxProps,
  Heading,
  List,
  ListItem,
  Tag,
  Text,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

import { useGetOnePokemonQuery } from '../../../app/store/services/pokemon';
import { dmToCmFormatted, hgToKgFormatted } from '../../../utils';
import { Card } from '../Card';

export interface PokemonCardProps extends BoxProps {
  imageSrc?: string | null;
  name?: string;
  height?: number;
  weight?: number;
  types?: string[];
  pokemonId: string;
}

export const PokemonCard = ({ pokemonId, ...props }: PokemonCardProps) => {
  const { data, isLoading } = useGetOnePokemonQuery(pokemonId);

  if (isLoading || !data) {
    return (
      <Card>
        <Skeleton bg="gray.50" py={2} height={110} opacity={0.1} />
        <Box p={4}>
          <SkeletonText noOfLines={1} skeletonHeight={4} maxWidth={40} />
          <SkeletonText noOfLines={4} mt={3} />
          <SkeletonText noOfLines={1} opacity={0.5} mt={3} maxWidth={50} />
        </Box>
      </Card>
    );
  }

  const {
    types,
    name,
    sprites: { front_default: imageSrc } = {},
    weight,
    height,
  } = data;

  return (
    <Card {...props}>
      {imageSrc && (
        <Box bg="gray.50" py={2} minHeight={112}>
          <Box as="img" src={imageSrc} sx={{ mx: 'auto', display: 'block' }} />
        </Box>
      )}
      <Box>
        <Box textAlign="left" p={4}>
          <Box mb={2}>
            <Heading
              className="pokemon-name"
              fontSize={21}
              variant="h3"
              sx={{ mb: 2 }}
            >
              {name}
            </Heading>
            <Box fontSize={12}>
              <List>
                <ListItem>
                  weight:{' '}
                  <Text as="span" fontWeight="bold">
                    {hgToKgFormatted(weight)}
                  </Text>{' '}
                </ListItem>
                <ListItem>
                  height:{' '}
                  <Text as="span" fontWeight="bold">
                    {dmToCmFormatted(height)}
                  </Text>
                </ListItem>
              </List>
            </Box>
          </Box>

          <Box sx={{ mt: 3, '& > *': { mr: 1 } }}>
            {types?.map(({ type: { name } }) => (
              <Tag size="sm" key={name}>
                {name}
              </Tag>
            ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
