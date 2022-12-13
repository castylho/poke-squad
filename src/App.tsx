import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Box from "@mui/material/Box";
import { useDebounce } from "./utils/useDebounce";
import { getPokemonURL } from "./api/constants";

function App() {
  const [searchText, setSearchText] = useState("");

  const debouncedSearchValue = useDebounce(searchText);

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setSearchText(value);
  };

  useEffect(() => {
    console.log(`debouncedSearchValue => ${debouncedSearchValue}`);
    // getPokemonURL(debouncedSearchValue)
  }, [debouncedSearchValue]);

  return (
    <Box mx="auto">
      <Search searchValue={searchText} onChange={onChange} />
    </Box>
  );
}

export default App;
