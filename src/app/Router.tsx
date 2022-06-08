import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';

import { AddPokemon } from '../features/add-pokemon';
import { PokemonDetails } from '../features/pokemon-details';
import { PokemonList } from '../features/pokemon-list';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<PokemonList />} />
      <Route path="pokemon">
        <Route path=":pokemonId" element={<PokemonDetails />} />
        <Route path="new" element={<AddPokemon />} />
      </Route>
    </Route>
  </Routes>
);
