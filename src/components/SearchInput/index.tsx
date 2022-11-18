import React from "react";
import { InputAdornment, AutocompleteRenderInputParams } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextField } from "./style";

const SearchInput: React.FC<AutocompleteRenderInputParams> = (params) => {
  return (
    <StyledTextField
      {...params}
      placeholder="Search"
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default SearchInput;
