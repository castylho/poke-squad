import {
  Pokemon,
  PokemonAPI,
  PokemonTypeAPI,
  PokemonTypes,
} from "../api/types";

const formatPokemonTypes = (pokemonTypes: PokemonTypeAPI[]): PokemonTypes[] => {
  console.log(pokemonTypes);
  return pokemonTypes.map((poke) => poke.type.name);
};

export const formatPokemonData = (pokemon: PokemonAPI): Pokemon => {
  const { id, name, order, sprites, types } = pokemon;

  const formattedTypes = formatPokemonTypes(types);

  return {
    id,
    name,
    order,
    sprites,
    types: formattedTypes,
  };
};
