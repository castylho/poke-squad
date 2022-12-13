import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Box from "@mui/material/Box";
import { useDebounce } from "./utils/useDebounce";
import { getPokemonURL } from "./api/constants";
import { formatPokemonData } from "./utils/formatData";
import { PokemonAPI } from "./api/types";

function App() {
  const [searchText, setSearchText] = useState("");

  const debouncedSearchValue = useDebounce(searchText);

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setSearchText(value);
  };

  const searchPokemon = async (searchTerm:string):Promise<PokemonAPI> => {
    const res = await fetch(getPokemonURL(searchTerm))
    if(!res.ok) throw Error('failed request')

    return res.json()
  }

  useEffect(() => {
    searchPokemon(debouncedSearchValue).then((data) => {
      console.log(formatPokemonData(data));
      
    })
    
  }, [debouncedSearchValue]);

  return (
    <Box mx="auto">
      <Search searchValue={searchText} onChange={onChange} />
    </Box>
  );
}

export default App;
