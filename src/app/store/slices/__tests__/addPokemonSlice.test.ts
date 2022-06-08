import { AnyAction } from '@reduxjs/toolkit';

import { addPokemonReducer, addPokemon } from '../addPokemonSlice';

test('should return the initial state', () => {
  const result = addPokemonReducer(undefined, {} as AnyAction);

  expect(result).toEqual({
    pokemon: null,
    species: null,
  });
});

test('ad', () => {
  const result = addPokemonReducer(
    undefined,
    addPokemon({
      color: 'green',
      description: 'Some random description',
      height: 100,
      name: 'PokeTest',
      weight: 200,
    })
  );

  expect(result).toEqual({
    pokemon: {
      id: 'fake',
      name: 'PokeTest',
      height: 100,
      weight: 200,
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
    },
    species: {
      color: {
        name: 'green',
      },
      is_baby: false,
      is_legendary: true,
      is_mythical: true,
      flavor_text_entries: [
        {
          flavor_text: 'Some random description',
        },
      ],
    },
  });
});
