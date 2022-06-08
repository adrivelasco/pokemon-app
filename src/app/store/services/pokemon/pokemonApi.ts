import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Collection } from './types';
import { Pokemon, PokemonSpecies } from './models';

export const pokemonApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (build) => ({
    getAllPokemon: build.query<
      Collection<{ url: string }>,
      { offset?: number; limit?: number }
    >({
      query: ({ offset = 0, limit = 20 } = {}) => ({
        url: `pokemon?offset=${offset}&limit=${limit}`,
      }),
    }),

    getOnePokemon: build.query<Pokemon, string>({
      query: (id) => ({ url: `pokemon/${id}` }),
    }),

    getOnePokemonSpecies: build.query<PokemonSpecies, string>({
      query: (id) => ({ url: `pokemon-species/${id}` }),
    }),
  }),
});

export const {
  useGetAllPokemonQuery,
  useGetOnePokemonQuery,
  useGetOnePokemonSpeciesQuery,
} = pokemonApi;
