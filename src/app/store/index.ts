import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
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
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
