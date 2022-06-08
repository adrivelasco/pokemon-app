import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Select,
  Button,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormValues {
  color: string;
  description: string;
  height: number;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  name: string;
  weight: number;
}

const schema = yup
  .object()
  .shape({
    color: yup.string().required(),
    description: yup.string().required('Description is required'),
    height: yup
      .number()
      .typeError('Height must be a number')
      .positive('Height should be > 0')
      .required('Height is required'),
    isBaby: yup.bool(),
    isLegendary: yup.bool(),
    isMythical: yup.bool(),
    name: yup.string().required('Name is required'),
    weight: yup
      .number()
      .typeError('Weight must be a number')
      .positive('Weight should be > 0')
      .required('Weight is required'),
  })
  .required();

export const AddPokemon = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <Box position="relative" px={4} mt={3}>
      <Box
        border="2px solid"
        borderColor="gray.200"
        borderRadius={6}
        px={{ base: 6, md: 12 }}
        py={{ base: 6, md: 8 }}
      >
        <Heading fontSize={24} mb={4}>
          Add Pokemon
        </Heading>

        <Box as="form" sx={{ '& > *': { my: 4 } }}>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="email">Name</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Bulbasur"
              {...register('name')}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.description)}>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              id="description"
              placeholder="Spits fire that is hot enough to melt boulders.Known to cause forest fires unintentionally."
              type="text"
              {...register('description')}
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.color)}>
            <FormLabel htmlFor="color">Color</FormLabel>
            <Select
              placeholder="Select color"
              id="color"
              {...register('color')}
            >
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
            </Select>
            <FormErrorMessage>{errors.color?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.weight)}>
            <FormLabel htmlFor="weight">Weight (kg)</FormLabel>
            <Input
              id="weight"
              type="text"
              placeholder="80"
              {...register('weight')}
            />
            <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.height)}>
            <FormLabel htmlFor="height">Height (cm)</FormLabel>
            <Input
              id="height"
              type="text"
              placeholder="145"
              {...register('height')}
            />
            <FormErrorMessage>{errors.height?.message}</FormErrorMessage>
          </FormControl>

          <Button disabled={!isValid} rightIcon={<ChevronRightIcon />}>
            Add Pokemon
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
