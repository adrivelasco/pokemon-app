import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';

import { pokemonApi } from './services/pokemon';

import { addPokemonReducer } from './slices/addPokemonSlice';

export type CreateStoreOptions = Pick<ConfigureStoreOptions, 'preloadedState'>;

export const createStore = ({ preloadedState }: CreateStoreOptions = {}) =>
  configureStore({
    preloadedState,
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,

      addPokemon: addPokemonReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(pokemonApi.middleware),
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
