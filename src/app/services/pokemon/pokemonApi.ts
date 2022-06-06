import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Collection, CustomQuery } from './types';
import { Pokemon } from './models';

export const pokemonApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (build) => ({
    getAllPokemon: build.query<Collection<Pokemon>, void>({
      queryFn: async (_args, _queryApi, _extraOptions, baseQuery) => {
        const response = (await baseQuery('pokemon')) as CustomQuery<
          Collection<{ url: string }>
        >;

        if (response.error) {
          return {
            error: response.error,
          };
        }

        const results: Pokemon[] = [];

        if (response.data && response.data.count > 0) {
          const queries = response.data.results.map(
            ({ url }) => baseQuery(url) as CustomQuery<Pokemon>
          );

          const pokemonArray = await Promise.all(queries);

          results.push(...pokemonArray.map((pokemon) => pokemon.data!));
        }

        return { data: { ...response.data, results } };
      },
    }),

    getOnePokemon: build.query<Pokemon, string | number>({
      query: (id) => ({ url: `pokemon/${id}` }),
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetOnePokemonQuery } = pokemonApi;
