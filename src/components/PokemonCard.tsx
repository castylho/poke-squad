import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FC } from "react";
import { pokemonType } from "../api/constants";
import { Pokemon } from "../api/types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const pokemonImg = pokemon.sprites?.front_default;
  const theme = useTheme();
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ margin: "auto" }}
        image={pokemonImg}
        alt={`${pokemon.name} default front image sprite`}
      />
      <CardHeader>
        <Typography>{`#${pokemon.id} - ${pokemon.name}`}</Typography>
      </CardHeader>
      <CardContent>
        <Typography>Name: {pokemon.name}</Typography>
        <Box display={"flex"} alignItems="center">
          <Typography>Types:</Typography>
          {pokemon.types.map((type, id) => (
            <Chip
              key={`${id}-${type}`}
              sx={{
                marginX: theme.spacing(1),
                backgroundColor: pokemonType[type],
                color: "white",
              }}
              label={type}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
