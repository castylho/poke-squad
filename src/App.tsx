import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Box from "@mui/material/Box";
import { useDebounce } from "./utils/useDebounce";
import { getPokemonURL } from "./api/constants";
import { formatPokemonData } from "./utils/formatData";
import { Pokemon, PokemonAPI } from "./api/types";
import PokemonCard from "./components/PokemonCard";
import { Typography } from "@mui/material";

type State = {
  currPokemon: Pokemon;
  pokeParty: Pokemon[];
  errMsg: string;
  searchText: string;
};

const initialState: State = {
  currPokemon: {} as Pokemon,
  pokeParty: [],
  errMsg: "",
  searchText: "",
};

function App() {
  const [state, setState] = useState<State>(initialState);

  const debouncedSearchValue = useDebounce(state.searchText);
  const hasValidPokemon = Object.hasOwn(state.currPokemon, "name");

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setState({ ...state, searchText: value.toLowerCase() });
  };

  const searchPokemon = async (searchTerm: string): Promise<PokemonAPI> => {
    const res = await fetch(getPokemonURL(searchTerm));
    if (!res.ok) throw Error("failed request");

    return res.json();
  };

  useEffect(() => {
    searchPokemon(debouncedSearchValue)
      .then((data) => {
        console.log(formatPokemonData(data));
        const currPokemon = formatPokemonData(data);
        setState({
          ...state,
          currPokemon,
        });
      })
      .catch((e) => {
        console.log(`error message => ${e}`);

        setState({ ...state, errMsg: e });
      });
  }, [debouncedSearchValue, setState]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column"
      maxWidth={900}
      height="100vh"
    >
      <Typography variant="body1" align="center">
        Welcome to your pokemon builder party. Here you can find all the
        pokemons that you wish you had in your party and a description of your
        overall strengths and weakeness
      </Typography>
      <Box my={2}>
        <Search searchValue={state.searchText} onChange={onChange} />
      </Box>
      {hasValidPokemon && <PokemonCard pokemon={state.currPokemon} />}
    </Box>
  );
}

export default App;
