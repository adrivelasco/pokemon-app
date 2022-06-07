import type { PokemonType } from './PokemonType';

export type Pokemon = {
  id: string;
  name: string;
  height: number;
  weight: number;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default?: string | null;
    back_female?: string | null;
    back_shiny?: string | null;
    back_shiny_female?: string | null;
    front_default?: string | null;
    front_female?: string | null;
    front_shiny?: string | null;
    front_shiny_female?: string | null;
  };
  types: PokemonType[];
};
