import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Pokemon } from "../api/types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const renderPokemonTypeTags = () => {};

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const pokemonImg = pokemon.sprites.front_default;

  return (
    <Card>
      <CardHeader>
        <Typography>{`#${pokemon.id} - ${pokemon.name}`}</Typography>
      </CardHeader>
      <CardContent>
        <Typography>Name: {pokemon.name}</Typography>
        <Typography>
          Types:
          <Chip sx={{ color: "red" }} label="red chip" />
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        // sx={{ width: 151 }}
        image={pokemonImg}
        alt={`${pokemon.name} default front image sprite`}
      />
    </Card>
  );
};

export default PokemonCard;
