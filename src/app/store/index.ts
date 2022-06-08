import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokemon';

export type CreateStoreOptions = Pick<ConfigureStoreOptions, 'preloadedState'>;

export const createStore = ({ preloadedState }: CreateStoreOptions = {}) =>
  configureStore({
    preloadedState,
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(pokemonApi.middleware),
  });

export const store = createStore();
