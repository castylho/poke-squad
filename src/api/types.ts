export type PokemonTypes =
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel";

type PokemonTypeAPI = {
  name: PokemonTypes;
  url: string;
};

type PokemonSprite = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type Pokemon = {
  id: number;
  name: string;
  order: number;
  sprites: PokemonSprite[];
  types: PokemonTypeAPI[];
};
