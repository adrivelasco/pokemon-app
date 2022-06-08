import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

import { AddPokemonFormValues } from '../../../features/add-pokemon';
import { Pokemon, PokemonSpecies } from '../services/pokemon/models';

const initialState = {
  pokemon: null as Pokemon | null,
  species: null as PokemonSpecies | null,
};

export const addPokemonSlice = createSlice({
  name: 'addPokemon',
  initialState,
  reducers: {
    addPokemon: (_, { payload }: PayloadAction<AddPokemonFormValues>) => {
      const { color, description, height, name, weight } = payload;

      return {
        pokemon: {
          id: 'fake',
          name,
          height,
          weight,
          species: {
            url: 'https://pokeapi.co/api/v2/pokemon-species/fake/',
          },
          types: [
            { slot: 1, type: { name: 'fake' } },
            { slot: 1, type: { name: 'new' } },
          ],
          sprites: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
            back_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
            back_shiny_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            front_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
            front_shiny_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
          },
        } as Pokemon,
        species: {
          color: {
            name: color,
          },
          is_baby: false,
          is_legendary: true,
          is_mythical: true,
          flavor_text_entries: [
            {
              flavor_text: description,
            },
          ],
        } as PokemonSpecies,
      };
    },
  },
});

export const { addPokemon } = addPokemonSlice.actions;

export const { reducer: addPokemonReducer } = addPokemonSlice;

export const selectAddPokemonState = (state: RootState) => state.addPokemon;
