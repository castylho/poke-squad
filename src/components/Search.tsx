import TextField from "@mui/material/TextField";
import React, { FC } from "react";

interface SearchProps {
  searchValue: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const SEARCH_LABEL = "E.g: Pikachu";

const Search: FC<SearchProps> = ({ searchValue, onChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label={SEARCH_LABEL}
      variant="outlined"
      value={searchValue}
      onChange={onChange}
    />
  );
};

export default Search;
