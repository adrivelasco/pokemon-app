import { Heading, Box, Text, Tag, List, ListItem } from '@chakra-ui/react';

export interface PokemonCardProps {
  imageSrc?: string | null;
  name?: string;
  height?: number;
  weight?: number;
  types?: string[];
}

export const PokemonCard = ({
  imageSrc,
  name,
  weight = 0,
  height = 0,
  types,
}: PokemonCardProps) => (
  <Box
    border="2px solid"
    borderColor="gray.200"
    borderRadius={8}
    overflow="hidden"
    role="card"
    textAlign="center"
    transitionDuration="normal"
    cursor="pointer"
    _hover={{
      borderWidth: 2,
      borderColor: 'cyan.500',
      transform: 'translateY(-8px)',

      '.pokemon-name': {
        color: 'cyan.500',
      },
    }}
  >
    {imageSrc && (
      <Box bg="gray.50" py={2}>
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
                  {weight / 10} KG
                </Text>{' '}
              </ListItem>
              <ListItem>
                height:{' '}
                <Text as="span" fontWeight="bold">
                  {height * 10} CM
                </Text>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box sx={{ mt: 3, '& > *': { mr: 1 } }}>
          {types?.map((type) => (
            <Tag size="sm" key={type}>
              {type}
            </Tag>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);
