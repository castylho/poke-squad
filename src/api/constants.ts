import { PokemonTypes } from "./types";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonURL = (name: string): string => {
  return `${BASE_URL}/pokemon/${name}`;
};

export const pokemonType: Record<PokemonTypes, string> = {
  fire: "#f08030",
  water: "#6790f0",
  grass: "#78c84f",
  electric: "#f9cf30",
  psychic: "#f85888",
  dragon: "#7038f8",
  dark: "#705848",
  fairy: "#ee99ec",
  normal: "#a8a878",
  ice: "#98d8d8",
  fighting: "#c03128",
  flying: "#a890f0",
  poison: "#9f40a0",
  ground: "#e0c068",
  rock: "#b8a039",
  bug: "#a8b820",
  ghost: "#705898",
  steel: "#b8b8d0",
};
